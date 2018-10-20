new Vue({
    el: '#discrimination-quiz',
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
                    title: 'Створення для одних людей менш сприятливих умов через вік, стать, расу та інші ознаки — це ',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'утиск',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'пряма дискримінація ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'непряма дискримінація',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'просто так склалось ',
                            hint: 'Неправильно',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Яка зі вказаних ситуацій НЕ є дискримінацією?',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'ви прийшли на співбесіду. Вас запитують про досвід роботи, освіту. А потім — чи збираєтеся ви одружуватись, чи є у вас діти, чи плануєте їх мати. ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'в університеті в одній групі навчаються хлопець і дівчина з Судану. Хлопець дуже подобається дівчині, тому вона пропонує йому зустрічатися. Хлопець відмовляється. ',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'охоронця в супермаркеті просять перевести працювати на склад, тому що дізналися про його ВІЛ-позитивний статус. ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'колега в офісі постійно розповідає, що жінки слабші та не такі розумні як чоловіки. А тому й заробляють менше ',
                            hint: 'Неправильно',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: 'Щоб потрапити до відділення банку, потрібно подолати 8 сходинок, які не обладнані пандусом. Люди з інвалідністю та представники інших маломобільних груп не можуть скористатися банківськими послугами. Це приклад:',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'прямої дискримінації',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'непрямої дискримінації ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'відмови в розумному пристосуванні ',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'пособництва в дискримінації',
                            hint: 'Неправильно',
                            correct: false
                        },
                    ]
                },
                {
                    type: 0,
                    title: ' Непряма дискримінація може бути виправданою, якщо... ',
                    description: '',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'вона обґрунтовується правомірно',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'її підтримує більшість населення країни/регіону ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'непряма дискримінація ніколи не може бути виправданою',
                            hint: 'Неправильно',
                            correct: false
                        }
                    ]
                },
                {
                    type: 0,
                    title: 'Повноваження контролювати дотримання принципу недискримінації в усіх сферах суспільних відносин покладені законодавством на... ',
                    description: 'Відповідь на запитання радимо шукати в Законі України <a target="_blank" href="http://zakon.rada.gov.ua/laws/show/5207-17">«Про засади запобігання та протидії дискримінації в Україні»</a>',
                    img: false,
                    true_hint: '<span class="true"></span>',
                    false_hint: '<span class="false"></span>',
                    answers: [{
                            body: 'органи внутрішніх справ ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'уповноваженого Верховної Ради України з прав людини ',
                            hint: 'Правильно',
                            correct: true
                        },
                        {
                            body: 'кабінет Міністрів України ',
                            hint: 'Неправильно',
                            correct: false
                        },
                        {
                            body: 'обласні державні адміністрації',
                            hint: 'Неправильно',
                            correct: false
                        },
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