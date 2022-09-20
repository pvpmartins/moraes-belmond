import '../dest/style.css'

const toggleBtn = document.querySelector(".toggle-button")
const navLinks = document.querySelector(".navbar-links")

toggleBtn?.addEventListener("click", ()=>{
    navLinks?.classList.toggle('active')
    toggleBtn?.classList.toggle('open')
    // if(!navLinks?.classList.contains("active")) {
    //     navLinks?.classList.add("inactive")
    // } else {
    //     navLinks?.classList.remove("inactive")
    // }
})

const featuresTitle = document.querySelector(".feature > h2") as HTMLElement

const cards = document.querySelectorAll<HTMLElement>(".feature__item")

let cardsRight = []
let cardsLeft = []

cardsRight.push(cards[0], cards[2]) 
cardsLeft.push(cards[1], cards[3])



const observer = new IntersectionObserver(entries => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("fade-in-left")
        } 
    })
})


const observer2 = new IntersectionObserver(entries => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("fade-in-right")
        } 
    })
})

const textFadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("text-fade-in")
        }
    })
})

const uprightLoadObserver = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("upright-load")
        }
    })
})

cardsRight.forEach((card)=>{
    observer.observe(card)
})

cardsLeft.forEach((card)=>{
    observer2.observe(card)
})

textFadeInObserver.observe(featuresTitle)

const heroTextItems = document.querySelectorAll<HTMLElement>(".hero__text__item")
const heroText = document.querySelector(".hero__text") as HTMLElement

uprightLoadObserver.observe(heroText)
heroTextItems.forEach(item=>{
    textFadeInObserver.observe(item)
})


// let btns = document.querySelectorAll<HTMLElement>('.mouse-cursor-gradient-tracking') 
// btns?.forEach(btn=>{
    //         btn.addEventListener('mousemove', e => {
        //             let rect = e.target as HTMLElement
        //             const rect2 = rect.getBoundingClientRect();
        //             let x = e.clientX - rect2.left;
        //             let y = e.clientY - rect2.top;
        //             btn?.style.setProperty('--x', x + 'px');
        //             btn?.style.setProperty('--y', y + 'px');
        //         })
//     }
// );