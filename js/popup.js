$(document).ready(function(){

    const addCard = $('.-card--add')
    const popUp = $('.pop-up')
    const closePopUp = $('.add-payment__close')

    addCard.click(function () {
        popUp.css("display", "block")
    })
    closePopUp.click(function () {
        popUp.css("display", "none")
    })

    
})