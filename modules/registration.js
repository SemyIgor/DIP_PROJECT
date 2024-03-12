import { dark, registrationBtns, burgerMenu } from './export.js';
function registration() {
	const registration = document.querySelector('.registration');
	const cross = registration.querySelector('.registration .test__result_cross');
	const login = registration.querySelector('#registration__login');
	const password = registration.querySelector('#registration__password');
	const passwordRepeat = registration.querySelector(
		'#registration__password__repeat'
	);
	const button = registration.querySelector('.registration__button');
	let loginValue = '';
	let passwordValue = '';
	let passwordRepeatValue = '';
	// console.log('login: ', login);
	// console.log('password: ', password);
	// console.log('passwordRepeat: ', passwordRepeat);
	// console.log('button: ', button);
	// console.log('registrationBtns: ', registrationBtns);

	// Функция открытия окна регистрации
	function register(event) {
		// Блокируем действие по умолчанию для ссылки на регистрацию
		event.preventDefault();
		// Если регистрация вызывается из бургер-меню, то убираем бургер-меню
		if (event.target.classList.contains('burger__login_reg')) {
			hideBurgerMenu();
		}
		// Прячем сообщение о том, что пользователь уже существует
		hideAlarmMessage(); // ********************************************
		// Вызываем функцию вывода формы регистрации
		showRegistrationForm();
	}

	// Функция скрытия бургер-меню
	function hideBurgerMenu() {
		burgerMenu.classList.remove('shown');
		burgerMenu.classList.add('hidden');
	}

	// Функция вывода формы регистрации
	function showRegistrationForm() {
		// Выводим форму регистрации в серое окно
		registration.classList.remove('hidden');
		registration.classList.add('shown');
		// Выводим на экран серое окно с формой регистрации
		showModalDark();
	}

	// Функция сокрытия формы регистрации
	function hideRegistrationForm() {
		// Скрываем форму регистрации в сером окне
		registration.classList.remove('shown');
		registration.classList.add('hidden');
		// Скрываем серое окно
		hideModalDark();
	}

	// Функция сокрытия серого окна
	function hideModalDark() {
		// Скрываем серое окно
		dark.classList.add('dark__hidden');
		dark.classList.remove('dark__shown');
		// Разблокируем скроллинг страницы
		document.body.style.overflow = '';
	}

	// Функция вывода серого окна
	function showModalDark() {
		// Выводим серое окно
		dark.classList.remove('dark__hidden');
		dark.classList.add('dark__shown');
		// Блокируем скроллинг страницы под серым окном
		document.body.style.overflow = 'hidden';
	}

	// Функция проверки ввода логина пользователя
	function loginInputTest() {
		// Если логин короче 3-х символов,
		if (login.value.length < 3) {
			// то обнуляем введённое значение
			login.value = '';
			// Иначе,
		} else {
			// Сохраняем логин пользователя в переменную
			loginValue = login.value;
		}
	}

	// Функция проверки ввода пароля
	function passwordInputTest() {
		// Если пароль короче 5 символов,
		if (password.value.length < 5) {
			// то обнулим введённый текст
			password.value = '';
			// Иначе,
		} else {
			// Сохраняем пароль в переменную
			passwordValue = password.value;
		}
	}

	// Функция проверки повторного ввода пароля
	function passwordRepeatInputTest() {
		// Если пароли не совпадают,
		if (passwordRepeat.value !== passwordValue) {
			// то обнулим введённый текст
			passwordRepeat.value = '';
			// Иначе,
		} else {
			// Сохраним повторный пароль в отдельную переменную
			// passwordRepeatValue = passwordRepeat.value;
			return passwordValue;
		}
	}

	// Функция сохранения данных пользователя в localStorage
	function saveUserData(event) {
		event.preventDefault();
		// Очищаем поля ввода
		login.value = '';
		password.value = '';
		passwordRepeat.value = '';

		// Если в хранилище нет такого пользователя,
		if (!localStorage.getItem(loginValue)) {
			// то сохраняем его в localStorage
			localStorage.setItem(loginValue, passwordValue);
			// Иначе,
		} else {
			// Выводим сообщение о том, что пользователь существует
			button.parentNode.children[0].classList.remove('registration__hidden');
			button.parentNode.children[0].classList.add('registration__shown');
			// console.log('Такой пользователь уже существует');
		}
	}

	// Функция скрытия сообщения о том, что пользователь уже существует
	function hideAlarmMessage() {
		button.parentNode.children[0].classList.remove('registration__shown');
		button.parentNode.children[0].classList.add('registration__hidden');
	}

	console.log('button.parentNode: ', button.parentNode.children[0]);

	// Слушатель на каждую ссылку регистрации
	registrationBtns.forEach((btn) =>
		btn.addEventListener('click', (event) => register(event))
	);

	// Слушатель на крестик закрытия окна регистрации
	cross.addEventListener('click', () => hideRegistrationForm());

	// Слушатель на потерю фокуса полем ввода login
	login.addEventListener('change', () => {
		loginInputTest();
		console.log('loginValue: ', loginValue);
	});

	// Слушатель на получение фокуса полем ввода логина
	login.addEventListener('focus', () => hideAlarmMessage());

	// Слушатель на поле ввода password
	password.addEventListener('change', () => {
		passwordInputTest();
		console.log('passwordValue: ', passwordValue);
	});

	// Слушатель на поле ввода passwordRepeat
	passwordRepeat.addEventListener('change', () => {
		console.log(passwordRepeatInputTest());
		// console.log('passwordRepeatValue: ', passwordRepeatValue);
	});

	// Слушатель на кнопку отправки формы
	button.addEventListener('click', (event) => saveUserData(event));
}

export default registration;
