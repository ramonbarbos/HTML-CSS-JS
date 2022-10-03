const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const cpf = document.getElementById('cpf')
const senha = document.getElementById('senha')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const nomeValue = nome.trim()
    const emailValue = email.value.trim()
    const cpfValue = email.value.trim()
    const senhaValue = senha.value.trim()
    if(nomeValue === ''){
        errorValidation(nome,"Preencha o campo")
    }else{

    }
}

function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'input error'

}