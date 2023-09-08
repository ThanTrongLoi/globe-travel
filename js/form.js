$(document).ready(function () {
    const form = $('form')
    const inputContainers = $('#input-group input')
    
    const password = $('#password')
    const newPassword = $('#new-password')
    const rePassword = $('#re-password')

    const showPass = $('#showPassword')
    const showNewPass = $('#showNewPassword')
    const showRePass = $('#showRePassword')
    toggleShowPass(showPass, password)
    toggleShowPass(showNewPass, newPassword)
    toggleShowPass(showRePass, rePassword)

    const windowPathName = window.location.href
    // let pathSlice;
    // if (windowPathName.includes("?")) {
    //     pathSlice = windowPathName.slice(windowPathName.lastIndexOf('/') + 1, windowPathName.indexOf('?'))
    // } else {
    //     pathSlice = windowPathName.slice(windowPathName.lastIndexOf('/') + 1)
    // }
    // console.log(pathSlice)   

    form.on('submit', function (e) {
        e.preventDefault();
        // validateInputs()
        // switch (pathSlice) {
        //     case "authLogin.html":
        //         validateFormLogin();
        //         if (isFormValid()) {
        //             if (login()) {
        //                 localStorage.setItem("isUser", true)
        //                 setTimeout(() => {
        //                     form.submit();
        //                 }, 1000);
        //             }
        //         } else {
        //             e.preventDefault();
        //             // localStorage.setItem("isUser", false)
        //         }
        //         break;
        //     case "authSignup.html":
        //         validateFormSignup()
        //         if (isFormValid()) {
        //             onSignup();
        //             form.submit();
        //         } else {
        //             e.preventDefault();
        //         }
        //         break;
        //     case "addPayment.html":
        //         validateFormAddPayment()
        //         if (isFormValid()) {
        //             form.submit();
        //         } else {
        //             e.preventDefault();
        //         }
        //         break;
        //     case "authForgotpassword.html":
        //         validateFormForgotPassword()
        //         if (isFormValid()) {
        //             form.submit();
        //         } else {
        //             e.preventDefault();
        //         }
        //         break;
        //     case "authVerify.html":
        //         validateFormVerify()
        //         if (isFormValid()) {
        //             form.submit();
        //         } else {
        //             e.preventDefault();
        //         }
        //         break;
        //     case "authNewpassword.html":
        //         validateFormNewPassword()
        //         if (isFormValid()) {
        //             form.submit();
        //         } else {
        //             e.preventDefault();
        //         }
        //         break;
        //     case "flight.html":
        //         validateFormFlight()
        //         if (isFormValid()) {
        //             form.submit();
        //         } else {
        //             e.preventDefault();
        //         }
        //         break;
        //     default:
        // }
    })

    inputContainers.on('input', function (e) {
        if (e.target.value) {
            $(this).addClass('success')
            $(this).removeClass('error')
        } else {
            $(this).removeClass('success')
        }
    })

    const radBtnsClass = $('input[name=classify]')

    if ($('.drop-down-item').children('.drop-down-item__heading').length > 0) {
        radBtnsClass.click(function () {
            passClass[0].innerHTML = $(this).val()
        })
    }

    const radBtnsTrip = $('input[name=trip]')
    if ($('.drop-down-item').children('.drop-down-item__trip').length > 0) {
        radBtnsTrip.click(function () {
            const drop = $('.drop-down-item')
            $('#tripValue')[0].innerHTML = $(this).val()
        })
    }
    const dropDown = $('.drop-down')
    dropDown.each(function () {
        $(this).click(function () {
            // console.log($(this))
            $(this).css({
                border: '2px solid #8DD3BB',
            })
            $(this).children('p').css({
                color: '#8DD3BB',
            })
            $(this).children('.drop-down-item').addClass('drop-down-item--active')

        })
    })
    $(window).mouseup(function (event) {
        // console.log(event)
        const drop = $('.drop-down-item')
        if (event.target != drop && event.target.parentElement != drop) {
            drop.removeClass('drop-down-item--active')
            drop.parent().removeAttr('style')
            drop.parent().children('p').removeAttr('style')
        }

    })
    const numberOfPassenger = $('#numberOfPassenger')
    const passClass = $('#pass-class')

    const countPassengerFlight = () => {
        let count = 1;
        const countNumber = $('#count')
        const minus = $('#minus')
        const plus = $('#plus')
        minus.click(function () {
            if (count > 1) {
                count -= 1;
                numberOfPassenger[0].innerHTML = count
                countNumber[0].innerHTML = count
            }
        })
        plus.click(function () {
            count += 1
            numberOfPassenger[0].innerHTML = count
            countNumber[0].innerHTML = count
        })
    }

    const countRoom = () => {
        let count = 1;
        const room = $('#room')
        const countRoom = $('#count-room')
        const minusRoom = $('#minusRoom')
        const plusRoom = $('#plusRoom')
        let cGuest = 1;
        const guest = $('#guest')
        const countGuest = $('#count-guest')
        const minusGuest = $('#minuGuest')
        const plusGuest = $('#plusGuest')

        minusRoom.click(function () {
            if (count > 1) {
                count -= 1;
                room[0].innerHTML = count
                countRoom[0].innerHTML = count
            }
        })
        plusRoom.click(function () {
            count += 1;
            room[0].innerHTML = count
            countRoom[0].innerHTML = count
        })
        minusGuest.click(function () {
            if (cGuest > 1) {
                cGuest -= 1;
                console.log(cGuest)
                guest[0].innerHTML = cGuest
                countGuest[0].innerHTML = cGuest
            }
        })
        plusGuest.click(function () {
            cGuest += 1;
            guest[0].innerHTML = cGuest
            countGuest[0].innerHTML = cGuest
        })
    }
    countPassengerFlight()


    countRoom()
})



