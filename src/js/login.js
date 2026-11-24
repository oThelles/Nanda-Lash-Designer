const emailUser = 'Nanda'
const pswUser = 52026
const error = document.querySelector('.bg-error')
const msgError = document.querySelector('.msg-error')
const iconEye = document.querySelector('.fa-eye')

function login(event){
    if (event) event.preventDefault()
    let inputID = document.getElementById('id-user').value
    let inputPswValue = document.getElementById('psw-user').value
    if (inputID === '' || inputPswValue === ''){
        error.style.display = 'flex'
        msgError.textContent = 'Preencha todos os campos'
    } else {
        let inputPsw = Number(inputPswValue)
        if (inputID === emailUser && inputPsw === pswUser){
            window.location.href = './admin.html'
        } else {
            error.style.display = 'flex'
            msgError.textContent = 'As credenciais não são válidas'
        }
    }
}

function closeError(){
    error.style.display = 'none'
}

function showPsw(){
    let inputPsw = document.getElementById('psw-user')
    
    // Usamos '===' para comparar e alternamos as classes corretamente
    if(iconEye.classList.contains('fa-eye')){
        inputPsw.type = 'text'
        iconEye.classList.remove('fa-eye')
        iconEye.classList.add('fa-eye-slash')
    } else {
        inputPsw.type = 'password'
        iconEye.classList.remove('fa-eye-slash')
        iconEye.classList.add('fa-eye')
    }
}
