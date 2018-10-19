new Vue({
    el: '#social-quiz',
    data() {
        return {
            intro: {
                title: '',
                description: "Ви можете скласт цей тест, щоб краще запам'ятати матеріал.",
                button: 'Почати',
                background: false,
            },
            quiz: [{
                    type: 1,
                    title: ' Вкажіть обов’язкові умови для отримання допомоги по безробіттю:',
                    description: 'Оберіть кілька правильних відповідей',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Офіційне працевлаштування в минулому',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Звернення до центру зайнятості виключно за місцем реєстрації',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Трудовий стаж не менше 6 місяців за останній рік',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Будь-який трудовий стаж за останній рік',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Наявність вищої освіти',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: ' Як визначити, що ваша родина — малозабезпечена і має право на допомогу від держави:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'необхідно порахувати сукупний дохід на кожного члена родини і порівняти його з прожитковим мінімумом',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'необхідно порахувати середню заробітну плату кожного члена родини за рік та порівняти з середньою заробітною платою в країні',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 1,
                    title: 'Соціальний супровід сімей, які знаходяться в складних життєвих умовах, включає:',
                    description: 'Оберіть кілька правильних відповідей',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'придбання одягу та прикрас',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'придбання та доставку медикаментів ',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'допомогу з працевлаштуванням',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'послуги психолога',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'екстрене відібрання дитини, якщо існує загроза її життю та здоров’ю ',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: ' щомісячну фінансову допомогу',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },

                {
                    type: 1,
                    title: 'Діти, які живуть з ВІЛ, мають такі спеціальні права:',
                    description: 'Оберіть кілька правильних відповідей',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'безкоштовний проїзд у громадському транспорті',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'вступ до вищих навчальних закладів поза конкурсом',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'щомісячну фінансову допомогу до 16 років',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'щорічне оздоровлення в дитячих закладах (для дітей I, II диспансерних груп)',
                            hint: 'Правильно',
                            correct: true
                        }
                    ]
                },
                {
                    type: 1,
                    title: 'Визначте, які з тверджень — правдиві:',
                    description: 'Оберіть кілька правильних відповідей',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'Щоб оформити щомісячну допомогу (170 грн), ВІЛ-позитивним дітям необхідно звернутися до Міністерства соціальної політики',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'Щоб оформити щомісячну допомогу (170 грн), ВІЛ-позитивним дітям необхідно звернутися до Регіонального центру профілактики і боротьби зі СНІДом',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Виплати по догляду за дітьми з інвалідністю оформлюються в управлінні праці та соціального захисту населення за місцем проживання',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'Виплати за догляд за дітьми з інвалідністю оформлюються в Департаменті охорони здоров’я за місцем проживання.',
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