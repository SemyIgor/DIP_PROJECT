// Затемнённый фон модального окна
export const dark = document.querySelector('.dark');
export const burgerMenu = document.querySelector('.burger__menu');
// export const registrationBtns = document.querySelectorAll('.registration__btn');
export const localStorageKey = 'schoolUsers';
// export const users = getLocalStorageUsers();

// Блок с картинкой двери выхода
export const headerLoginExit = document.querySelector('.header__login__exit');

// Логин авторизованного пользователя
export const headerLoginLog = document.querySelector('.header__login__log');

// Ссылки со словом "Регистрация"
export const registrationBtns = document.querySelectorAll('.registration__btn');

// Кнопки открытия окна авторизации (хедер и модалка)
export const headerLoginBtns = document.querySelectorAll(
	"[class*='__login_btn']"
);

// export let authorizedUserLogin = '';

export function getLocalStorageUsers() {
	return localStorage.getItem(localStorageKey)
		? JSON.parse(localStorage.getItem(localStorageKey))
		: [];
}

// Функция сокрытия серого окна
export function hideModalDark() {
	// Скрываем серое окно
	dark.classList.add('dark__hidden');
	dark.classList.remove('dark__shown');
	// Разблокируем скроллинг страницы
	document.body.style.overflow = '';
}

// Функция вывода серого окна
export function showModalDark() {
	// Выводим серое окно
	dark.classList.remove('dark__hidden');
	dark.classList.add('dark__shown');
	// Разблокируем скроллинг страницы
	document.body.style.overflow = 'hidden';
}

// Функция скрытия бургер-меню
export function hideBurgerMenu() {
	burgerMenu.classList.remove('shown');
	burgerMenu.classList.add('hidden');
}

// Функция мгновенного скрытия блока (универсальная)
export function universalHideBlock(block) {
	block.classList.add('authorization__hidden');
	block.classList.remove('authorization__shown');
}

// Функция мгновенного появления блока (универсальная)
export function universalShowBlock(block) {
	block.classList.remove('authorization__hidden');
	block.classList.add('authorization__shown');
}
