function scrolling() {
	// Якорные ссылки (точки скролла)
	const technolog = document.getElementById('technolog');
	const howTo = document.getElementById('how-to');
	const price = document.getElementById('price');
	const contacts = document.getElementById('contacts');
	const header = document.getElementById('header');

	// Кнопки навигации
	const headerNavItems = document.querySelectorAll('.header__nav_item');

	// Плавный скроллинг по кнопкам навигации
	headerNavItems.forEach((anchor) => {
		if (anchor.matches('.anchor_technolog')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
				technologScroll();
			});
		} else if (anchor.matches('.anchor_how-to')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
				howToScroll();
			});
		} else if (anchor.matches('.anchor_price')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
				priceScroll();
			});
		} else if (anchor.matches('.anchor_contacts')) {
			anchor.addEventListener('click', (event) => {
				event.preventDefault();
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
}

export default scrolling;
