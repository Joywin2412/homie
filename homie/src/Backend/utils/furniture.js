let defaul=["sofa","bed","table","cupboard","Almirah"]

const randFurniture=()=>{
    const size=5;
    return defaul[Math.floor(size*Math.random())];
}

module.exports = randFurniture;