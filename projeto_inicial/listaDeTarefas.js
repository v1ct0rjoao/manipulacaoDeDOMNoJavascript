//vamos manipular o DOM 

//percorrendo o DOM 

import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const criarTarefa = (evento) => {

    //previni o dado de ir para algum lugar.
    evento.preventDefault()

    // criando um html dentro do js
    const lista = document.querySelector('[data-list]')
    //capturar o valor do input do formulario 
    const input = document.querySelector("[data-form-input]")

    //propriedade que me devolve o valor 
    const valor = input.value


    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = ` <p class="content" >${valor}</p>`
    // o ineerHTML me permiti ter acesso a esse conteudo 
    tarefa.innerHTML = conteudo
    //criando hierarquia
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)

}

const novaTarefa = document.querySelector('[data-form-button]');
//escutador: evento > onde que vai colocar o evento > o que acontece depois
novaTarefa.addEventListener('click', criarTarefa)

//regra de negocio 