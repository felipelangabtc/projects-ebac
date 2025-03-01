document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            title: "Mooby",
            about: "About Mooby",
            community: "Mooby Community",
            collections: "NFT Collections",
            contact: "Contact Us",
            aboutText: "",
            communityTitle: "Mooby Community",
            collcetcionsTitle: "NFT Collections",
            contactTitle: "Contact Us."
        },
        pt: {
            title: "Mooby",
            about: "Sobre a Mooby",
            community: "Comunidade Mooby",
            collections: "Coleções NFT",
            contact: "Fale Conosco",
            aboutText: "",
            communityTitle: "Comunidade Mooby",
            collectionsTitle: "Coleções NFT",
            contactTitle: "Fale conosco."
        },
    };

    const languageButton = document.getElementById("languageButton");
    const elementsToTranslate = {
        "section-title": "title",
        "about-link": "about",
        "community-link": "community",
        "collections-link": "collections",
        "contact-link": "contact",
        "about-text": "aboutText",
        "community-title": "communityTitle",
        "collections-title": "collectionsTitle",
        "contact-title": "contactTitle"
    };

    function changeLanguage(lang) {
        // Atualiza os textos do site
        Object.keys(elementsToTranslate).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = translations[lang][elementsToTranslate[id]];
            }
        });

        // Atualiza o botão com a sigla do idioma ativo
        const flagIcons = {
            en: "🇺🇸 EN",
            pt: "🇧🇷 PT",
        };
        languageButton.innerHTML = flagIcons[lang]; 

        // Salva a escolha do idioma no LocalStorage
        localStorage.setItem("language", lang);
    }

    // Verifica se já há um idioma salvo e aplica
    const savedLanguage = localStorage.getItem("language") || "en";
    changeLanguage(savedLanguage);

    // Adiciona evento de clique aos botões de idioma
    document.querySelectorAll(".language-btn").forEach(button => {
        button.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            changeLanguage(lang);
        });
    });
});
