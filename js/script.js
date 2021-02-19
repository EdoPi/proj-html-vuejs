var app = new Vue({
    el: '#root',
    data: {
      myMenu:[
          'Home',
          'Apple',
          'Microsoft',
          'Android',
          'Forums',
          'Contact us',
          'Join Us',
      ],
      active: false,
      
    },
    methods:{
        isLast: function (index, array) {
            if (index + 1 === array.length ) {                
                return 'btn-black' 
            }  
        },
        isToUpper: function (index, element, array ){
            if (index + 1 === array.length) {
                return element.toUpperCase();
            }
            return element;
        }        
    }
  });
  
  Vue.config.devtools = true;