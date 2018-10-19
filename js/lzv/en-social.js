new Vue({
    el: '#en-social-quiz',
    data() {
        return {
            intro: {
                title: '',
                description: "",
                button: 'Start',
                background: false,
            },
            quiz: [{
                    type: 1,
                    title: ' What are the essential conditions for receiving unemployment benefit?',
                    description: 'Please choose several correct answers',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Official employment in the past',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'Appeal to the Employment Center exclusively at the place of registration',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Employment for at least 6 months during the last year',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Any employment during the last year',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'Higher education',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: ' How to determine if your family is poor and entitled to state benefits?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'it is necessary to calculate an aggregate income per family member and compare it with the subsistence level',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'it is necessary to calculate the average wage of each family member per year and compare it with the country"s average wage',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 1,
                    title: 'Social benefits for families in difficult living conditions include:',
                    description: 'Please choose several correct answers',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'purchase of clothes and jewelry',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'purchase and delivery of medicines',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'employment assistance',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'psychological services',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'emergency removal of a child if there is a threat to his/her life and health',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: ' monthly financial assistance',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },

                {
                    type: 1,
                    title: 'Children living with HIV have the following special rights:',
                    description: 'Please choose several correct answers',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'free use of public transport',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'admission to higher education hors concours',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'monthly financial assistance until he/she reaches the age of 16',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'yearly medical care at specialized children"s institutions (for children of I and II dispensary groups)',
                            hint: 'True',
                            correct: true
                        }
                    ]
                },
                {
                    type: 1,
                    title: 'Please determine which of the statements are true:',
                    description: 'Please choose several correct answers',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'To receive a monthly benefit (UAH 170), HIV-positive children should apply to the Ministry of Social Policy of Ukraine',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Benefits of caring for children with disabilities are registered in the Department of Labor and Social Protection at the place of residence',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'To receive a monthly benefit (UAH 170), HIV-positive children should apply to the Regional AIDS Center',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'Benefits of caring for children with disabilities are registered in the Department of Health at the place of residence',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                }
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