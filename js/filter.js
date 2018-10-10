

		let json = [

		

		
			{
				header:"Ідеальна держава",
				description:"Яка вона, ідеальна держава? У цьому занятті учні дізнаються, чим держава відрізняється від країни, розглянуть характеристики та критерії успішності держав світу. А насамкінець — стануть...",
				img:"../img/25/cards/1.jpg",
				link:"./idealna-derjava-1.html",
				category:["3", "5"]
			},
			{
				header:"Підготовка та реалізація проектів",
				description:"Щодня ми стикаємося з викликами — як особистими, так і суспільними. Уміння швидко реагувати та складати план дій — незамінна навичка сьогодення. Дізнайтеся, як пов’язані спільноти...",
				img:"../img/25/cards/2.jpg",
				link:"./pidgotovka-realizaciya-proektiv-3.html",
				category:["1", "4"]
			},
			{
				header:"Правда у фактах",
				description:"У бурхливому інформаційному потоці складно помітити маніпулювання фактами та відрізнити правду від брехні. Медіаграмотність сьогодні важлива як ніколи, тому це заняття присвяченею...",
				img:"../img/25/cards/3.jpg",
				link:"./pravda-v-faktah-4.html",
				category:["2", "6"]
			},
			{
				header:"Енергозбереження у моєму домі",
				description:"Щохвилини в світі неефективно витрачається 1000 кВт енергії. Їх можна було б зберегти та використати для освітлення 30 000 будинків! Енергозбереження починається з кожного дому. Замисліться...",
				img:"../img/25/cards/4.jpg",
				link:"./energozberegennya-5.html",
				category:["4", "5"]
			},
			{
				header:"Мій бюджет",
				description:"Гроші визначають статок родин і благополуччя держави, дають доступ до необмежених можливостей і ресурсів. Але чому саме ці кольорові папірці дозволяють отримати гарну іграшку, модний одяг або смачну їжу...",
				img:"../img/25/cards/5.jpg",
				link:"./miliard-gryven-6.html",
				category:["4", "5"]
			},
			{
				header:"Демографічні процеси в суспільств",
				description:"Кількість людей на планеті невпинно зростає — наразі нас уже близько 7,5 млрд.Однак чому ж з 1993 року кількість населення в Україні зменшується? Поговоримо про причини і наслідки демографічних процесів...",
				img:"../img/25/cards/6.jpg",
				link:"./demografichni-procesy-7.html",
				category:["5"]
			},
			{
				header:"Шкільний урок волонтерства",
				description:"Ми часто чуємо слово «волонтер», але рідко замислюємося, що саме воно означає. То що ж таке волонтерство? І хто такий волонтер? У цьому занятті ви дізнаєтеся про різновиди волонтерства, як долучитися...",
				img:"../img/25/cards/7.jpg",
				link:"./volonterstvo-9.html",
				category:["1"]
			},
			{
				header:"Вирішує мозок",
				description:"Руде волосся чи зелені очі, ліворукість, негативний резус-фактор, гомосексуальність. Хто це визначає — традиції, суспільство, виховання? А можливо, це біологічні вроджені особливості? У цьому занятті...",
				img:"../img/25/cards/8.jpg",
				link:"./vyrishue-mozok-10.html",
				category:["2"]
			},
			{
				header:"Компетентнісні завдання",
				description:"Світ змінюється та вимагає навичок, про які раніше й не чули — медіа- та фінансова грамотність, вміння працювати з інформацією, навчання впродовж життя. Компетентнісні завдання дозволяють навчити дітей...",
				img:"../img/25/cards/9.jpg",
				link:"./kompetentnisni-zavdannya-11.html",
				category:["4", "5"]
			},
			{
				header:"Англія в 16 ст.: ретроспектива",
				description:"Чи дотримувалися прав людини в Англії 16 століття? Учні здійснять історичний екскурс, дізнаються, що таке «криваві закони» та як змінювалося англійське суспільство. Крім цього, вони стануть парламентарями...",
				img:"../img/25/cards/10.jpg",
				link:"./history-12.html",
				category:["2", "3"]
			},
			{
				header:"Як відрізнити факт від думки?",
				description:"Факт і думка — це різні речі, але в сучасному інформаційному потоці їх легко сплутати. У цьому занятті учні навчаться відрізняти факт від думки та зрозуміють, наскільки важливо критично мислити та вдумливо...",
				img:"../img/25/cards/11.jpg",
				link:"./english-13.html",
				category:["2", "6"]
			},
			{
				header:"Громадський бюджет",
				description:"Змінювати життя власного міста — не так складно, як здається на перший погляд. І громада, і окремий громадянин можуть долучитися до позитивних змін завдяки бюджету участі. Учні дізнаються, що таке...",
				img:"../img/25/cards/12.jpg",
				link:"./gromadskyi-budget-14.html",
				category:["1", "4", "5"]
			},
			{
				header:"Я - громадянин?",
				description:"Хто такий громадянин? Чи має він права? А обов’язки? У цьому занятті, побудованому на матеріалах повісті-казки Галини Малик «Незвичайні пригоди Алі в країні Недоладії», учні не лише слідкують за пригодами...",
				img:"../img/25/cards/13.jpg",
				link:"./gromadyanyn-15.html",
				category:["3", "5"]
			},
		]





$(".cases_checkbox").click(function(e) {
	var chkArray = [];
	$(".cases_checkbox:checked").each(function() {
		chkArray.push($(this).val());
	});
	console.log(chkArray);
	if( chkArray != []){
		$(".right.cases_block").empty();
$.each( json, function( key, value ) {
	if(fillter(chkArray, value.category)){
		var html =  `
		<div class="case">
			<div style="background-image: url(${value.img})" class="img"></div>
			<div class="info">
			<h3>${value.header}</h3>
			<p>${value.description}</p>
			<a href="${value.link}" target="_blank">переглянути </a>
			</div>
		</div>
		`;
		$(".right.cases_block").append(html) ;

	}
});

}
if(chkArray.length == 0){
	$.each( json, function( key, value ) {
		var html =  `
		<div class="case">
			<div style="background-image: url(${value.img})" class="img"></div>
			<div class="info">
			<h3>${value.header}</h3>
			<p>${value.description}</p>
			<a href="${value.link}" target="_blank">переглянути </a>
			</div>
		</div>
		`;
		$(".right.cases_block").append(html) ;
});
}
})

function fillter(needles, haystack){ 
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) != -1){
      return true;
  	}
  }
  return false;
}