$(document).ready(function(){
    
    const changeBgImage = $('#upload-cover')
    const userBgImage = $('#account-banner')
    const changeAvt = $('#upload-avt')
    const userAvt = $('#imgAvt')
    changeImage(changeBgImage, userBgImage)
    changeImage(changeAvt, userAvt)
})
const changeImage = (inputFile, img) => {
    inputFile.on('change', function (e) {
        // console.log(e.target.files[0])
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        // console.log(reader)
        reader.onload = () => {
            img.attr("src", reader.result)
        }
    })
}