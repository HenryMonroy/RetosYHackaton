const bdTranslate = [
    { 
        language: "Español", 
        text: "Bienvenido al curso de React Native en PachaQtec", 
        id: 1 
    },
    { 
        language: "Ingles",
        text: "Welcome to the React Native course at PachaQtec",
        id: 2
    }, 
    { 
        language: "Francés",
        text: "Bienvenue dans le cours React Native chez PachaQtec",
        id: 3
    }, 
    { 
        language: "Italiano",
        text: "Benvenuti al corso React Native presso PachaQtec",
        id: 4
    },
    {
        language: "Portugués", 
        text: "Bem-vindo ao curso React Native na PachaQtec", 
        id: 5
    }
];

//console.log(bdTranslate);

function translate(textToTranslate, languageToTranslate) {
    const isLanguageFrom = (objLanguage) => {
        return [textToTranslate].includes(objLanguage.text);
    }
    let languageFrom = bdTranslate.find(isLanguageFrom);

    const isLanguageTo = (objLanguage) => {
        return [languageToTranslate].includes(objLanguage.language)
    }
    let languageTo = bdTranslate.find(isLanguageTo);

    return `El texto: ${languageFrom.text}\nse tradujo del idioma ${languageFrom.language} al ${languageTo.language} \n${languageTo.text}`;
}

console.log(translate("Bem-vindo ao curso React Native na PachaQtec", "Francés"));