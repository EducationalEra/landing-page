new Vue({
    el: '#en-discrimination-quiz',
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
                    title: 'Creating less favourable conditions due to age, gender, race, and other characteristics is:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Oppression',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Direct discrimination',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Indirect discrimination',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'It is just the way things are',
                            hint: 'False',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Which one of the following situations is NOT discriminatory?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'You came for an interview and are being asked about your work experience and education. You are then asked whether you are going to get married, whether have children, or whether you plan to have them. ',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'A boy and girl from Sudan are studying in the same group at the university. The girl really likes the boy, so she proposes to date. The boy refuses.',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'They ask to transfer the supermarket security officer to work at the warehouse because they have learned about his HIV positive status.',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'A colleague in the office is constantly saying that women are weaker and less intelligent than men. And that"s why they earn less.',
                            hint: 'False',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'In order to get into the bank office, one must take 8 steps that are not equipped with a ramp. Thus, people with disabilities and other people with impaired mobility cannot use banking services in this department. This is an example of:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'direct discrimination ',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'indirect discrimination ',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'refusal in reasonable accommodation ',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'aiding in discrimination',
                            hint: 'False',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Indirect discrimination may be justified, if it... ',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'has a legitimate purpose. The ways for achieving this goal are independent and necessary',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'is supported by the majority of the population of the country/region ',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'indirect discrimination can never be justified',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'The authority to monitor the compliance with the principle of non-discrimination in all spheres of social relations is prescribed by law to... ',
                    description: 'Use the Law of Ukraine <a target="_blank" href="http://zakon.rada.gov.ua/laws/show/5207-17">«On Principles of Prevention and Counteraction of Discrimination in Ukraine»</a> to find the correct answer',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'the Ministry of Internal Affairs ',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'the Ombudsman of Ukraine',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'the Cabinet of Ministers of Ukraine',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'oblast state administrations',
                            hint: 'False',
                            correct: false
                        },
                    ]
                },
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