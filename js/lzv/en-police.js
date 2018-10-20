new Vue({
    el: '#en-police-quiz',
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
                    title: 'What would you do, if a police officer discovered your medicines?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Pretend not to understand what is going on',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Come up with some plausible reason like «it is the medicine of a family member»',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Calmly explain why you need the medicine. If possible, show the treatment scheme',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'Refuse to explain and require calling your doctor',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'How to act when a police officer treats you aggressively and by doing this, in your opinion, violates your rights?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Require him/her to respect human rights',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'Try to escape or defend yourself physically',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'Whatever happens, follow the police instructions',
                            hint: 'False',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Indicate the beginning of the time when a person is considered to be detained by the police',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'from the moment indicated by the police officer',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'since being placed in a ward of detention',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'from the moment when the police officer limited a person"s freedom of movement',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'from the moment specified in the detention report',
                            hint: 'False',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Which of the following rights are NOT granted to the detained HIV-positive people?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'The right to require to inform the medical centre where an HIV-positive person is receiving treatment and a public organization that cares for his/her treatment.',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'The right to require further treatment at the time of detention',
                            hint: 'False',
                            correct: false
                        },
                        {
                            body: 'The right to demand retention in the medical ward ',
                            hint: 'True',
                            correct: true
                        },
                        {
                            body: 'The right to demand non-disclosure of the diagnosis by police officers to other persons',
                            hint: 'False',
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