const textEl = document.getElementById("content")
const button = document.getElementById("enterBtn")



textEl.innerText = `There should be content here, 
but it appears to have been sucked into a black hole!
`

button.addEventListener('click', () => {
        setTimeout(()=>{
            textEl.classList.add("animate__animated", "animate__lightSpeedOutRight", "animate__slower")
            button.href = "#"
        }, 2000)
})

