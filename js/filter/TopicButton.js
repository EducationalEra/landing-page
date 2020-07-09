
export default {
    name: 'TopicButton',
    props: {
        topicName: String,
        topicId: String,
        active: String
    },
    computed: {
        activeClass() {
            return this.active === this.topicId ? "topicButton active" : "topicButton"
        }
    },
    data() {
        return {
        }
    },
    template: '<div :class="activeClass" @click="onButtonClick"><a>{{topicName}}</a></div>',
    methods: {
        onButtonClick() {
            this.$emit('buttonClicked', this.topicId);
        }
    }
}
