new Vue({
    el: '#en-family-rights-quiz',
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
                    title: 'If you want to register a marriage, is the other party obliged to provide information about his/her health status?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Yes',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'No',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Information on the health status is provided voluntarily',
                            hint: 'True',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Are adult children entitled to alimony?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Yes',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'No',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Only disabled adult children are entitled to alimony from parents',
                            hint: 'True',
                            correct: true
                        }
                    ]
                },
                {
                    type: 1,
                    title: 'Who can conclude a marriage contract?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Individuals who have applied for marriage registration',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'Married couple',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'Persons who live together and have common children.',
                            hint: 'False',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Which of the following is NOT the forms of domestic violence?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'physical',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'sexual',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'psychological',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'social',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'economic',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'What kind of state benefit a person who has been subjected to domestic violence CANNOT receive?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'free legal aid',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'monthly payments amounting to 170 UAH',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'psychological assistance',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'social services',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'temporary shelter in the centre for social and psychological support, crisis  ',
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