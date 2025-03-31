from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import torch
import uuid
import os

from shap_e.diffusion.sample import sample_latents
from shap_e.diffusion.gaussian_diffusion import diffusion_from_config
from shap_e.models.text_to_3d import create_model_and_diffusion
from shap_e.util.notebooks import decode_latent_mesh, export_mesh

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model, diffusion = create_model_and_diffusion('base40M')
model.eval().to('cuda' if torch.cuda.is_available() else 'cpu')

class Prompt(BaseModel):
    prompt: str

@app.post("/generate")
async def generate_model(data: Prompt):
    prompt = data.prompt
    device = 'cuda' if torch.cuda.is_available() else 'cpu'

    latents = sample_latents(
        batch_size=1,
        model=model,
        diffusion=diffusion,
        guidance_scale=15.0,
        model_kwargs=dict(texts=[prompt]),
        progress=True,
        device=device,
    )

    mesh = decode_latent_mesh(latents[0].cpu())
    output_name = f"{uuid.uuid4().hex}.glb"
    output_path = f"./outputs/{output_name}"
    os.makedirs("./outputs", exist_ok=True)
    export_mesh(mesh, output_path)

    return {"file": output_name}