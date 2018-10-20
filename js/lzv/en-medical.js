new Vue({
    el: '#en-medical-quiz',
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
                    title: 'How long does the HIV test last today (rapid tests)?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Up to 1 minute',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: '5 minutes',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: '15 minutes',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: '1 hour',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'A doctor should offer HIV testing after:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'tooth extraction',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'transfusion of blood and its components',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'a surgery',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'every sexual intercourse',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'The best ways of preventing HIV-infection are:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'taking antiretroviral therapy and using condoms',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'using lubricants during intercourse',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'rejected sexual intercourse',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'processing syringes and needles if used jointly',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Where is it possible to get tested for HIV?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'only with a family doctor',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'only in AIDS Centers',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'both with family doctor and in AIDS Centers',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: "all Health and Social Protection institutions",
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'If you are taking antiretroviral therapy, the use condoms is:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'unnecessary ',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'necessary',
                            hint: 'True',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'When registering for a conference on HIV/AIDS, the organizers ask the participant to indicate his/her HIV status. Is the collection of such information legitimate?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'It is legitimate, given the conference topic',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'No. Such personal information shall not be collected under such conditions',
                            hint: 'True',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'The Head of HR department received information about the possible HIV-positive status of the employee. Now he requires the HIV certificate from the employee, or otherwise threatens with dismissal. Are the actions of HR specialist legitimate? ',
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
                            hint: 'True',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'A man applied to a health facility to get information on his wife"s health status. The information indicates a woman"s HIV-positive status. Can the health facility administration provide a man with such information? ',
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
                            body: 'No, according to the Law of Ukraine «On personal data protection»',
                            hint: 'True',
                            correct: true
                        }
                    ]
                }
            ],
            resultText: [{
                    description: 'Please, watch the video again and take the test. You can do it! If you like the project, share it with your friends :)',
                },
                {
                    description: 'Please, watch the video again and take the test. You can do it! If you like the project, share it with your friends :)',
                },
                {
                    description: 'You can do better! Please, watch the video to improve your result. If you like the project, share it with your friends :)',
                },
                {
                    description: 'You can do better! Please, watch the video to improve your result. If you like the project, share it with your friends :)',
                },
                {
                    description: 'You can do better! Please, watch the video to improve your result. If you like the project, share it with your friends :)',
                },
                {
                    description: 'Not bad! To improve your result please, watch the video again and retake the test. If you like the project, share it with your friends :)',
                },
                {
                    description: 'Good result! If you like the project, share it with your friends :) ',
                },
                {
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