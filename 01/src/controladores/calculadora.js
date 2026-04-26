const produtos = require('../bancodedados/produtos')
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

const CalcularFreteDoproduto = (req,res)=>{

};

module.exports ={
    listarProdutos,
    detalharProduto,
    CalcularFreteDoproduto
}