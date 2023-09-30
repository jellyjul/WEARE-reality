const form = document.querySelector('.consult__validation')
const validateBtn = form.querySelector(' .consult__send')
const name = form.querySelector('.name')
const number = form.querySelector('.number')
const email = form.querySelector('.email')

const checkbox = form.querySelector('.checkbox')
const fields = form.querySelectorAll('.field')


const generateError = (text) => {
    let error = document.createElement('div')
    error.className ='error'
    error.style.color = 'red'
    error.innerHTML = text
    return error;
}

const removeValidation = () => {
    let errors = form.querySelectorAll('.error')
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}
const checkFieldsPresense = () => {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i]);
            let error = generateError('Заполните поле')
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
}
const  validateEmail = () => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const emailValue = email.value
    if(reg.test(emailValue) == false) {
        let error = generateError('Введите корректный e-mail')
        email.parentElement.insertBefore(error, email)
    return false;
    }
}

const validateNumber = () => {
    const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const numberValue = number.value
    if(reg.test(numberValue) == false) {
        let error = generateError('Введите корректный  номер телефона')
        number.parentElement.insertBefore(error, number)
    return false;
    }
}

const checkCheckbox = () => {

        if (checkbox.checked === false) {
            let error = generateError('Заполните поле')
            checkbox.parentElement.insertBefore(error, checkbox)
        }
        return false;
        }

form.addEventListener('submit', () => {

    event.preventDefault()
    removeValidation()
    checkFieldsPresense()
    validateEmail()
    validateNumber()
    checkCheckbox()

})