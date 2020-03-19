const express = require ("express")
// const apiroute= require("./routes/apiroute.js");
const htmlroute= require("./routes/htmlroute.js")
const PORT = process.env.PORT|| 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extened : true}));
app.use(express.static("public"));
// app.use("/api", apiroute)
app.use("/", htmlroute)





app.listen(PORT, () => console.log ("app is lisining on port", PORT))
