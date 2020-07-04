export default {
    name: 'CoursesCards',
    props: {
        courses: Array
    },
    computed: {

    },
    template: '<div class="container"><div class="row cards-row" ' +
        ' ><div' +
        ' class="col-sm-6 col-md-4 col-lg-3" v-for="course in courses">' +
        '<div class="course_card">' +
        '<div class="figure"><img :src="course.imgUrl" :alt="course.altText"/><a' +
        ' :href="course.href" target="_blank"' +
        ' class="button goto_course">{{course.hrefText}}</a>' +
        '</div>' +
        '<h3 class="course_title">{{course.courseTitle}}</h3>' +
        '<p>{{course.courseDesc}}</p>' +
        '<p class="access granted">Відкрито доступ</p>' +
        '</div>' +
        '</div></div>'
}
