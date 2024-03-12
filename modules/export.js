// Затемнённый фон модального окна
export const dark = document.querySelector('.dark');
export const burgerMenu = document.querySelector('.burger__menu');
export const registrationBtns = document.querySelectorAll('.registration__btn');

export function hideModalDark() {
	// closeTestWindows();
	dark.classList.add('dark__hidden');
	dark.classList.remove('dark__shown');
	document.body.style.overflow = '';
}

export function showModalDark() {
	dark.classList.remove('dark__hidden');
	dark.classList.add('dark__shown');
	document.body.style.overflow = 'hidden';
}
