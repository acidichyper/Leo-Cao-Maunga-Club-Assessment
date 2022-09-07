const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activemenu(){
        let len=sec.length;
        while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
    }
    activemenu();
    window.addEventListener("scroll", activemenu)


const checkpoint = 300;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset - 700;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".front2").style.opacity = opacity;
});

/* scrolling appearing */
