//vamos manipular o DOM 

//percorrendo o DOM 
//usando o data atribute
const criarTarefa = (evento) => {

    //previni o dado de ir para algum lugar.
    evento.preventDefault()

    //capturar o valor do input do formulario 
    const input = document.querySelector("[data-form-input]")

    //proproedade que me devolve o valor 
    const valor = input.value
    console.log(valor)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]');
//escutador: evento > onde que vai colocar o evento > o que acontece depois
novaTarefa.addEventListener('click', criarTarefa)




