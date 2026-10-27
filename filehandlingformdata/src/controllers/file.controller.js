const fileController = (req, res) => {

    try{

        let body = req.body;
        let file = req.file;

        console.log(body)
        console.log(file)
        
        res.status(200).json({
            message: "file recived successfully!"
        })
    }catch(e){

        return res.status(500).json({
            message: "Internal server error"
        })
    }

}

export default fileController;


