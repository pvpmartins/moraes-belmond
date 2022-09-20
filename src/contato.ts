import '/dest/style.css'

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

const googleMap = document.querySelector("#map iframe") as HTMLIFrameElement
const mapLocations = document.querySelectorAll<HTMLElement>(".map-panel div")

mapLocations.forEach((location)=>{
    location.addEventListener("click", (()=>{
        if(location.title === "Duque de Caxias") {
            googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.6212688222231!2d-43.30873364952049!3d-22.784483165522172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997a91b4c07395%3A0x55925796c18ec3e7!2sWillians%20Belmond%20de%20Moraes!5e0!3m2!1sen!2sbr!4v1661700972804!5m2!1sen!2sbr"
        }
        if(location.title === "Rio de Janeiro") {
            googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.379763253356!2d-43.18107108545684!3d-22.89935948501567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f597ad265fb%3A0xcc830319288a48a2!2sR.%20da%20Quitanda%2C%20185%20-%20502%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020091-005!5e0!3m2!1sen!2sbr!4v1661901590763!5m2!1sen!2sbr"
    }}))
})