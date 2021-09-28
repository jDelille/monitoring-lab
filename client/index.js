gsap.from(".btn", {
    // rotation: 360,
    x: -500,
    duration: 1,
    opacity: 0
});



let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    axios.get('/api/compliments')
        .then(res => {
            console.log(res.data)
        })
})