new Vue({
    el: '#medical-quiz',
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
                    title: 'Скільки сьогодні, у середньому, триває тестування на ВІЛ-інфекцію (за допомогою швидких тестів):',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'до 1 хвилини',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: '5 хвилин',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: '15 хвилин',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: '1 година',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Лікар має запропонувати дослідження на ВІЛ-інфекцію після:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'видалення зубу',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'переливання крові та її компонентів',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'хірургічних операцій',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'кожного статевого акту',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Найкращі засоби профілактики при ВІЛ-інфекції — це:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'прийом антиретровірусної терапії та використання презервативів',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'використання лубрикантів при статевих актах',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'перерваний статевий акт',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'обробка шприців та голок, якщо їх використовують спільно',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'У яких місцях можна пройти тестування на ВІЛ:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'лише у сімейного лікаря',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'лише у центрах СНІДу',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'у сімейного лікаря та центрах СНІДу',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: "у всіх закладах охорони здоров'я та соціального захисту",
                            hint: 'Неправильно',
                            correct: false
                        }

                    ]
                },
                {
                    type: 0,
                    title: 'Якщо ви приймаєте антиретровірусну терапію, використання презервативів:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'непотрібне ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'потрібне',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Під час реєстрації на конференцію з питання ВІЛ-СНІДу, організатори просять вказати, чи учасник має ВІЛ-статус. Чи правомірний збір такої інформації?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'так, зважаючи на тематику конференції',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'ні. Настільки особисту інформацію не можуть збирати за таких умов',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: ' Начальник відділу кадрів отримав інформацію про можливий ВІЛ-позитивний статус співробітниці. Тепер він вимагає довідку про відсутність ВІЛ-захворювання, а інакше погрожує звільненням. Чи законні його дії? ',
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
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
                {
                    type: 0,
                    title: ' Чоловік звернувся до медичного закладу, щоб отримати інформацію щодо здоров’я своєї дружини. В інформації зазначений ВІЛ-позитивний статус жінки. Чи може адміністрація закладу надавати чоловіку таку інформацію? ',
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
                            body: 'Ні, відповідно до вимог Закону «Про захист персональних даних»',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                }
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
                    description: 'Ви можете краще! Перегляньте відео, щоб покращити свій результат.',
                },
                {
                    description: 'Ви можете краще! Перегляньте відео, щоб покращити свій результат.',
                },
                {
                    description: 'Ви можете краще! Перегляньте відео, щоб покращити свій результат.',
                },
                {
                    description: 'Непоганий результат. Радимо переглянути відео ще раз, щоб попрацювати над помилками.',
                },
                {
                    description: 'Хороший результат!',
                },
                {
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