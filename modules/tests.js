function startTest() {
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

	// Описание функций

	function testBegins() {
		showModalDark();
		showTestStart();
	}

	function hideModalDark() {
		closeTestWindows();
		dark.classList.add('hidden');
		document.body.style.overflow = '';
	}

	function showModalDark() {
		dark.classList.remove('hidden');
		document.body.style.overflow = 'hidden';
	}

	function showTestStart() {
		testStart.classList.remove('hidden');
	}

	function showTestQuestion() {
		testQuestion.classList.remove('hidden');
	}

	function showTestAnswer() {
		testAnswer.classList.remove('hidden');
	}

	function showResult() {
		testResult.classList.remove('hidden');
	}

	// function

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
	}
}

export default startTest;
