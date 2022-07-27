// Declarations
var skills;
// Initializations
const cards = document.querySelectorAll(".card");
skills = document.getElementById("skillsSpan");

// For Hiding and Shwoing Divs on scroll
// const observer = new IntersectionObserver( entries => {
//   entries.forEach( entry => {
//     entry.target.classList.toggle("show", entry.isIntersecting)
//   })
// }
// ,
// {
//   threshold: 0.2,
//   rootMargin: '1px'
// }
// )

// cards.forEach(card => {
//   observer.observe(card);
// })

// Responsive Navbar
var clicks = 0;

function myrespNav(){
  // console.log(clicks++);
  clicks++;
  if(clicks%2!=0)
  {
    document.getElementById("navList").style.display = "block";
  }
  else if(clicks%2==0)
  {
    document.getElementById("navList").style.display = "none";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Modal Code 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("chooseVersion");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function changeVersion(ele){
  try{
    if( ele.id == "jsButton")
    {
      window.location.replace("http://www.1universe.co.in/index.html");
    }
    else if( ele.id == "jqueryButton")
    {
      window.location.replace("http://www.1universe.co.in/indexJq.html");
    }
    else if( ele.id == "reactjsButton")
    {
      window.location.replace("http://www.1universe.co.in/indexRJs.html");
    }
    else
    {
      console.log("Error: Version Error");
    }
  }
  catch(error)
  {
    console.log(error);
  }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && screen.availHeight > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}