const toggleShowPass = (evt, el) => {
    evt.click(function () {
        $(this).find('img').toggle()
        if (el.attr('type') == 'password') {
            el.attr('type', 'text')
        } else {
            el.attr('type', 'password')
        }
    })
}

const setError = el => {
    el.removeClass('success')
    el.addClass('error')
}
const setSuccess = el => {
    el.addClass('success')
    el.removeClass('error')
}
const isValidEmail = email => {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

const validateFormLogin = () => {

    const email = $('#email')
    const password = $('#password')

    const user = localStorage.getItem('user-account')
    const data = JSON.parse(user)

    if (email.val().trim() == "") {
        setError(email)
    } else if (isValidEmail(email.val().trim())) {
        setSuccess(email)
    }
    if (password.val().trim() == "") {
        setError(password)
    }
    if (email.val().trim() == data.email && password.val().trim() == data.password) {
        alert('success')
        localStorage.setItem('isUser',true)
        window.location.href = 'index.html'
        // return true
    } else if (email.val().trim() != '' && email.val().trim() != data.email) {
        alert('Wrong Email')
        // return false
    }
}

const validateFormSignup = () => {
    const email = $('#email')
    const password = $('#password')
    const rePassword = $('#re-password')
    const firstName = $('#firstName')
    const lastName = $('#lastName')
    const phoneNumber = $('#phoneNumber')
    if (firstName.val().trim() == "") {
        setError(firstName)
    }
    if (lastName.val().trim() == "") {
        setError(lastName)
    }

    if (phoneNumber.val().trim() == "") {
        setError(phoneNumber)
    }
    if (email.val().trim() == "") {
        setError(email)
    } else if (isValidEmail(email.val().trim())) {
        setSuccess(email)
    }
    if (password.val().trim() == "") {
        setError(password)
    }
    if (rePassword.val().trim() == "") {
        setError(rePassword)
    } else if (rePassword.val().trim() == password.val().trim()) {
        setSuccess(rePassword)
    } else {
        setError(rePassword)
        alert('password and confirm password do not match')
    }
    let user = {
        firstName: firstName.val().trim(),
        lastName: lastName.val().trim(),
        phoneNumber: phoneNumber.val().trim(),
        email: email.val().trim(),
        password: password.val().trim(),
    }

    if (firstName.val().trim() != "" &&
        lastName.val().trim() != "" &&
        phoneNumber.val().trim() != "" &&
        email.val().trim() != "" &&
        password.val().trim() != "" &&
        rePassword.val().trim() != "" &&
        rePassword.val().trim() == password.val().trim()) {

        let json = JSON.stringify(user)
        localStorage.setItem("user-account", json)
        window.location.href = 'addPayment.html'
    }
}

const validateFormAddPayment = () => {
    const cardNumber = $('#cardNumber')
    const expDate = $('#expDate')
    const cvc = $('#cvc')
    const nameCard = $('#nameCard')
    const country = $('#country')
    if (cardNumber.val().trim() == "") {
        setError(cardNumber)
    }
    if (expDate.val().trim() == "") {
        setError(expDate)
    }

    if (cvc.val().trim() == "") {
        setError(cvc)
    }
    if (nameCard.val().trim() == "") {
        setError(nameCard)
    }
    if (country.val().trim() == "") {
        setError(country)
    }
    if (cardNumber.val().trim() != "" &&
    expDate.val().trim() != "" &&
    cvc.val().trim() != "" && 
    nameCard.val().trim() != "" &&
    country.val().trim() != ""){
        window.location.href = "authLogin.html"
    }
}
const validateFormForgotPassword = () => {
    const email = $('#email')
    if (email.val().trim() == "") {
        setError(email)
    } else if (isValidEmail(email.val().trim())) {
        setSuccess(email)
        window.location.href = 'authVerify.html'
    }
}
const validateFormVerify = () => {
    const code = $('#code')
    if (code.val().trim() == '') {
        setError(code)
    }else {
        window.location.href = 'authNewpassword.html'
    }
}

const validateFormNewPassword = () => {
    const newPassword = $('#new-password')
    const rePassword = $('#re-password')
    if (newPassword.val().trim() == '') {
        setError(newPassword)
    }
    if (rePassword.val().trim() == '') {
        setError(rePassword)
    } else if (rePassword.val().trim() != newPassword.val().trim()) {
        setError(rePassword)
        alert('password and confirm password do not match')
    } 
    if (newPassword.val().trim() != '' &&
    rePassword.val().trim() != '' && rePassword.val().trim() == newPassword.val().trim()){
        window.location.href = 'authLogin.html'
    }
}

const validateFormFlight = () => {
    const location = $('#location')
    const departReturn = $('#depart-return')
    if (location.val().trim() == '') {
        setError(location)
        console.log('error location')
    }
    if (departReturn.val().trim() == '') {
        setError(departReturn)
        console.log('error time')
    }
    else {
        window.location.href = "flightListing.html"
    }
}
const validateFormStay = (e) => {
    const address = $('#address')
    const checkIn = $('#check-in')
    const checkOut = $('#check-out')
    if (address.val().trim() == '') {
        setError(address)
    }
    if (checkIn.val().trim() == '') {
        setError(checkIn)
    }
    if (checkOut.val().trim() == '') {
        setError(checkOut)
    } else {
        window.location.href = "hotelListing.html"
    }
} 