console.log('Vue OK', Vue);

const { createApp } = Vue;

const myApp = createApp({
    name: 'Carousel',
})
myApp.mount('#root')