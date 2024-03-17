import {
	dark,
	registrationBtns,
	localStorageKey,
	hideBurgerMenu,
	hideModalDark,
	showModalDark,
	getLocalStorageUsers,
} from './export.js';

function registration() {
	const registration = document.querySelector('.registration');
	const cross = registration.querySelector('.registration .test__result_cross');
	const login = registration.querySelector('#registration__login');
	const password = registration.querySelector('#registration__password');
	const passwordRepeat = registration.querySelector(
		'#registration__password__repeat'
	);
	const button = registration.querySelector('.registration__button');

	let users;

	let loginValue = '';
	let passwordValue = '';
	let passwordRepeatValue = '';

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

		// Получаем данные о пользователях из localStorage
		users = getLocalStorageUsers();
		console.log('usersR: ', users);

		// Вызываем функцию вывода формы регистрации
		showRegistrationForm();
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

	// Функция проверки ввода логина пользователя
	function loginInputTest() {
		// Если логин короче 3-х символов,
		if (login.value.length < 3 || login.value.length > 8) {
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
			passwordRepeatValue = passwordRepeat.value;
			return passwordValue;
		}
	}

	// Функция сохранения данных пользователя в localStorage
	function saveUserData(event) {
		event.preventDefault();
		// Если все поля заполнены,
		if (
			loginValue !== '' &&
			passwordValue !== '' &&
			passwordRepeatValue !== ''
		) {
			// то обрабатываем введённые данные

			// Очищаем поля ввода
			clearForm();

			// Проверяем, есть ли в базе данных такой пользователь
			if (doesThisUserExist()) {
				console.log('Уже есть такой пользователь');
				// Если да, то выводим сообщение пользователю
				thisUserExistsMessage();
				// Иначе,
			} else {
				console.log(`Сохраняем пользователя ${loginValue}`);
				// Сохраняем пользователя в базу данных
				users.push({ login: loginValue, password: passwordValue });
				// Сохраняем базу данных в localStorage
				localStorage.setItem(localStorageKey, JSON.stringify(users));
				clearFormVariables();
				hideRegistrationForm();
			}
		} else {
			console.log('Ошибка заполнения полей');
			clearForm();
			register(event);
		}
		// Очищаем переменные, хранящие значение полей
		clearFormVariables();
	}

	// Функция проверки, есть ли данный пользователь в базе
	function doesThisUserExist() {
		if (users.length > 0) {
			return users.some((user) => user.login === loginValue);
		}
	}

	// Функция, выводящая сообщение о том, что такой пользователь уже есть в базе
	function thisUserExistsMessage() {
		button.parentNode.children[0].classList.remove('registration__hidden');
		button.parentNode.children[0].classList.add('registration__shown');
	}

	// Функция очистки формы
	function clearForm() {
		login.value = '';
		password.value = '';
		passwordRepeat.value = '';
	}

	// Функция очистки переменных формы
	function clearFormVariables() {
		loginValue = '';
		passwordValue = '';
		passwordRepeatValue = '';
	}

	// Функция скрытия сообщения о том, что пользователь уже существует
	function hideAlarmMessage() {
		button.parentNode.children[0].classList.remove('registration__shown');
		button.parentNode.children[0].classList.add('registration__hidden');
	}

	// Функция изменения расцветки символов в поле input в зависимости от их количества
	function colorfullInput(min, max, field) {
		// Если количество символов слишком мало или слишком велико,
		if (field.value.length < min || field.value.length > max) {
			// то их цвет красный (основной цвет сайта)
			// console.log('field.value.length: ', field.value.length);
			field.style.color = '#F15525';
			// иначе
		} else {
			// цвет символов зелёный
			field.style.color = 'green';
		}
	}

	// console.log('button.parentNode: ', button.parentNode.children[0]);

	// Слушатель на каждую ссылку регистрации
	registrationBtns.forEach((btn) =>
		btn.addEventListener('click', (event) => register(event))
	);

	// Слушатель на крестик закрытия окна регистрации
	cross.addEventListener('click', () => hideRegistrationForm());

	// Слушатель на потерю фокуса полем ввода login
	login.addEventListener('change', () => {
		loginInputTest();
		// console.log('loginValue: ', loginValue);
	});

	// Слушатель на получение фокуса полем ввода логина
	login.addEventListener('focus', () => hideAlarmMessage());

	// Слушатель ввода символов логина для цветовой индикации
	login.addEventListener('input', () => colorfullInput(3, 8, login));

	// Слушатель на поле ввода password
	password.addEventListener('change', () => {
		passwordInputTest();
		console.log('passwordValue: ', passwordValue);
	});

	// слушатель ввода символов пароля для цветовой индексации
	password.addEventListener('input', () => colorfullInput(5, 32, password));

	// Слушатель на поле ввода passwordRepeat
	passwordRepeat.addEventListener('change', () => {
		console.log(passwordRepeatInputTest());
		// console.log('passwordRepeatValue: ', passwordRepeatValue);
	});

	// Слушатель на кнопку отправки формы
	button.addEventListener('click', (event) => saveUserData(event));
}

export default registration;
