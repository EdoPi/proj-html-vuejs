var app = new Vue({
    el: '#root',
    data: {        

      myMenu:[
          {
              name:'Home',
              button: false,
              url:'#1'
          },
          {
              name:'Apple',
              button: false,
              url:'#2'
          },
          {
              name:'Microsoft',
              button: false,
              url:'#3'
          },
          {
              name:'Android',
              button: false,
              url:'#4'
          },
          {
              name:'Forums',
              button: false,
              url:'#5'
          },
          {
              name:'Contact Us',
              button: false,
              url:'#6'
          },
          {
              name:'Join Us',
              button: true,
              url:'#7'
          },
      ],

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

      rooms:[
          {
              title:'News & Community',
              url:'###',
              prefix: 'far',
              class:'fa-file-alt'
          },
          {
              title:'Apple Forum',
              url:'###',
              prefix: 'fab',
              class:'fa-apple'
          },
          {
              title:'Microsoft Forum',
              url:'###',
              prefix: 'fab',
              class:'fa-windows'
          },
          {
              title:'Android Forum',
              url:'###',
              prefix: 'fab',
              class:'fa-android'
          },
          {
              title:'General Discussion',
              url:'###',
              prefix: 'fas',
              class:'fa-coffee'
          },
          {
              title:'Apps & Software',
              url:'###',
              prefix: 'fas',
              class:'fa-cubes'
          },
          {
              title:'Gadget & Stuff',
              url:'###',
              prefix: 'fas',
              class:'fa-laptop'
          },
          {
              title:'Tutorials & Guides',
              url:'###',
              prefix: 'fas',
              class:'fa-wrench'
          }
      ],

      subscribe:'',
      
    },
    methods:{

        backToTop: function () {
            window.scrollTo(0,0);
        },

        isButton: function (element){
            if (element.button) {
                return 'btn-black';
            }else{
                return 'arrow-down';
            }
        }       
    },
  });
  
  Vue.config.devtools = true;