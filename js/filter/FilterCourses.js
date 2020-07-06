import TopicButton from "./TopicButton.js";
import CoursesCards from "./CoursesCards.js";
export default {
    name:'FilterCourses',
    data() {
      return {
          topics: {},
          data: {},
          courses: {},
          id: 'all'
      }
    },
    computed: {
        container() {
            return 'margin-top: 85px;'
        },
        currentProps() {
            console.log(this.id);
            return this.getCourses(this.id);
        }
    },
    methods: {
      getCourses(newId = "all") {
          this.id = newId;
          let id = this.id;
          let array = [];
          for(let key in this.courses) {
              if (this.courses.hasOwnProperty(key)) {
                  if(this.courses[key].topic.includes(id)) {
                      array.push(this.courses[key]);
                  }
              }
          }
          return array;
      },
      changeId(event) {
          this.id = event;
          console.log(this.id);
      }
    },
    components: {
      TopicButton,
      CoursesCards
    },
    created() {
        axios.get('../data.json')
        .then(data => {
            this.data = data.data;
            this.topics = this.data.topics;
            this.courses = this.data.courses;
            this.getCourses();
            console.log(this.topics);
            console.log(this.courses);
        });
    },

    template: '<div id="courses" class="section four" >' +
        '<div class="container" :style="container"><div class="row cards-row"><TopicButton' +
        ' @buttonClicked="changeId($event)"' +
        ' v-for="button in' +
        ' topics"' +
        ' :active="id"' +
        ' v-key="button.topicId" :topicId="button.topicId" :topicName="button.topicName"/></div></div><CoursesCards' +
        ' :courses="currentProps" :active="id"/>' +
        '</div>'
}
