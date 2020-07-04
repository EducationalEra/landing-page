
export default {
    name: 'TopicButton',
    props: {
        topicName: String,
        topicId: String,
        activeButton: String
    },
    computed: {
        activeClass() {
            return this.active ? "topicButton active" : "topicButton"
        }
    },
    data() {
        return {
        }
    },
    template: '<div :class="activeClass"><a @click="onButtonClick">{{topicName}}</a></div>',
    methods: {
        onButtonClick() {
            this.activateButton();
            this.$emit('buttonClicked', this);
        },
        activateButton() {
            this.active = !this.active;
        }
    },
    mounted() {
        if(this.activeButton === this.topicId) {
            this.activateButton();
        }
    }
}
