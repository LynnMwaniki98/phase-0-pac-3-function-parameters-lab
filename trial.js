const name = Grace 
const language = Javascript

function introduction (name){
    return 'Hi, my name is ${name}.';
}

function introductionWithLanguage (name, language){
    return 'Hi, my name is ${name} and i am learning how to program in ${language}.';

}

function introductionWithLanguageOptional (name , language = "Javascript"){
    return 'Hi, my name is ${name} and  I am learning to program in ${language}';
}