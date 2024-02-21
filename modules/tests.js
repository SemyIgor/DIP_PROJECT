function startTest() {
	// Очки начисляются так: "верно" - 2, "не знаю" - 1, "ошибка" - 0
	// Bases data
	let counter;
	let pointsSum;
	const questions = [
		{
			qNumber: 0,
			qText:
				'Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?',
			answers: [
				'Да, сумма явно неверная',
				'Нет, такая сумма вполне могла получиться',
				'Не знаю, не получается решить',
			],
			points: [2, 0, 1],
		},
		{
			qNumber: 1,
			qText:
				'Вообразите десятикилометровый мост через пролив. Максимальная нагрузка для него – 25 тонн. С начала этого моста стартовал грузовик, масса которого – ровно 25 тонн. Автомобиль продолжает движение к противоположному краю. Баланс моста пока не нарушен. Неожиданно, когда грузовик достиг середины этого путепровода, на него сел воробей со своим весом. Вопрос к вам: приведёт ли вес птицы к нарушению балансировки и разрушению моста?',
			answers: [
				'Да, мост разрушится',
				'Нет, воробей не сможет разрушить мост',
				'Не знаю, как решить',
			],
			points: [0, 2, 1],
		},
		{
			qNumber: 2,
			qText:
				'Слуги султана бросили отважного воина в темницу с двумя дверьми. Одна дверь ведёт на волю, а вторая не имеет выхода. Вместе с ним беспрерывно будут рядом два надзирателя. Один стражник правдив в разговоре, а второй лжёт. Султан предложил воину выбрать любой вход: если это дверь на волю, то пленник свободен. Можно задать один вопрос на двоих надзирателей. Пленник не в курсе, кто из них лжец, а кто правдив. Надзиратели, знают, какой вход подарит воину освобождение. Сможет ли воин выйти на свободу?',
			answers: [
				'Да, и я знаю нужный для этого вопрос',
				'Нет, стражники всегда дадут различный ответ',
				'Не знаю, это жуткая история',
			],
			points: [2, 0, 1],
		},
		{
			qNumber: 3,
			qText:
				'Два теплохода одновременно вышли из портов и с постоянной скоростью движутся во встречном направлении. Скорость одного теплохода 20 км/час, другого – 30 км/час. На каком расстоянии друг от друга они будут находиться ровно за один час до их встречи?',
			answers: ['Не могу ответить', 'Расстояние 60 км', 'Расстояние 50 км'],
			points: [1, 0, 2],
		},
	];

	const answers = [
		{
			correct: {
				aNumber: 0,
				header: 'Правильно! С логикой у вас все отлично',
				text: 'Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких условиях в результате не может получиться нечетное число 525, а значит, продавщица действительно 	ошиблась, и Иван Иванович прав. В этом задании проверялось ваше логическое мышление. Это критически важный навык для любого программиста.',
			},
			incorrect: {
				aNumber: 0,
				header: 'Увы! Задача решается так:',
				text: 'Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких условиях в результате не может получиться нечетное число 525, а значит, продавщица действительно 	ошиблась, и Иван Иванович прав. В этом задании проверялось ваше логическое мышление. Это критически важный навык для любого программиста.',
			},
		},
		{
			correct: {
				aNumber: 1,
				header: 'Верно! Это была задача с подвохом',
				text: 'Так как грузовик преодолел путь до середины моста, что равно 5 км, расход потраченного топлива в разы превысил вес птицы.',
			},
			incorrect: {
				aNumber: 1,
				header: 'Жаль! Логика решения такова:',
				text: 'Так как грузовик преодолел путь до середины моста, что равно 5 км, расход потраченного топлива в разы превысил вес птицы.',
			},
		},
		{
			correct: {
				aNumber: 2,
				header: 'Правильно! Вы готовы к такой ситуации )',
				text: 'Воин задаст только один вопрос любому из надзирателей: «Если попросить твоего коллегу указать на вход «освобождение», то куда он направит меня?» Правдивый указал бы верный выход к свободе, но лжец, зная это, "переврёт" ответ правдивого и укажет на «вход в неволю». Лжец, солгав, указал бы на «вход в неволю» и, спросив у правдивого, вы получите правдивый ответ о том, куда укажет лжец. То есть, любой из надзирателей укажет на «вход в неволю»',
			},
			incorrect: {
				aNumber: 2,
				header: 'Сложная задача! А решение такое:',
				text: 'Воин задаст только один вопрос любому из надзирателей: «Если попросить твоего коллегу указать на вход «освобождение», то куда он направит меня?» Правдивый указал бы верный выход к свободе, но лжец, зная это, "переврёт" ответ правдивого и укажет на «вход в неволю». Лжец, солгав, указал бы на «вход в неволю» и, спросив у правдивого, вы получите правдивый ответ о том, куда укажет лжец. То есть, любой из надзирателей укажет на «вход в неволю»',
			},
		},
		{
			correct: {
				aNumber: 3,
				header: 'Точно! Это была простая задача',
				text: 'За один час до встречи теплоходам предстоит идти ровно 1 час. За этот час один теплоход пройдёт 20 км, а второй теплоход пройдёт 30 км. В итоге, вместе за этот час они пройдут 50км, что и есть расстояние между теплоходами за час до встречи.',
			},
			incorrect: {
				aNumber: 3,
				header: 'Хорошо, я подскажу решение:',
				text: 'За один час до встречи теплоходам предстоит идти ровно 1 час. За этот час один теплоход пройдёт 20 км, а второй теплоход пройдёт 30 км. В итоге, вместе за этот час они пройдут 50км, что и есть расстояние между теплоходами за час до встречи.',
			},
		},
	];

	const resultNumber = document.querySelector('.result__number');

	// Окно описания теста
	const testStart = document.querySelector('.test__start');

	// Окно (первого) вопроса
	const testQuestion = document.querySelector('.test__question');

	// Окно (первого) ответа
	const testAnswer = document.querySelector('.test__answer');

	// Окно результата тестирования
	const testResult = document.querySelector('.test__result');

	// Затемнённый фон модального окна
	const dark = document.querySelector('.dark');

	// Закрытие модального окна при нажатии "крестика" в окне описания теста
	const testStartCross = document.querySelector('.test__start_cross');
	testStartCross.addEventListener('click', () => hideModalDark());

	// Закрытие модального окна при нажатии "крестика" в окне вопросов
	const testQuestionCross = document.querySelector('.test__question_cross');
	testQuestionCross.addEventListener('click', () => hideModalDark());

	// Закрытие модального окна при нажатии "крестика" в окне ответа
	const testAnswerCross = document.querySelector('.test__answer_cross');
	testAnswerCross.addEventListener('click', () => hideModalDark());

	// Закрытие модального окна при нажатии "крестика" в окне результата тестирования
	const testResultCross = document.querySelector('.test__result_cross');
	testResultCross.addEventListener('click', () => hideModalDark());

	// Кнопки перехода к тестированию
	// Предусмотрим возможное добавление такой же кнопки (querySelectorAll)
	const startTestBnt = document.querySelectorAll('.main__btn');
	// const plusTostudyBtn = document.querySelector('.plus__tostudy_btn');

	// Кнопка начала тестириования
	const testStartBtn = document.querySelector('.test__start_btn');

	// Кнопка ввода ответа на задание
	const testQuestionBtn = document.querySelector('.test__question_btn');

	// Кнопка перехода к следующему заданию или к результату тестирования
	const testAnswerBtn = document.querySelector('.test__answer_btn');

	// Кнопка завершения тестирования
	const testResultBtn = document.querySelector('.test__result_btn');

	// =========================================================
	// Элемент "Номер вопроса"
	const testQuestionNumber = testQuestion.querySelector(
		'.test__question_number'
	);
	// Элемент "текст вопроса"
	const testQuestionText = testQuestion.querySelector('.test__question_text');

	const testQuestionCheckboxes = testQuestion.querySelector(
		'.test__question_checkboxes'
	);
	// ----------------------------------------------------------
	// =========================
	// Элемент "Номер ответа"
	const testAnswerNumber = document.querySelector('.test__answer_number');
	// Элемент "Заголовок ответа"
	const testAnswerTitle = document.querySelector('.test__answer_title');
	// Элемент "Текст ответа"
	const testAnswerText = document.querySelector('.test__answer_text');
	// -------------------------

	// Событие на кнопку (или кнопки, если будут дополнительно) перехода к тестированию
	startTestBnt.forEach((btn) =>
		btn.addEventListener('click', () => testBegins())
	);

	// Событие на кнопку начала тестирования
	testStartBtn.addEventListener('click', () => {
		closeTestWindows();
		showTestQuestion();
	});

	// Событие на кнопку ввода ответа на вопрос
	testQuestionBtn.addEventListener('click', () => {
		// closeTestWindows();
		getAnswer();
	});

	// Событие на кнопку перехода к результату (или следующему вопросу)
	testAnswerBtn.addEventListener('click', () => {
		closeTestWindows();
		showTestQuestion();
	});

	// Событие на кнопку завершения тестирования
	testResultBtn.addEventListener('click', () => {
		closeTestWindows();
		hideModalDark();
	});

	// Описание функций ================================

	function testBegins() {
		counter = 0;
		pointsSum = 0;
		showModalDark();
		showTestStart();
	}

	function hideModalDark() {
		closeTestWindows();
		dark.classList.add('dark__hidden');
		dark.classList.remove('dark__shown');
		document.body.style.overflow = '';
	}

	function showModalDark() {
		dark.classList.remove('dark__hidden');
		dark.classList.add('dark__shown');
		document.body.style.overflow = 'hidden';
	}

	function showTestStart() {
		testStart.classList.remove('hidden');
		testStart.classList.add('shown');
	}

	function showTestQuestion() {
		if (counter < questions.length) {
			// Открываем окно с вопросом
			testQuestion.classList.remove('hidden');
			testQuestion.classList.add('shown');

			// Выводим в окне номер задания
			testQuestionNumber.textContent = `ЗАДАНИЕ №${
				// questions[counter].qNumber + 1
				counter + 1
			}`;

			// Выводим в окне текст задания
			testQuestionText.textContent = `${questions[counter].qText}`;

			// Выводим варианты ответов
			testQuestionCheckboxes.innerHTML = ``;
			questions[counter].answers.forEach((answer, index) => {
				testQuestionCheckboxes.insertAdjacentHTML(
					'beforeend',
					`
					<div class="checkbox">
						<input class="answers" type="checkbox" name="a${index}" id="q${
						counter + 1
					}a${index}" />
						<label for="q${counter + 1}a${index}">${answer}</label>
					</div>
				`
				);
			});
		} else {
			showResult();
		}
	}

	function showTestAnswer(answerResult) {
		testAnswer.classList.remove('hidden');
		testAnswer.classList.add('shown');
		// testAnswerNumber.textContent = `ЗАДАНИЕ №${questions[counter].qNumber + 1}`;
		testAnswerNumber.textContent = `ЗАДАНИЕ №${counter + 1}`;
		if (answerResult === 2) {
			testAnswerTitle.textContent = `${answers[counter].correct.header}`;
			testAnswerText.textContent = `${answers[counter].correct.text}`;
		} else {
			testAnswerTitle.textContent = `${answers[counter].incorrect.header}`;
			testAnswerText.textContent = `${answers[counter].incorrect.text}`;
		}

		// Переходим к следующему номеру задания
		counter++;
	}

	function showResult() {
		testResult.classList.remove('hidden');
		testResult.classList.add('shown');
		resultNumber.textContent = `НАБРАНО ${pointsSum} из ${
			questions.length * 2
		}`;
	}

	function getAnswer() {
		// Массив возможных ответов на данный вопрос
		const questionAnswers = document.querySelectorAll('.answers');
		// Накопление массива значений инпутов
		let answersReceivedArray = [];
		questionAnswers.forEach((answer) => {
			// Здесь считываем данные из инпута и сохраняем в массив инпутов
			answersReceivedArray.push(answer.checked);
			answer.checked = false; // обнуляем инпут
		});

		// Здесь будет обработка данных формы
		// Суммирование количества набранных очков за один вопрос
		let answerResult = 0;
		let answersCounter = 0; // счётчик количества выбранных ответов
		// Находим сумму очков всех инпутов
		for (let i = 0; i < answersReceivedArray.length; i++) {
			answerResult =
				answerResult +
				Number(answersReceivedArray[i]) * questions[counter].points[i];
			if (answersReceivedArray[i] === true) answersCounter++;
		}
		// Если выбран не один ответ
		if (answersCounter !== 1) answerResult = 0;
		pointsSum += answerResult;
		closeTestWindows();
		showTestAnswer(answerResult);
	}

	function closeTestWindows() {
		testStart.classList.add('hidden');
		testQuestion.classList.add('hidden');
		testAnswer.classList.add('hidden');
		testResult.classList.add('hidden');
		testStart.classList.remove('shown');
		testQuestion.classList.remove('shown');
		testAnswer.classList.remove('shown');
		testResult.classList.remove('shown');
	}
}

export default startTest;
