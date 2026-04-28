
const axios = require('axios');


const listarPokemons = async (req, res) => {
    try {
        const { pagina = 1 } = req.query
        const limit = 20
        const offset = (pagina - 1) * limit

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

        return res.send(data.results)


    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}





const detalharPokemon = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).json({ mensagem: 'informe o Id do Pokemon que deseja pesquisar' });
        }

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);         
        const pokemon = {
           id:data.id,
           name:data.name,
           height:data.height,
           weight:data.weight,
           base_experience:data.base_experience,
           forms:data.forms,
           abilities:data.abilities,
           species:data.species
        } 

        return  res.send(pokemon)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}

module.exports = {
    listarPokemons,
    detalharPokemon
}