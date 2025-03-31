import { useState } from 'react'
import axios from 'axios'

function App() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)

  const handleGenerate = async () => {
    setLoading(true)
    setFile(null)
    try {
      const res = await axios.post('https://ia3dbackend.onrender.com/generate', {
        prompt,
      })
      setFile(res.data.file)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Gerador 3D com IA (Shap-E)</h1>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Descreva algo... (ex: robô com asas)"
        style={{ width: '300px', padding: '0.5rem' }}
      />
      <button onClick={handleGenerate} disabled={loading} style={{ marginLeft: '1rem' }}>
        {loading ? 'Gerando...' : 'Gerar modelo'}
      </button>
      {file && (
        <div style={{ marginTop: '1rem' }}>
          <a href={`https://ia3dbackend.onrender.com/outputs/${file}`} download>
            Baixar {file}
          </a>
        </div>
      )}
    </div>
  )
}

export default App