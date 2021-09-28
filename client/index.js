gsap.from(".btn", {
    // rotation: 360,
    x: -500,
    duration: 1,
    opacity: 0
});

Draggable.create(".btn", {type:"x,y", edgeResistance:0.65, bounds:".container"});

let displayText = document.querySelector('.response')

let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    axios.get('/api/compliments')
        .then(res => {
            console.log(res.data)
            
            displayText.innerHTML = `
                <p>${res.data}</p>
            `


        })
})