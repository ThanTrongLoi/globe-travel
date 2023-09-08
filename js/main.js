url_ariport = "https://script.googleusercontent.com/macros/echo?user_content_key=wI-w1dcVXhs6m3ekssXQi6zBtomN8d-EXDFVWbL2hTm0PQsomZr2o6HdcKHj9_WFBWgfqzd89QpwuYEiZzil1utYxWX8B0cCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnChCmc_qap3e34xHl7gMlJu-13I7RRDgsdS2OpMow__WmmgwKOweS7SnINkgUNE6pd1bTGYS43vuDLw_2X8EUHViMPhkeZO1Dg&lib=Mq7PwdHqFJdbVMHmEOHfS59ftfhwA5jNT";

$(document).ready(function () {


    const bookingLogin = $('#booking-login')
    const bookingCard = $('#booking-card')
    const headerLogin = $('.header-right')
    const headerUser = $('.header-account')

    const isUser = localStorage.getItem('isUser');
    // console.log(isUser)

    if (isUser) {
        bookingLogin.css("display", "none")
        bookingCard.css("display", "block")
        headerLogin.css("display", "none")
        headerUser.css("display", "flex")
    } else {
        bookingLogin.css("display", "block")
        bookingCard.css("display", "none")
        headerLogin.css("display", "flex")
        headerUser.css("display", "none")
    }
    headerUser.find('.header-account__user').on('click', function () {
        headerUser.find('.user-info').addClass('user-info--active')

    })
    $(window).mouseup(function (event) {
        // console.log(event)
        var pol = headerUser.find('.user-info')
        if (event.target != pol && event.target.parentElement != pol) {
            pol.removeClass('user-info--active')
        }

    })
    // $(window).on('load', function () {
    // })

    //slide-dots
    $('.slide-dot a').each(function () {
        $(this).click(function () {
            $('.slide-dot a').removeClass('active')
            $(this).addClass('active')
        })
    })

    const btnsHeader = $('.header-left a')

    btnsHeader.each(function () {
        $(this).click(function (e) {
            if ($(this).attr("id") == "flights") {
                localStorage.setItem('isFlight', 'true')
                localStorage.removeItem('isStay')

            } else {
                localStorage.setItem('isStay', 'true')
                localStorage.removeItem('isFlight')
            }
        })
    })
    const isFlight = localStorage.getItem('isFlight');
    const isStay = localStorage.getItem('isStay')
    const link = window.location.href.slice(window.location.href.lastIndexOf('/') + 1)
    // console.log(link)
    if (link != "index.html" || link != "/") {
        if (isFlight) {
            $('#stays').removeClass('header-active')
            $('#flights').addClass('header-active')
        }
        if (isStay) {
            $('#flights').removeClass('header-active')
            $('#stays').addClass('header-active')
        }
    }
    if (link == "index.html" || link == "" || link == "#" ) {
        localStorage.removeItem('isStay')
        localStorage.removeItem('isStay')
        timeout = setTimeout(function () {
            window.location.reload()
        }, 1000)
        clearInterval(timeout)
        $('#stays').removeClass('header-active')
        $('#flights').removeClass('header-active')
    }
});

function logout() {
    localStorage.removeItem('isUser')
    alert('Logout Success')
    document.location.reload(true)
}

