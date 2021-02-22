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
      myFooter:[
          {
            title:'AVADA TECH FORUM',
            description:'Sed semper, nisl id feugiat eleifend, erat est digssim felis, qui auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi intermentum.',
            item:[],
            url:'#1',
          },
          {
            title:'POPULAR TOPICS',
            description:'',
            item:[
                'Nam a dolor volutpat massa auctor semper',
                'Sed euismond nunc urna fermentum arcu dapibus fringilla',
                'Cras lacinia tellus id mauris finibus lacus molestie',
                'Curabitur a scelerisqye ligula',
            ],
            url:'#2',
          },
          {
            title:'RECENT TOPICS',
            description:'',
            item:[
                'Cras lacinia tellus id mauris finibus lacus molestie',
                'Proin at ligula sagittis vestibulum nisi vitae',
                'Sed nec metus at est tincidunt elementum',
                'Nulla egestas nulla eu nulla scipit molestie',

            ],
            url:'#3',
          },
          {
            title:'LATEST REPLIES',
            description:'',
            item:[
                'Cras lacinia tellus id mauris finibus lacus molestie',
                'Cras lacinia tellus id mauris finibus lacus molestie',
                'Nulla egestas nulla eu nulla scipit molestie',
                'Mauris ac nibh quis eros sagittis lacinia a et dui',
            ],
            url:'#3',
          },
      ],
      
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
        },
        backToTop: function () {
            window.scrollTo(0,0);
        }       
    },
  });
  
  Vue.config.devtools = true;