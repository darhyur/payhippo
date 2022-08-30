const chooseLanguage = (language) => {
    const lowerCaseLanguage = language.toLowerCase();

    if (!language) {
        return { status: false, message: 'Sorry, the language key is required!' };
    }
    
  
    let response;
    
    switch (lowerCaseLanguage) {
        case 'eng':
            response = {
                status: true,
                message: 'Language supported!',
                data: { message: 'Hello World!' },
                code: 200,
            }
            break;
        case 'yrb':
            response = {
                status: true,
                message: 'Language supported!',
                data: { message: 'Mo ki O Ile Aiye!' },
                code: 200,
            };
            break;
        case 'igb':
            response = {
                status: true,
                message: 'Language supported!',
                data: { message: 'Ndewo Ụwa!' },
                code: 200,
            }
            break;
        case 'hsa':
            response = {
                status: true,
                message: 'Language supported!',
                data: { message: 'Sannu Duniya!' },
                code: 200,
            };
            break;
        default:
            response = {
                status: false,
                message: 'The requested language is not supported',
                data: {},
                code: 400,
            };
            break;
    }
    return response;
}

module.exports = chooseLanguage;