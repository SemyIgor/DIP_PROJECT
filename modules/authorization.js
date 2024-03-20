import {
	showModalDark,
	hideModalDark,
	hideBurgerMenu,
	getLocalStorageUsers,
	universalHideBlock,
	universalShowBlock,
	headerLoginExit,
	headerLoginLog,
	registrationBtns,
	headerLoginBtns,
} from './export.js';

function authorization() {
	// // Кнопки открытия окна авторизации (хедер и модалка)
	// const headerLoginBtns = document.querySelectorAll("[class*='__login_btn']");

	// Окно авторизации
	const authorization = document.querySelector('.authorization');

	// Крестик закрытия окна авторизации
	const cross = authorization.querySelector(
		'.authorization .test__result_cross'
	);

	// Блок сообщения о том, что такого пользователя не существует
	const authorizationErrorBlock = authorization.querySelector(
		'.authorization__error__block'
	);

	// Поле ввода логина
	const login = authorization.querySelector('#authorization__login');
	// console.dir('login: ', login);

	// Поле ввода пароля
	const password = authorization.querySelector('#authorization__password');
	// console.log('password: ', password);

	// Кнопка в окне авторизации
	const button = authorization.querySelector('.authorization__button');

	let users;
	let authorizedUserLogin = '';

	// Функция очистки полей формы авторизации
	function clearAuthorizationForm() {
		login.value = '';
		password.value = '';
	}

	// Функция закрытия формы авторизации
	function hideAuthorizationForm() {
		// Очищаем поля формы авторизации
		clearAuthorizationForm();
		// Прячем сообщение об ошибке авторизации
		universalHideBlock(authorizationErrorBlock);
		// Скрываем форму авторизации в сером окне
		authorization.classList.remove('shown');
		authorization.classList.add('hidden');
		// Скрываем серое окно
		hideModalDark();
	}

	// Функция открытия окна авторизации
	function authorize(event) {
		// Блокируем действие по умолчанию для кнопки на авторизацию
		event.preventDefault();

		// Если авторизация вызывается из бургер-меню, то убираем бургер-меню
		if (event.target.classList.contains('burger__login_btn')) {
			hideBurgerMenu();
		}

		// Прячем сообщение о том, что пользователь уже существует
		// hideAlarmMessage();

		// Получаем данные о пользователях из localStorage
		users = getLocalStorageUsers();

		// Вызываем функцию вывода формы авторизации
		showAuthorizationForm();
	}

	// Функция вывода формы авторизации
	function showAuthorizationForm() {
		// Выводим форму авторизации в серое окно
		authorization.classList.remove('hidden');
		authorization.classList.add('shown');
		// Выводим на экран серое окно с формой авторизации
		showModalDark();
	}

	// // Функция скрытия сообщения об ошибке ввода
	// function hideAlarmMessage() {
	// 	button.parentNode.children[0].classList.remove('registration__shown');
	// 	button.parentNode.children[0].classList.add('registration__hidden');
	// }

	// Функция проверки, есть ли данный пользователь с таким паролем в базе
	function doesThisUserCorrect() {
		if (users.length > 0) {
			return users.some(
				(user) => user.login === login.value && user.password === password.value
			);
		}
	}

	// Функция проверки авторизации
	function checkAuthorization(event) {
		event.preventDefault();
		// console.log('doesThisUserCorrect(): ', doesThisUserCorrect());

		if (doesThisUserCorrect()) {
			// Выполняем авторизацию пользователя
			loginingBlock();

			// Убираем окно авторизации с экрана
			hideAuthorizationForm();
		} else {
			console.log('Пользователь не авторизован');
			universalShowBlock(authorizationErrorBlock);
		}
	}

	function loginingBlock() {
		// // Сохраняем логин авторизованного пользователя ***
		authorizedUserLogin = login.value;

		// Отображаем иконку выходной двери ***
		universalShowBlock(headerLoginExit);

		// Отображаем логин авторизованного пользователя ***
		headerLoginLog.textContent = authorizedUserLogin; // Присваиваем значение
		universalShowBlock(headerLoginLog);

		// Прячем кнопки "Войти" ***
		headerLoginBtns.forEach((headerLoginBtn) => {
			universalHideBlock(headerLoginBtn);
		});

		// Прячем ссылку со словом "регистрация" ***
		registrationBtns.forEach((registrationBtn) => {
			universalHideBlock(registrationBtn);
		});
	}

	function exitAuthorization() {
		// Обнуляем логин авторизованного пользователя
		authorizedUserLogin = '';
		headerLoginLog.textContent = authorizedUserLogin;

		// Прячем логин авторизованного пользователя
		universalHideBlock(headerLoginLog);

		// Прячем блок иконки с дверью (выход из авторизации)
		universalHideBlock(headerLoginExit);

		// Отображаем кнопки "Войти"
		headerLoginBtns.forEach((headerLoginBtn) => {
			universalShowBlock(headerLoginBtn);
		});

		// Отображаем ссылку со словом "регистрация"
		registrationBtns.forEach((registrationBtn) => {
			universalShowBlock(registrationBtn);
		});
	}

	// Слушатель кнопок входа в авторизацию
	headerLoginBtns.forEach((headerLoginBtn) => {
		headerLoginBtn.addEventListener('click', (event) => {
			authorize(event);
		});
	});

	// Слушатель кнопки окна авторизации
	button.addEventListener('click', (event) => checkAuthorization(event));

	// Слушатель крестика закрытия окна авторизации
	cross.addEventListener('click', () => hideAuthorizationForm());

	// Слушатель иконки двери (выход из авторизации)
	headerLoginExit.addEventListener('click', () => {
		exitAuthorization();
	});

	// Слушатель на получение фокуса полем ввода логина
	login.addEventListener('focus', () => {
		clearAuthorizationForm();
		universalHideBlock(authorizationErrorBlock);
	});
}

export default authorization;
