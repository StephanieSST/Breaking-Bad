let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let mensagem = document.querySelector('#message');
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido!';
        txt.style.color = 'red';
    }
    else {
        txt.innerHTML = "Nome Válido!"
        txt.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txt.innerHTML = 'E-mail Inválido!'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'E-mail Válido!'
        txt.style.color = 'green'
        emailOk = true;
    }

}

function validaMensagem() {
    let txt = document.querySelector('#txtMessage')

    if (mensagem.value.length > 100) {
        txt.innerHTML = 'Digite no máximo 100 caracteres';
        txt.style.color = 'red';
        txt.style.display = 'block'
    }
    else {
        txt.style.display = 'none'
        mensagemOk = true;
     }
}

function enviar() {

    let txt = document.querySelector('#enviarForm')

    if (nomeOk === true && emailOk === true && mensagemOk === true) {
       
        txt.innerHTML = `${nome.value}, Formulário Enviado com Sucesso!`
    } else {

        txt.innerHTML = 'Preencha todos os campos corretamente!'
    }
}

