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
        buttons() {
                let string = 'display: grid; grid-column-gap: 2rem; grid-template-columns: ';
                for(let elem in this.topics) {
                    string += "1fr "
                }
                string += ';';
                return string;
        },
        container() {
            return 'margin-top: 85px;'
        },
        currentProps() {
            console.log(this.id);
            return this.getCourses(this.id);
        }
    },
    methods: {
      getCourses(obj) {
          let id;
          if(typeof  obj === "string") id = obj;
          else id = obj.topicId;
          this.id = id;
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
            this.getCourses({topicId: "all"});
            console.log(this.topics);
            console.log(this.courses);
        });
    },

    template: '<div id="courses" class="section four" >' +
        '<div class="container" :style="container"><div class="row cards-row" :style="buttons"><TopicButton' +
        ' @buttonClicked="changeId($event)"' +
        ' v-for="button in' +
        ' topics"' +
        ' :active-button="this.id"' +
        ' v-key="button.topicId" :topicId="button.topicId" :topicName="button.topicName"/></div></div><CoursesCards' +
        ' :courses="currentProps"/>' +
        '</div>'
}
