1- 
Express js Install 

2-
Protocols: 
    Http = without secuirty   (req, res)
    Https = secuirty (req, res)
    FTP =  File transfer protocol (req, file, cb)
    SMTP, = simple mail transfer protocol
    webSockets = two way communications. frontend bhi req kar sakta hai and backend bhi 
                 using whastapp , Vcall, VCall, chats

3-
Methods: 
    Rest Api's = Represantational state transfer Apis
    Get = data get ke liye 
    Post = data insert ke liye
    Put/Patch = update ke liye
    delete = delete ke liye                    

4-
req, res
    res = send the output | message
    req = it accpet frontend data   (body, params, query pagination)

5- 
express ku nahi pata text accpet karna hai ya josn. solution app.use(express.json())

6- Put and Patch Differnece:  update put me entire object update karta hai but patch me only value update karta hai 


7- FTP: 
Multer use file transfer chunks me media jata hai storage mey. multer 2 type storage hotey hain. 
1- diskstorage  =  Local disk per save image
2- memory storage  =  server uploading use  

8- Database only text and json ke liye hota hai

9- FTP controller banya but form data pre post kiya but console me undefine araha hai. because middelwear use nahi kiya 