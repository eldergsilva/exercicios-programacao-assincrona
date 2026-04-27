const produtos = require('../bancodedados/produtos');
const {getCityFromZipcode,getStateFromZipcode}=require('utils-playground')
const listarProdutos = async (req, res) => {
    try {
        return res.json(produtos)

    } catch(err) {
        return res.status(500).json({ mensagem: err.message })
    }
}

const detalharProduto = async (req, res) => {
    try {
        const { idProduto } = req.params;
        const produto = produtos.find(produto => produto.id === Number(idProduto));
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
        return res.json(produto);
    } catch (err) {
        return res.status(500).json({ mensagem: err.message })
    }
};

const CalcularFreteDoproduto = async (req,res)=>{
     
    try {
        const { idProduto,cep } = req.params;
        const produto = produtos.find(produto => produto.id === Number(idProduto));
        const estado = await getStateFromZipcode(cep);
        let  frete = 0 ;
        
        if (estado === "SP" || estado === "RJ") {
          frete = produto.valor * 15/100;
        } else if (estado === "BA" || estado === "SE" || estado === "AL" || estado === "PE" || estado === "PB") {
          frete = produto.valor * 10/100;
        } else {
           frete = produto.valor * 12/100;
        }

        const calculo = {
            produto,
            estado,
            frete
        }
     
        return res.json(calculo)         


    } catch (err) {
       return res.status(500).json({ mensagem: err.message }) 
    }


}




module.exports ={
    listarProdutos,
    detalharProduto,
    CalcularFreteDoproduto
}