const questions = "https://api.myjson.com/bins/132n31";

Vue.component('question', {
	template:`
<div>
	<div>
		<b>
			<div class="questions-counter"> 
				{{currentQuestion + 1}}/{{quizLength}}
			</div>
		</b>
		<h2 class="margin">{{question.title}}</h2>
		<p class="quiz-description margin">{{question.description}}</p>
        <div class="row">
            <div class="col-xs-0 col-sm-0 "> </div>
            <div class="col-xs-12 col-sm-12 ">
                <div class="thumbnail quiz-description margin">
                    <img :src="question.pic">
                </div>
            </div>
        </div>
	</div>
	<div>
		<div class="form">
			<div v-for="(answer, index) in answers" style="flex:1">
                <div class="inputGroup" v-bind:disabled="isDisabled">
                    <input type="radio" :id="'answer'+index" v-model="userAnswer" @click="changeDisabledState" :value="index">
                    <label :for="'answer'+index" :disabled="isDisabled">
                        <p style="padding-right: 30px;">
                            {{answers[index].body}}
                        </p>
                    </label>
                </div>
			</div>

			<div style="text-align: center;" id="question">
				<a href="#">
					<button @click="checkAnswer" class = 'button' v-bind:class="{ 'disabled-button': isDisabled }" :disabled="isDisabled">
						Далі
					</button>
				</a>
			</div>
			<div v-if="lastQuestion" @click="endQuiz" style="text-align: center;">
				<button class="button" >Завершити</button>
			</div>
		</div>
	</div>
</div>
`,
  data() {
     return {
		questionAnswered: false,
		userPicked: [],
		isDisabled: true,
       	userAnswer: ''
     }
  },
	props:['question', 'answers', 'current-question', 'quiz-length', 'next-question', 'last-question'],
	methods:{
		checkAnswer: function() {
			if(!this.questionAnswered){
				this.questionAnswered = true;
				this.userPicked[this.userAnswer] = true;	
				if (this.currentQuestion + 1 === this.quizLength) {
					this.lastQuestion = true;
				}
				else {
					this.$emit('user-answer', {
						answer: this.userAnswer,
						quizLength: this.quizLength,
						currentQuestion: this.currentQuestion
					});
					this.userAnswer = null;
					this.questionAnswered = false;
					this.userPicked[this.userAnswer] = false;
				}
				this.isDisabled = true;
			}
		},
		changeDisabledState: function() {
			if(!this.questionAnswered)
				this.isDisabled = false;
		},
		endQuiz: function() {
			this.$emit('end-quiz');

			this.userAnswer = null;
			this.questionAnswered = false;
			this.userPicked[this.userAnswer] = false;
			this.nextQuestion = false;
			this.lastQuestion = false;
		}
	}
});

