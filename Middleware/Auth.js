const commonauth = (req, res, next)=>{
    console.log("You are on the first auth");
}

const Specificauth = (req, res, next)=>{
    console.log("You are on the Second auth");
}

module.exports = {commonauth,Specificauth}