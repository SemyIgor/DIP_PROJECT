import { dark, burgerMenu } from './export.js';
function scrolling() {
	// Якорные ссылки (точки скролла)
	const technolog = document.getElementById('technolog');
	const howTo = document.getElementById('how-to');
	const price = document.getElementById('price');
	const contacts = document.getElementById('contacts');
	const header = document.getElementById('header');

	// Кнопки навигации, включая бургер-меню в модальном окне
	const headerNavItems = document.querySelectorAll(
		'.header__nav_item, .burger__nav_item'
	);

	// Плавный скроллинг по кнопкам навигации
	headerNavItems.forEach((anchor) => {
		if (anchor.matches('.anchor_technolog')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
				burgerMenuClose();
				technologScroll();
			});
		} else if (anchor.matches('.anchor_how-to')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
				burgerMenuClose();
				howToScroll();
			});
		} else if (anchor.matches('.anchor_price')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
				burgerMenuClose();
				priceScroll();
			});
		} else if (anchor.matches('.anchor_contacts')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
				burgerMenuClose();
				contactsScroll();
			});
		}
	});

	// Кнопка лого
	const footerLogo = document.querySelector('.footer__logo');

	// Плавный скроллинг по кнопкае лого
	footerLogo.addEventListener('click', (event) => {
		event.preventDefault();
		headerScroll();
	});

	function technologScroll() {
		technolog.scrollIntoView({ behavior: 'smooth' });
	}

	function howToScroll() {
		howTo.scrollIntoView({ behavior: 'smooth' });
	}

	function priceScroll() {
		price.scrollIntoView({ behavior: 'smooth' });
	}

	function contactsScroll() {
		contacts.scrollIntoView({ behavior: 'smooth' });
	}

	function headerScroll() {
		header.scrollIntoView({ behavior: 'smooth' });
	}

	function burgerMenuClose() {
		burgerMenu.classList.remove('shown');
		burgerMenu.classList.add('hidden');
		dark.classList.remove('dark__shown');
		dark.classList.add('dark__hidden');
		document.body.style.overflow = '';
	}
}

export default scrolling;
