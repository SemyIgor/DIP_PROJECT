import { dark, burgerMenu } from './export.js';
function burger() {
	// Находим иконку бургера
	const headerBurger = document.querySelector('.header__burger');

	// Затемнённый фон модального окна импортируем из dark
	// const dark = document.querySelector('.dark');

	// Находим бургер-меню
	// const burgerMenu = document.querySelector('.burger__menu');

	// Находим крестик в модальном окне
	const burgerCross = document.querySelector('.burger__cross');

	// Навешиваем на иконку бургера событие
	headerBurger.addEventListener('click', (event) => burgerMenuOpen());

	// Навешиваем на крестик закрытия модального окна событие
	burgerCross.addEventListener('click', () => burgerMenuClose());

	function burgerMenuOpen() {
		// console.log('Clicked');
		showDarkBurger();
	}

	function showDarkBurger() {
		burgerMenu.classList.add('shown');
		burgerMenu.classList.remove('hidden');
		dark.classList.remove('dark__hidden');
		dark.classList.add('dark__shown');
		document.body.style.overflow = 'hidden';
	}

	function burgerMenuClose() {
		burgerMenu.classList.remove('shown');
		burgerMenu.classList.add('hidden');
		dark.classList.remove('dark__shown');
		dark.classList.add('dark__hidden');
		document.body.style.overflow = '';
	}
}

export default burger;
