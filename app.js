const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            x: 0,
            y: 0

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvents(e, data) {
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y =e.offsetY
        }
        
    }
})

app.mount('#app')