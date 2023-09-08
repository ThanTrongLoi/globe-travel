$(document).ready(function () {
    const form = $('form')
    const inputContainers = $('#input-group input')
    // auth
    const email = $('#email')
    const password = $('#password')
    const newPassword = $('#new-password')
    const rePassword = $('#re-password')
    const firstName = $('#firstName')
    const lastName = $('#lastName')
    const number = $('#number')
    const code = $('#code')
    // add payment method
    const cardNumber = $('#card-number')
    const expDate = $('#expDate')
    const cvc = $('#cvc')
    const nameCard = $('#nameCard')
    const country = $('#country')
    const agree = $('#agree')
    //flight
    const location = $('#location')
    const departReturn = $('#depart-return')
    const passClass = $('#pass-class')
    const economy = $('#Economy')
    const firstClass = $('#First-Class')
    const businessClass = $('#Busines-Class')
    //hotel
    const checkIn = $('#check-in')
    const checkOut = $('#check-out')

    form.on('submit', function (e) {
        // e.preventDefault();
        if (isFormValid()) {
            form.submit();
        } else {
            e.preventDefault();
        }
        // validateInputs()
        switch (window.location.href.slice(22)) {
            case "authLogin.html":
                validateFormLogin();
                break;
            default:
        }
    })
    const isFormValid = () => {
        let result = false
        inputContainers.each(function () {
            console.log($(this))
            if ($(this).hasClass('success')) result = true
            else result = false
        })
        return result
    }

    inputContainers.on('input', function (e) {
        if (e.target.value) {
            $(this).addClass('success')
            $(this).removeClass('error')
        } else {
            $(this).removeClass('success')
        }
    })

    validateFormLogin = () => {
        if (email.val() == "") {
            setError(email)
        }
        if (password.val() == "") {
            setError(password)
        }
    }

    const validateInputs = () => {
        
        // if (newPassword.val() == "") {
        //     setError(newPassword)
        // }
        // if (rePassword.val() == "") {
        //     setError(rePassword)
        // }
        // if (firstName.val() == "") {
        //     setError(firstName)
        // }
        // if (lastName.val() == "") {
        //     setError(lastName)
        // }
        // if (number.val() == "") {
        //     setError(number)
        // }
        // if (code.val() == "") {
        //     setError(code)
        // }
        // if (cardNumber.val() == "") {
        //     setError(cardNumber)
        // }
        // if (expDate.val() == "") {
        //     setError(expDate)
        // }
        // if (cvc.val() == "") {
        //     setError(cvc)
        // }
        // if (nameCard.val() == "") {
        //     setError(nameCard)
        // }
        // if (country.val() == "") {
        //     setError(country)
        // }
        // if (agree.val() == "") {
        //     setError(agree)
        // }
        // if (location.val() == "") {
        //     setError(location)
        // }
        // if (departReturn.val() == "") {
        //     setError(departReturn)
        // }
        // if (passClass.val() == "") {
        //     setError(passClass)
        // }
        // if (economy.val() == "") {
        //     setError(economy)
        // }
        // if (firstClass.val() == "") {
        //     setError(firstClass)
        // }
        // if (businessClass.val() == "") {
        //     setError(businessClass)
        // }
        // if (checkIn.val() == "") {
        //     setError(checkIn)
        // }
        // if (checkOut.val() == "") {
        //     setError(checkOut)
        // }

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
})