var app = new Vue({
	el: '#test',
	data() {
		return {
			currentQuestion: 0,
			introFlag: false,
			quizFlag: false,
			resultFlag: false,
			nextQuestion: false,
			lastQuestion: false,
			userAnswers: [],

			intro: {
					title: 'Ким ти станеш, коли виростеш?',
					description: '<p class="quiz-description margin">Час летить так швидко, що не встигнеш оком кліпнути, як тобі вже 19.</p><p class="quiz-description margin">Що очікує тебе в дорослому житті? Проходь тест, щоб визначити свою долю.</p>',
					startButton: 'Розпочати!'
			},
			quizLength: 0,
			quiz:[],
			answers: [],
			profession: 0,
			professionsDesc: [
				{
					"name" : "Майстер/майстриня манікюру для домашніх тварин",
					"desc" : "У дитинстві ти не міг/могла вирішити, ким стати. Тому надумав/ла поєднати ветеринарну справу і манікюр. Тепер ти просуваєш моду в маси домашніх улюбленців! "
				},
				{
					"name" : "Вигулювач(ка) морських свинок ",
					"desc" : "Вигулювачів собак багато, але ніхто не вигулює морських свинок, подумав/ла ти і взяв/ла справу у свої руки.  Тепер тебе можна побачити із десятком свинок щовівторка та щочетверга у парку біля дому. Ти — районна зірка!"
				},
				{
					"name" : "COE = Chief of everything (Директор(ка) всього)",
					"desc" : "Твоя кар’єра почалася доволі рано. У свої немолоді 19 років ти вже був/ла президентом/кою школи, керівником/цею краєзнавчого гуртка та тренером/кою збірної школи з шахів. За твої досягнення тебе прозвали COE. Ти — вовк/чиця з вул. Тараса Шевченка!"
				},
				{
					"name" : "Влогер(ка)-блогер(ка)",
					"desc" : "Успіх — це коли бренди одягу та косметики пропонують тобі безкоштовну продукцію для піару, а ти перепродаєш її на OLX. Але це секрет!"
				},
				{
					"name" : "Дресирувальник(ця) страусів ",
					"desc" : "З дитинства ти мріяв/ла дресирувати левів. Оскільки в твоєму місті левів не знайшлося, ти став/ла дресирувальником/цею страусів і тепер катаєш на них туристів у парку Шевченка. "
				},
				{
					"name" : "Організатор(ка) концертів Олега Винника",
					"desc" : "Успіх — це коли у тебе завжди безкоштовний доступ за куліси на концертах Винника. А головне — бабуся тобою пишається! "
				},
				{
					"name" : "Імпортер(ка) турецьких килимів",
					"desc" : "Час плинний, турецькі килими вічні! Саме тому ти і відкрив/ла свою крамницю турецьких килимів на Бессарабському ринку. На своїй візитівці ти верхи на килимі серії «Східний пушок № 145». "
				},
				{
					"name" : "Мільйонер (ка)-щасливчик(иця). (ледача булка)",
					"desc" : "Золотий батон, так золотий батон! Всі заздрять твоєму успіху і не розуміють, як ти досяг/ла цього в свої 19 років. Про шлюб за розрахунком, перемогу у лотереї та спадок ти, звісно, вирішив/ла змовчати. "
				},
				{
					"name" : "Дизайнер(ка) дитячих розфарбовок",
					"desc" : "Дитина живе в кожному з нас, подумав/ла ти і створив/ла свій бренд дитячих розфарбовок «Розмалювка». Вони настільки круті, що виграли нагороду «Найкраща дитяча розфарбовка місяця у номінації до 5 грн.». Саме таку історію ти розповідаєш своїм друзям! "
				},
				{
					"name" : "Винахідник(ця) найкращих у місті мафінів",
					"desc" : "Мафіни — всьому голова. Саме так звучить народна мудрість, яку ти запам’ятав/ла з уроку Читання в першому класі. Потім ти дізнався/лася, що там йшлося про хліб, але змінювати справу всього життя вже було якось неприкольно."
				},
			]
		}
  },
  created() {
	this.introFlag = true;
  },

  methods: {
	loadQuizData: function () {
		fetch(questions)
		.then(res => res.json())
		.then(res => {
			this.currentQuestion = 0;
			this.nextQuestion = false;
			this.lastQuestion = false;
			this.introFlag = false; 
			this.quizFlag = true; 
			this.resultFlag = false;
			this.quizLength = res.quizLength;
			this.quiz = res.quiz;
			this.answers = res.answers;
			this.userAnswers = new Array(10).fill(0);
		})
	},
	handleAnswer(e){
		let answerArr = this.answers[this.currentQuestion][e.answer].answers;
		answerArr.forEach(element => {
			++this.userAnswers[element - 1];
		});
		this.currentQuestion++;
		introFlag = false;
		quizFlag = true;
		resultFlag = false;
	},
	handleResults() {
		this.profession = Math.max(...this.userAnswers);
	},
	endQuiz(){
		this.handleResults();
		this.quizFlag = false;
		this.resultFlag = true;
	}
  }
});
