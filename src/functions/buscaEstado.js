const fetch = require("node-fetch")

module.exports = async function buscaEstado(uf){
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`)
    const json = await response.json()

    return json
}