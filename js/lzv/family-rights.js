new Vue({
    el: '#family-rights-quiz',
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
                    title: 'Якщо ви хочете зареєструвати шлюб, чи зобов’язана інша сторона надати інформацію про стан свого здоров’я?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Так',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Ні',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Інформація про стан здоров’я надається добровільно',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Чи  повнолітні діти мають право на отримання аліментів?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Так',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Ні',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Право на отримання аліментів від батьків мають тільки непрацездатні повнолітні діти',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
                {
                    type: 1,
                    title: 'Хто може укласти шлюбний контракт?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Особи, які подали заяву про реєстрацію шлюбу',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Подружжя',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Особи, які спільно проживають та мають спільних дітей',
                            hint: 'Неправильно',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Які бувають форми домашнього насильства?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'фізичне',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'сексуальне',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'психологічне',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'економічне',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'соціальне',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Яку державну допомогу НЕ може отримати особа, яка зазнала домашнього насильства?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'безоплатну юридичну допомогу ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'психологічну допомогу',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'соціальні послуги',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'тимчасовий притулок у центрі соціально-психологічної допомоги, кризовому центрі',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'щомісячні виплати розміром 170 грн',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
            ],
            resultText: [{
                    description: 'Радимо переглянути відео і ще раз пройти тест. Все вдасться!',
                },
                {
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