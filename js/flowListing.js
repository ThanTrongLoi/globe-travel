$(document).ready(function () {
    const rangePrice = $('#price-field input')
    const progressPrice = $('#price-slider .flow-progress')
    const priceMin = $('#price-field .range-min')
    const priceMax = $('#price-field .range-max')

    let priceGap = 100
    priceMin.css({
        left: 0,
    })
    priceMax.css({
        right: 0,
    })
    rangePrice.each(() => {
        $(this).on('input', (e) => {
            let minVal = parseInt(rangePrice[0].value),
                maxVal = parseInt(rangePrice[1].value)

            const minPrice = "$" + minVal
            const maxPrice = "$" + maxVal

            if (maxVal - minVal < priceGap) {


                if (e.target.className === "flow-range__min") {
                    rangePrice[0].value = maxVal - priceGap
                } else {
                    rangePrice[1].value = minVal + priceGap

                }
            } else {
                priceMin.html(minPrice)
                priceMax.html(maxPrice)
                progressPrice.css({
                    left: (minVal / rangePrice[0].max) * 100 + "%",
                    right: 100 - (maxVal / rangePrice[1].max) * 100 + "%"
                })
                priceMin.css("left", (minVal / rangePrice[0].max) * 100 - 4 + "%")
                priceMax.css("right", 100 - (maxVal / rangePrice[0].max) * 100 + "%")
            }


        })
    })


    const rangeTime = $('#time-field input')
    const progressTime = $('#time-slider .flow-progress')
    const timeMin = $('#time-field .range-min')
    const timeMax = $('#time-field .range-max')
    timeMin.css({
        left: 0,
    })
    timeMax.css({
        right: 0,
    })


    const flowFilterIcon = $('.flow-filter__icon')
    console.log(flowFilterIcon)
    const closeFilter = $('#close-filter')
    const filter = $('.flow-filter')
    $(window).on('load',function () {
        let width = $(window).width()
        if (width < 650) {
            console.log('<650')
            // filter.addClass('flow-filter--res')
            flowFilterIcon.on('click', function () {
                filter.css({
                    visibility: "visible",
                    opacity: 1,
                    width: "100%",
                    right: 0,
                })
            })
            closeFilter.on('click', function () {
                filter.css({
                    visibility: "hidden",
                    opacity: 0,
                    width: 0,
                    right: "-100%",
                })
            })

        } 
        else if (650 < width < 1280) {
            console.log('650 < width < 1280')
            // filter.addClass('flow-filter--res')
            flowFilterIcon.on('click', function () {
                filter.css({
                    visibility: "visible",
                    opacity: 1,
                    width: "80%",
                    right: 0,
                })
            })
            closeFilter.on('click', function () {
                filter.css({
                    visibility: "hidden",
                    opacity: 0,
                    width: 0,
                    right: "-100%",
                })
            })

        }
        
        else {
            console.log(true)
            // filter.removeClass('flow-filter--res')
            filter.removeAttr('style')
        }
    })

    const filterIcons = $('.filter-icon')
    filterIcons.each(function () {
        // console.log($(this).parent())
        $(this).click(function () {
            $(this).parent().children().not('.filter__main, .filter-icon').toggle('slow')
        })
    })

    let isUser = localStorage.getItem('isUser')
    const heart = $('.flow-button #heart')
    // console.log(heart)
    heart.each(function(){
        // console.log($(this))
        $(this).click(function(e){
            e.preventDefault();
            if(isUser){
                // e.preventDefault();
                $(this).children('img').toggle()
            }else {
                alert('Please login to add favorite')
            }
        })
    })
})