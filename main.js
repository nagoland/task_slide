const wrapper = document.getElementById("wrapper");
const slideItems =document.getElementsByClassName("slide-item");

const maxSlideNum = slideItems.length - 1
let activeNum = 0
const intervalTime = 3000
const fadeOutTime = 1000


setTimeout(function(){
    slideItems[0].classList.add('active','zoom')
},0)


setInterval(function(){
    const currentNum = activeNum
    slideItems[activeNum].classList.remove('active')
    activeNum = activeNum == maxSlideNum?0:activeNum+1
    slideItems[activeNum].classList.add('active', 'zoom')

            setTimeout(function(){
                slideItems[currentNum].classList.remove('zoom')
            },fadeOutTime)

}, intervalTime)
