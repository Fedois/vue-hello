const {createApp} = Vue;

createApp({

    data(){
        return{
            mex: 'hello world!',
            color: 'red',
            img: 'https://picsum.photos/200'
        }
    }

}).mount('#app')