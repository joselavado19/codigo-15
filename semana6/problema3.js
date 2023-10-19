const sortText = (word)=> word.toLowerCase().split("").sort().join("");


function isAnagram(text1, text2){
    if(text1.toLowerCase() === text2.toLowerCase()) return false;
    return sortText(text1) === sortText(text2);   
}

console.log(isAnagram("Hola", "zzzs"));
console.log(isAnagram("Roma", "orma"));

//
const miobjeto =[
    {
        RCN: getRaceURL,
        SPORTRADAR :getSportRadar,
        default : getNomadItem
    }

];

function examen(type){
const types =[
    "RCN" : getRaceUrl(params),
    "SPORTRADAR" : getSportRadar(params)
]

return types[type] ?? getNomadItem(params);
}
