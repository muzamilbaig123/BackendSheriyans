const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");

const registerController = async (req, res) => {

    const { name, email, password } = req.body;

    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign({
        user
    }, 

    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"

    )

    res.status(200).json({
        message: "User Created Sucessfully!",
        data:{
            user,
        },
        token
    })
}


module.exports = registerController;