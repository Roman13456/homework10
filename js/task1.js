// Пишемо свій слайдер зображень

// відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next. Аналогічно з першим зображенням та кнопкою
let imgArray = document.querySelectorAll(".slider img")
console.log(imgArray)
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
let imgArrayLength = imgArray.length
const imgContainer = document.querySelector(".imgContainer")
let counter = 0
console.log(nextBtn)
function btnLimits(){
    if(counter==imgArrayLength-1){
        nextBtn.setAttribute("disabled","")
    }else{
        nextBtn.removeAttribute("disabled")
    }
    if(counter==0){
        prevBtn.setAttribute("disabled","")
    }else{
        prevBtn.removeAttribute("disabled")
    }
}
function addTransform(){
    imgContainerStyle+= `transform:translate(${shift}px);`
    imgContainer.style=imgContainerStyle
}
// nextBtn.addEventListener("click", function(){
    // imgArray[counter].classList.remove("visible")
    // counter+=1
    // imgArray[counter].classList.add("visible")
    // btnLimits()
// })
// prevBtn.addEventListener("click", function(){
//     imgArray[counter].classList.remove("visible")
//     counter-=1
//     imgArray[counter].classList.add("visible")
//     btnLimits()
// })
const calcImgContainerWidth = 300*imgArrayLength
let shift = 0
let imgContainerStyle = `width:${calcImgContainerWidth}px;`
imgContainer.style = imgContainerStyle
nextBtn.addEventListener("click",function(){
    shift-=300;
    console.log(shift)
    addTransform()
    counter+=1
    btnLimits()
})
prevBtn.addEventListener("click",function(){
    shift+=300;
    console.log(shift)
    addTransform()
    counter-=1
    btnLimits()
})
