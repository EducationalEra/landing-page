new Vue({
    el: '#en-protection-quiz',
    data() {
        return {
            intro: {
                title: '',
                description: "",
                button: 'Start',
                background: false,
            },
            quiz: [{
                    type: 0,
                    title: 'Under the Law of Ukraine <a target="_blank" href="http://zakon2.rada.gov.ua/laws/show/393/96-%D0%B2%D1%80">«On Appeal of Citizens»</a>, is the applicant charged the fee for reviewing appeals?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'charged in any case',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'charged in exceptional cases',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'not charged in any case',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'charged for reviewing the appeals from the heads of legal entities.',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Appeal executed without complying with the requirements of the Law of Ukraine «On Appeal of Citizens»:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'returned with an appropriate explanation',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'remains without change',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'may be considered upon request of an authorized person',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'sent to a higher authority, which decides whether the appeal can be reviewed',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: ' Under the Law of Ukraine «On Appeal of Citizens», such appeals are not subject to review and resolution:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'anonymous',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'collective',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'individual',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'oral',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
            ],
            resultText: [{
                    description: 'Please, watch the video again and take the test. You can do it! If you like the project, share it with your friends :)',
                },
                {
                    description: 'You can do better! Please, watch the video to improve your result. If you like the project, share it with your friends :)',
                },
                {
                    description: 'Not bad! To improve your result please, watch the video again and retake the test. If you like the project, share it with your friends :)',
                },
                {
                    description: 'Good result! If you like the project, share it with your friends :) ',
                }, {
                    description: 'Great job, keep it up! More interesting information still remains ahead. If you like the project, share it with your friends :)',
                }
            ],
            started: false,
            chosen: 0,
            answers: [],
            submit: false,
            progress: true,
            check: false,
            score: 0,
            index: 0
        }
    },
    computed: {
        counter() {
            if (this.quiz[this.index].type == 0) {
                if (this.quiz[this.index].answers[this.answers[this.index]].correct == true) {
                    this.score++;
                    return true;
                } else {
                    return false;
                }
            } else {
                for (let i = 0; i < this.quiz[this.index].answers.length; i++) {
                    if (this.quiz[this.index].answers[i].correct != this.answers[this.index][i]) {
                        return false;
                    }
                }
                this.score++;
                return true;
            }
        }
    },
    methods: {
        startTest() {
            this.started = true;
            this.answers = Array(this.quiz.length)
            for (let i = 0; i < this.quiz.length; i++) {
                if (this.quiz[i].type == 1) {
                    this.answers[i] = Array(this.quiz[i].answers.length).fill(false);
                }
            }
        },
        restart() {
            this.started = false;
            this.chosen = 0;
            this.answers = [];
            this.submit = false;
            this.progress = true;
            this.check = false;
            this.score = 0;
            this.index = 0;
            this.startTest();
        },
        choose(key) {
            if (this.submit != 0) {
                return false;
            }
            if (this.quiz[this.index].type === 0) {
                Vue.set(this.answers, this.index, key)
                this.chosen = 1;
            } else {
                if (this.answers[this.index][key] === false) {
                    Vue.set(this.answers[this.index], key, true);
                    this.chosen += 1;
                } else {
                    Vue.set(this.answers[this.index], key, false);
                    this.chosen -= 1;
                }
            }
        },
        submitAnswer() {
            this.submit = true;
            this.chosen = 0;
            this.check = this.counter
        },
        goNext() {
            this.index++;
            this.submit = false;
            if (this.index === this.quiz.length) {
                this.showResult()
            }
        },
        showResult(answers) {
            this.progress = false
        },
    },
    mounted() {
        this.startTest();
    }
})