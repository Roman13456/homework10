// Пишемо свій слайдер зображень

// відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next. Аналогічно з першим зображенням та кнопкою
let imgArray = document.querySelectorAll(".slider img");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let imgArrayLength = imgArray.length;
const imgContainer = document.querySelector(".imgContainer");
const slider = document.querySelector(".slider");
let counter = 0;
let shift = 0;
window.onload = function () {
  function sliderWidth() {
    let ImgWidth = imgArray[counter].width;
    slider.style = `width:${ImgWidth}px`;
  }
  sliderWidth();
  function btnLimits() {
    if (counter == imgArrayLength - 1) {
      nextBtn.setAttribute("disabled", "");
    } else {
      nextBtn.removeAttribute("disabled");
    }
    if (counter == 0) {
      prevBtn.setAttribute("disabled", "");
    } else {
      prevBtn.removeAttribute("disabled");
    }
  }
  function addTransform() {
    let imgContainerStyle = "";
    imgContainerStyle += `transform:translate(${shift}px);`;
    imgContainer.style = imgContainerStyle;
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
  // let ImgContainerWidth = 0
  // function calcImgContainerWidth(){
  //     imgArray.forEach(function(element){
  //         ImgContainerWidth+= element.width
  //     })
  //     console.log(ImgContainerWidth)
  //     let imgContainerStyle = `width:${ImgContainerWidth}px;`
  //     imgContainer.style = imgContainerStyle
  // }
  // calcImgContainerWidth()
  // const calcImgContainerWidth = 300*imgArrayLength

  nextBtn.addEventListener("click", function () {
    shift -= imgArray[counter].width;
    console.log(shift);
    addTransform();
    counter += 1;
    btnLimits();
    sliderWidth();
  });
  prevBtn.addEventListener("click", function () {
    shift += imgArray[counter - 1].width;
    console.log(shift);
    addTransform();
    counter -= 1;
    btnLimits();
    sliderWidth();
  });
};
