const BotaoConclui = () => {

    const botaoConclui = document.createElement('button')

    botaoConclui.addEventListener('click', concluirTarefa)
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = "concluir"
    return botaoConclui

}

const concluirTarefa = (evento) => {

    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')

}

export default BotaoConclui