 const { 
     createApp 
 } = Vue;

 createApp({ 
     data(){ 
         return{
             message: 'Ciao Vujs',
             link_img: 'https://unsplash.it/300/300?image=29'
         }
     }
 }).mount('#app')
