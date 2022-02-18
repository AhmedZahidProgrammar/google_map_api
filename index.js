try{
const app=require("express")();
const bodyParser=require("body-parser");
var cors = require("cors");
     //app.use(bodyParser.urlencoded({ extended: true }) );
     //   app.use(bodyParser.json({ type: 'application/*+json' }));
    // parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
extended:true
}));
app.listen(3000,()=>console.log("Connected to server"));
app.get('/',(req,res)=>{
res.send('Server is up and running');
});
const routes=require("./routes/routes");
app.use("/tojitos",routes);
}catch(e){
console.log(e);
}