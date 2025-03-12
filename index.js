const nomeHeroi = ("Himmel")
const xp = (99999)
const liga =  xp < 1000 ? "Ferro" :
              xp < 2000 ? "Bronze" :
              xp < 5000 ? "Prata" :
              xp < 7000 ? "Ouro" :
              xp < 8000 ? "Platina" :
              xp < 9000 ? "Ascendente" :
              xp < 10000 ? "Imortal" : "Radiante" ;

console.log(`O heroi ${nomeHeroi} está na liga ${liga}`)