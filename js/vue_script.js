const { createApp } = Vue;

const myApp = createApp({
    name: 'Carousel',
    // Dati
    data: () => ({
        destinations: destinations,
        currentIndex: 0,
    }),
    // # Funzioni (quanto mi piacerebbe sapere se sono al primo o all'ultimo indice?)
    computed: {
        isFirstIndex() {
            return this.currentIndex === 0;
        },
        isLastIndex() {
            return this.currentIndex === this.destinations.length - 1;
        },
    },
    methods: {
        setCurrentIndex(variable) {
            if (variable === 'next') {
                if (this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            } else if (variable === 'prev') {
                if (this.isFirstIndex) this.currentIndex = this.destinations.length - 1;
                else this.currentIndex--;
            } else {
                this.currentIndex = variable;
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.setCurrentIndex('next')
        }, 3000);
    }
})
myApp.mount('#root')