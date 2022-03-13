/*alert("'ola mundo")
1- listagem
2- cartao pokemon

    - remover a classe aberto só do cartqao que esta aberto
    ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartao mostrar
    - remover a classe ativo que mostra o pokemon selecionado
    - adicionar a classe ativo no item da lista selecionado
*/

// criar duas variaveis para trabalhar com elemento da tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')


//evento de clique feito na listagem
listaSelecaoPokemons.foreach(pokemon => {
    pokemon.addEventListener('click', () =>{
        console.log(pokemon)
        //remover a classe aberto só do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para sabber qual cartao mostrar

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir )
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo só do cartao que esta aberto
        const cartaoPokemonAtivo = document.querySelector('.ativo')
        cartaoPokemonAberto.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add("ativo")
    })
})