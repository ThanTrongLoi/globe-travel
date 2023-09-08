$(document).ready(function(){
    //
    const radioBtn = $('#booking-pay .pay-item')
    payActive(radioBtn, 'pay--active')
    //
    const cardRadioBtnFlight = $('#booking-card #booking-flight')
    const cardRadioBtnHotel = $('#booking-card #booking-hotel')
    payActive(cardRadioBtnFlight, 'pay--active', isCard = true, url = 'flightBookingDetail.html')
    payActive(cardRadioBtnHotel, 'pay--active', isCard = true, url = 'hotelBookingDetail.html')
})


const payActive = (rdo, classActive, isCard = false, url) => {
    rdo.each(function () {
        $(this).click(function () {
            rdo.removeClass(classActive)
            $(this).addClass(classActive)
            if (isCard) window.location.href = url
        })
    })
}