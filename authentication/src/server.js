import app from "./app/app.js";
import config from "./config/config.js";
import connectToDb from "./config/db.js";

connectToDb()

app.listen(config.PORT, () => {
    console.log(`Server is Running ${config.PORT}`)
})