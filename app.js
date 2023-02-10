
const fallDown =  () => {
    let star = document.querySelector('.star')
    star.classList.toggle('falling')
}


function changeImage() {
    if (document.getElementsByClassName("pic1").src == ""){
        document.getElementsByClassName("pic2").src = "";
    } else {
        document.getElementsByClassName("pic3").src = "";
        document.getElementsByClassName("pic4").src = "";
    }
}


const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
});


//cursor effects when mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});