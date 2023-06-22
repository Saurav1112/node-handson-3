const register = (req, res)=>{
    res.send({
        message:"You are in register page"
    })
}

const login = (req, res)=>{
res.send({
    message:"You are in login page"
})
}

const aboutus = (req, res)=>{
res.send({
    message:"You are in about us"
})
}

const contactus = (req, res)=>{
res.send({
    message:"You have succesfully visited to contact us"
})
}

module.exports = {aboutus,contactus,login,register}