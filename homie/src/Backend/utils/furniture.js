let defaul=["sofa","bed","table","cupboard","Almirah"]

const randFurniture=()=>{
    const size=defaul.length();
    return defaul[Math.floor(size*Math.random())];
}

module.exports(randFurniture);