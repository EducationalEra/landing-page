new Vue({
    el: '#police-quiz',
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
                    title: 'Що варто робити, якщо поліцейський виявив у вас медичні препарати?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Зробити вигляд, що ви не розумієте про що йде мова',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Вигадати правдоподібну причину на кшталт «це ліки для родича»',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Спокійно пояснити, навіщо вам препарати. За можливості — показати схему лікування',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Відмовитися пояснювати та вимагати викликати вашого лікаря',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Що варто робити, якщо поліцейський виявив у вас медичні препарати?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Вимагати дотримуватися прав людини',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Намагатися втекти або захищатися фізично',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Виконувати вказівки полійцейського, що б не трапилося',
                            hint: 'Неправильно',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Вкажіть час, з якого вважається, що особа затримана поліцією:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'з часу, коли поліцейський обмежив особу в пересуванні',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'з часу, який скаже поліцейський',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'з часу поміщення до камери затриманих у поліції',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'з часу, що зазначений у протоколі про затримання',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Зазначте додаткові права, якими НЕ володіє затримана ЛЖВ',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Просити повідомити керівництво центру, де ЛЖВ проходить лікування, та громадську організацію, що опікується лікуванням ЛЖВ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Вимагати утримання в медичній палаті ',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Вимагати продовження лікування на час затримання',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Нерозголошення діагнозу працівниками поліції іншим особам',
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