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

const featuresTitle = document.querySelector(".feature > p") as HTMLElement

const cards = document.querySelectorAll<HTMLElement>(".feature__item")

let cardsRight = []
let cardsLeft = []

cardsRight.push(cards[0], cards[2]) 
cardsLeft.push(cards[1], cards[3])


// Player Control
const player = document.getElementById("player") as HTMLAudioElement
const playerControl = document.querySelector(".player-control") as HTMLElement
const playPauseBtn = document.querySelector(".player-control__play") as HTMLElement
const muteBtn = document.querySelector(".mute-btn")
const volumeSlider = document.querySelector(".volume-slider") as HTMLInputElement

player?.play()

playPauseBtn.addEventListener('click', ()=>{
    if(playPauseBtn.classList.contains("fa-play")) {
        player?.play()
        playPauseBtn.classList.remove("fa-play")
        playPauseBtn.classList.add("fa-pause")
    }else if(playPauseBtn.classList.contains("fa-pause")) {
        player?.pause()
        playPauseBtn.classList.remove("fa-pause")
        playPauseBtn.classList.add("fa-play")
    }
})


muteBtn?.addEventListener("click", toggleMute)

function toggleMute() {
    player.muted = !player.muted
    if(player.muted) {
        playerControl.dataset.volumeLevel = "muted"
    }else {
        playerControl.dataset.volumeLevel = "high"
    }
}

// volumeSlider?.addEventListener("input", e => {
//     const target = e.target as HTMLInputElement
//     const value = +target.value / 100
//     player.volume = value
//     player.muted = +target.value === 0
// })

// player.addEventListener("volumechange", ()=>{
//     volumeSlider.value = player.volume.toString()
//     let volumeLevel 
//     if (player.muted || player.volume === 0){
//         volumeSlider.value = '0'
//         volumeLevel = "muted"
//     } else if(player.volume >= .5) {
//         volumeLevel = "high"
//     } else {
//         volumeLevel = "low"
//     }
//     playerControl.dataset.volumeLevel = volumeLevel
// })

// Cards fade-in
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