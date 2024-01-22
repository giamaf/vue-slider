const { createApp } = Vue;

const myApp = createApp({
    name: 'Carousel',
    data: () => ({
        destinations: destinations,
        currentIndex: 0,
    })
})
myApp.mount('#root')