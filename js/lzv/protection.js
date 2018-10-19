new Vue({
    el: '#protection-quiz',
    data() {
        return {
            intro: {
                title: '',
                description: "Ви можете скласт цей тест, щоб краще запам'ятати матеріал.",
                button: 'Почати',
                background: false,
            },
            quiz: [{
                    type: 0,
                    title: 'Відповідно до Закону України <a target="_blank" href="http://zakon2.rada.gov.ua/laws/show/393/96-%D0%B2%D1%80">«Про звернення громадян»</a>, чи стягується із заявника плата за розгляд звернень?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'стягується в будь-якому випадку',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'стягується у виняткових випадках',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'не стягується в жодному випадку',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'стягується за розгляд звернень керівників юридичних осіб.',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Звернення, оформлене без дотримання вимог Закону України «Про звернення громадян»:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'повертається з відповідним роз’ясненням',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'залишається без руху',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'може бути розглянуто за бажанням уповноваженої особия',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'направляється вищестоящому органу, який вирішує, чи можна розглянути звернення',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: ' Згідно із Законом України «Про звернення громадян», розгляду та вирішенню не підлягають такі звернення:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'анонімні',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'колективні',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'індивідуальні',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'усні',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: ' Відповідно до Закону України «Про звернення громадян», звернення громадян до установ та організацій, які потребують додаткового вивчення, розглядаються:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: '5 робочих діб',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: '30 днів з моменту отримання звернень',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: '15 календарних днів',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                }


            ],
            resultText: [{
                    description: 'Радимо переглянути відео і ще раз пройти тест. Все вдасться!',
                },
                {
                    description: 'Ви можете краще! Перегляньте відео, щоб покращити свій результат.',
                },
                {
                    description: 'Непоганий результат. Радимо переглянути відео ще раз, щоб попрацювати над помилками.',
                },
                {
                    description: 'Хороший результат!',
                }, {
                    description: 'Чудова робота, так тримати! Попереду — ще більше цікавої інформації.',
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