import '/dest/style.css'
import axios from 'axios';

const funcionarios = document.querySelectorAll<HTMLElement>(".membro")
const modalDesc = document.querySelector(".socios-card__member-spec") as HTMLDivElement

const overlay = document.querySelector(".overlay") as HTMLDivElement
const toggleBtn = document.querySelector(".toggle-button")
const navLinks = document.querySelector(".navbar-links")
const youtubeContainer = document.querySelector(".youtube-section") as HTMLElement
const body = document.querySelector("body") as HTMLElement





toggleBtn?.addEventListener("click", ()=>{
    navLinks?.classList.toggle('active')
    toggleBtn?.classList.toggle('open')
    // if(!navLinks?.classList.contains("active")) {
    //     navLinks?.classList.add("inactive")
    // } else {
    //     navLinks?.classList.remove("inactive")
    // }
})

funcionarios.forEach(funcionario=>{
    funcionario.addEventListener("click", (()=>{
        // console.log(funcionario.title);
        displayCard("Willians Belmond")
        displayCard("Claudine Moraes")
        displayCard("Gabriel Moraes")
        displayCard("Philipi Moraes")
        displayCard("Leandro")
        displayCard("Ítalo")
    }))

    const displayCard = (member :String) => {
        if(funcionario.title === member) {
            const memberSpec = document.querySelector(`.socios-card__member-spec[title="${member}"]`) as HTMLElement
            memberSpec.style.display = "flex"
            memberSpec.classList.add("modal-load")
            overlay.style.display = "flex"
            console.log(memberSpec);
            const btnExit = document.querySelector(`.socios-card__member-spec[title="${member}"] .btn-exit`) as HTMLElement
            btnExit.addEventListener("click", (()=>{
                memberSpec.style.display = "none"
                memberSpec.classList.remove("modal-load")
                overlay.style.display = "none"
                console.log("exit");
            }))
        }
    }
})


const openPhotos = document.querySelector(".open-photos") as HTMLElement
const filmIcon = document.querySelector(".open-photos i") as HTMLElement
const photoSequence = document.querySelector(".photos") as HTMLElement
const rightArrow = document.querySelector(".fa-arrow-right") as HTMLElement
const leftArrow = document.querySelector(".fa-arrow-left") as HTMLElement

openPhotos.addEventListener("click", (()=>{
    rightArrow.style.display = "inline-block"
    leftArrow.style.display = "inline-block"
    photoSequence.style.padding= "1rem"
    photoSequence.style.height= "230px"
    filmIcon.style.display = "none"
}))


rightArrow.addEventListener("click", (()=>{
    photoSequence.scrollBy({left: 270, behavior: "smooth"})
}))

leftArrow.addEventListener("click", (()=>{
    photoSequence.scrollBy({left: -270, behavior: "smooth"})
}))

const photos = document.querySelectorAll<HTMLDivElement>(".photo")
const galeriaPhotos = document.querySelector(".galeria-photos") as HTMLElement

photos.forEach(photo=>{
    photo.addEventListener("click",()=>{
        const image = photo.firstChild as HTMLImageElement
        renderPhoto(image);
    })
})

const renderPhoto = (el:HTMLImageElement) =>{
    const photoBox = document.createElement("img")
    photoBox.className = "photo-zoomed"
    photoBox.src = el.src
    // photoBox.style.backgroundImage = `url(${el.src})`
    overlay.style.display = "flex"
    document.body.style.overflow = "hidden"
    if(!body.querySelector(".photo-zoomed")) {
        body.append(photoBox)
    }
    overlay.addEventListener("click", (()=>{
        body.removeChild(photoBox)
        overlay.style.display = "none"
        document.body.style.overflow = "visible"
    }))
    // console.log(photoBox);
}

// const fetchYtVideos = async() => {
//     const {data} = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCST_CeDwaI6Fkt8D0LixH0Q&maxResults=5&order=date&key=AIzaSyDChKIhfYoGeglXOapzFAdPZy6I39Gr2Q4`,)
//     return data.items
// }


// const renderListYtVideos = async() => {
//     const items = await fetchYtVideos()
//     console.log(items);
//     items.forEach((item:any)=>{
//         if(!!item.id.videoId){
//             const videoEl = document.createElement("div")
//             videoEl.className = "youtube-video"
//             videoEl.style.backgroundImage = `url(${item.snippet.thumbnails.high.url})`
//             const videoTitle = document.createElement("h3")
//             videoTitle.className = "youtube-video__title"
//             videoTitle.innerHTML = item.snippet.title
//             videoEl.append(videoTitle)
//             youtubeContainer.append(videoEl)
//             videoEl.addEventListener("click", (()=>{
//                 renderYoutubePlayer(item.id.videoId, item.snippet.title)
//             }))
//         }
//     })
// }

// const renderYoutubePlayer = (endpoint:string, title:string) => {
//     const modal = document.querySelector(".youtube-modal-player") as HTMLElement
//     modal.style.display = "flex"
//     overlay.style.display = "flex"
//     modal.innerHTML += `<iframe class="video-player" width="560" height="315" src="https://www.youtube.com/embed/${endpoint}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     overlay.addEventListener("click", (()=>{
//         const player = document.querySelector(".video-player") as HTMLElement
//         modal.removeChild(player)
//         modal.style.display = "none"
//         console.log("clicked");
//         overlay.style.display = "none"
//     }))
// }

// const btnOpenYTSection = document.querySelector(".btn-open__youtube-section") as HTMLElement

// btnOpenYTSection.addEventListener("click", (async()=>{
//     const videoEl = document.querySelector(".youtube-video") as HTMLElement
//     btnOpenYTSection.classList.toggle("slide")
//     if (!document.querySelector(".youtube-video")){
//         btnOpenYTSection.style.color = "red"
//         youtubeContainer.style.height = "200px"
//         await renderListYtVideos()
//     }else{
//         youtubeContainer.innerHTML = ""
//         youtubeContainer.style.height = "0"
//     }
// }))
