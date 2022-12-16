 const { 
     createApp 
 } = Vue;

 createApp({ 
     data(){ 
         return{
             name: null,
             surname: null,
             margin_top: 'mt-4' ,
             custom_style: 'text-danger mb-5' ,
             flex_classes: 'd-flex flex-column justify-content-center align-items-center',
             message: 'Booleaner quando escono dalla valle della disperazione:',
             message_two: 'Scrivi il tuo nome e cognome se sei appena uscito dalla valle della disperazione:',
             link_img: 'https://static.wikia.nocookie.net/disney/images/7/7e/Hercules-br-disneyscreencaps.com-9797.jpg/revision/latest/scale-to-width-down/250?cb=20140613063303'
         }
         
     },
     methods:{
        greetings: function(){   //oppure greetings(){}
            this.name
            this.surname;
            this.name_surname = this.name + '' + this.surname;
           console.log(this.surname) // senza this non funziona
        },
    }
 }).mount('#app')
