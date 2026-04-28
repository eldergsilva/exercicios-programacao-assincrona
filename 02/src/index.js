const express =require ('express');
const rotas = require('./rotas');

const app=express();

app.use(express.json())
app.use(rotas);





const PORT = 8000
app.listen(PORT,(req,res)=>{
    console.log(`servidor no ar na porta  ${PORT}`);
    
});