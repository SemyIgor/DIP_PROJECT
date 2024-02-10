function startTest() {
	// Bases
	let counter = 0;
	const questions = [
		{ taskNo: '0', questNo: '0', text: '' },
		{ taskNo: '1', questNo: '0', text: '' },
		{ taskNo: '2', questNo: '0', text: '' },
		{ taskNo: '3', questNo: '0', text: '' },
	];

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
		showResult();
	});

	// Событие на кнопку завершения тестирования
	testResultBtn.addEventListener('click', () => {
		closeTestWindows();
		hideModalDark();
		// showResult();
	});

	// Описание функций ================================

	function testBegins() {
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
		document.body.style.overflow = 'dark';
	}

	function showTestStart() {
		testStart.classList.remove('hidden');
		testStart.classList.add('shown');
	}

	function showTestQuestion() {
		testQuestion.classList.remove('hidden');
		testQuestion.classList.add('shown');
	}

	function showTestAnswer() {
		testAnswer.classList.remove('hidden');
		testAnswer.classList.add('shown');
	}

	function showResult() {
		testResult.classList.remove('hidden');
		testResult.classList.add('shown');
	}

	function getAnswer() {
		const questionAnswers = document.querySelectorAll('.answers');
		questionAnswers.forEach((answer) => {
			console.log('answer: ', answer.checked);
			// Здесь считываем данные с формы в переменную
			answer.checked = false; // очищаем инпуты
		});
		// Здесь будет обработка данных формы
		closeTestWindows();
		showTestAnswer();
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

	function loadQuestion() {}
	function loadAnswer() {}
}

export default startTest;
