let logo = document.querySelector('.logo')
logo.onclick = function () {
    window.location.reload();
}
let page = document.querySelector('.container0');

let pic = [
    "./image/bmw/bmw1.jpg",
    "./image/bmw/bmw2.jpg",
    "./image/bmw/bmw7.jpg",
    "./image/bmw/bmw4.webp",
    "./image/bmw/bmw5.jpg",
    "./image/bmw/bmw6.webp"];
    page.style.backgroundImage = 'url("./image/bmw/g6.jpg")';

let backgroundOption = true;
let backgroundInterval;
let localStoragerandomBackground = localStorage.getItem('randomBackground')

if (localStoragerandomBackground !== null) {
    if (localStoragerandomBackground === 'true') {
        backgroundOption = true
    } else {
        backgroundOption = false
    }
    document.querySelectorAll('.option span').forEach(ele => {
        ele.classList.remove("active-option")
    })
    if (localStoragerandomBackground === 'true') {
            document.querySelector('.yes').classList.add('active-option')
        }
} else {
    document.querySelector('.no').classList.add('active-option')
}
function optionStop() {
    if (backgroundOption === true){

    backgroundInterval = setInterval(() =>{

            let random = Math.floor(Math.random() * pic.length);
            page.style.backgroundImage = 'url("./' + pic[random] +'")';
        
        },10000)
        
    } 
}
// optionStop()
///////////////////////////////////////////////////////////////
let colum = document.querySelector('.left');
let icon = document.querySelector('.fa-gear');
let action = document.querySelector('.go');

icon.onclick = function () {
    colum.classList.toggle('go')
    icon.classList.toggle('fa-spin')
}
///////////////////////////////////////////////////////////////
document.documentElement.style.setProperty('--maincolor',localStorage.getItem('colors'))
let effect = document.querySelectorAll('.setcolor li')

effect.forEach(e => {
    e.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--maincolor', e.target.dataset.color)
        localStorage.setItem('colors', e.target.dataset.color)

    })
})
/////////////////////////////////////////////////////////////////////////////////////
let option = document.querySelectorAll('.option span');
option.forEach(e => {
    e.addEventListener('click', (x) => {
        x.target.parentElement.querySelectorAll('.active-option').forEach(f => {
            f.classList.remove('active-option')
        })
        x.target.classList.add('active-option');
        if (x.target.dataset.background === 'yes') {
            backgroundOption = true
            optionStop()
            localStorage.setItem('randomBackground', true);            
        } else {
            backgroundOption = false
            clearInterval(backgroundInterval)
            localStorage.setItem('randomBackground', false);            
        }
    });
});
///////////////////////////////////////////////////////////


setInterval('stop', {

},3000)
////////////////////////////////////////////////////////
let skills = document.querySelector('.skills')
let spanSkills = document.querySelectorAll('.skill-progress span')
console.log(spanSkills)

window.onscroll = function () {
    let skillsOne = skills.offsetTop;
    let skillsTwo = skills.offsetHeight;

    let windowHeight = this.innerHeight;
    let windowScroolTop = this.pageYOffset;

    if (windowScroolTop > (skillsOne + skillsTwo - windowHeight)) {
        spanSkills.forEach(e => {
            e.style.width = e.dataset.progress
        })
    } 
}
/////////////////////////////////////////////////////////////////////////
let  allOfImage = document.querySelectorAll('.gallery .image2 img')
    allOfImage.forEach(e => {
        e.addEventListener('click', (x)=> {
            let divImage = document.createElement('div');   //ال overLay
            divImage.className = 'divOne'
            document.body.appendChild(divImage);


            let divPoPup = document.createElement("div")
            divPoPup.className = 'popupImage';

            if (e.alt !== null) {
                let spanCloseElement = document.createElement('h3');
                let textImage = document.createTextNode('img.alt')
                spanCloseElement.appendChild(textImage) 
                divPoPup.appendChild(spanCloseElement)
                spanCloseElement.className = 'close-span1'

                let spanImage = document.createElement('span');
                let closeSpan = document.createTextNode('X')
                spanImage.appendChild(closeSpan);
                divPoPup.appendChild(spanImage)
                spanImage.className = 'close-span2'
            }

            let imagePopup = document.createElement('img')
            imagePopup.src = e.src
            divPoPup.appendChild(imagePopup);
            document.body.appendChild(divPoPup)

    })      
}) 

document.addEventListener('click', (e) => {
    if (e.target.className == 'close-span2') {
        e.target.parentNode.remove()
        document.querySelector('.divOne').remove()
    }
})
///////////////////////////////////////////////////
let bullet = document.querySelectorAll('.bullets .bullet')

bullet.forEach(x => {
    x.addEventListener('click', (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});
let links = document.querySelectorAll('.nav .top li')
links.forEach(e => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
        });
    });
});
///////////////////////////////////////////////////
/////////////////////////////////////////////////
let showBullets = document.querySelectorAll('.option-bull span');
let rightBullets = document.querySelector('.bullets')
let localGetBull = localStorage.getItem('local-Bull')
// وضع الshow bullets في ال localStorage
if (localGetBull !== null) {
    // عمل function لربط العناصر 
function catshElement(ele) {
    ele.target.parentElement.querySelectorAll('.active').forEach(x => {
        x.classList.remove('active')
    })
ele.target.classList.add('active')
}
}
showBullets.forEach(e => {
    e.addEventListener('click', (z) => {
        z.target.parentElement.querySelectorAll('.active-option').forEach(w => {
            w.classList.remove('active-option');
            if (e.dataset.show === 'show') {
                rightBullets.style.display = 'block'
                localStorage.setItem('local-Bull', 'block')
            } else {
                rightBullets.style.display = 'none'
                localStorage.setItem('local-Bull', 'none')
            }
        });
        z.target.classList.add('active-option')
    })    
})

localStorage.setItem('local-bull', 'block');
localStorage.setItem('local-bull', 'nine');
/////////////////////////////////////////
// reset all localStorage in left option
document.querySelector('.reset-local').onclick = function () {
    localStorage.removeItem('randomBackground')
    localStorage.removeItem('colors')
    window.location.reload()
}
/////////////////////////////////////////////
// تهيئة الزر لعمل لينكات الnavBar
let navIcon = document.querySelector('.icon')
let navLinks = document.querySelector('.top')

navIcon.addEventListener('click', function (e) {
    e.stopPropagation()
    navLinks.classList.toggle('open')
    this.classList.toggle('toogle-icon')
})
navLinks.addEventListener('click', function (e) {
    e.stopPropagation()
})

document.addEventListener('click',  (e) => {
    if (e.target !== navIcon && navLinks) {
        navLinks.classList.remove('open')
        navIcon.classList.remove('toogle-icon')
    }
})
//////////////////////////////////////////////////////
