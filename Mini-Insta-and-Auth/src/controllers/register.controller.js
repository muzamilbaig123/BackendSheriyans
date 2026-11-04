const jwt = require("jsonwebtoken")

const registerController = (req, res) => {

    const { email, password } = req.body;

    const token = jwt.sign({
        email, 
        password
    }, 

    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"

    )

    res.status(200).json({
        message: "User Created Sucessfully!",
        data:{
            email,
            password,
            token
        }
    })
}


module.exports = registerController;