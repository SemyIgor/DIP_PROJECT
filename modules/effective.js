function effectiveRender() {
	const effectiveCards = [
		{
			// img00
			url: './img/effective/effective_img-00.svg',
			alt: 'effective_img-00',
			header: 'Огромное количество практики',
			text: 'Более 500 самостоятельных заданий и 20 полноценных больших проектов',
		},
		{
			// img01
			url: './img/effective/effective_img-01.svg',
			alt: 'effective_img-01',
			header: 'Современные методики обучения',
			text: 'Спиральное обучение: погружаемся в материал постепенно, виток за витком',
		},
		{
			// img02
			url: './img/effective/effective_img-02.svg',
			alt: 'effective_img-02',
			header: 'Простое и понятное изложение',
			text: 'Вместо заумных<br> терминов – примеры из реального мира',
		},
		{
			// img03
			url: './img/effective/effective_img-03.svg',
			alt: 'effective_img-03',
			header: 'Гибкий график <br> занятий',
			text: 'Учитесь в любое время в удобном для вас темпе',
		},
		{
			// img04
			url: './img/effective/effective_img-04.svg',
			alt: 'effective_img-04',
			header: 'Прямая связь с опытными программистами',
			text: 'Задавайте вопросы и отправляйте свой код на проверку',
		},
		{
			// img05
			url: './img/effective/effective_img-05.svg',
			alt: 'effective_img-05',
			header: 'Оплата небольшими частями',
			text: 'Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу',
		},
		{
			// img06
			url: './img/effective/effective_img-06.svg',
			alt: 'effective_img-06',
			header: 'Быстрый и легкий возврат',
			text: 'Если передумаете учиться – вернем деньги за 3 рабочих дня',
		},
	];

	const effectiveItems = document.querySelector('.effective__items');

	effectiveItems.innerHTML = ``;

	effectiveCards.forEach((card) =>
		effectiveItems.insertAdjacentHTML(
			'beforeend',
			`
      <div class="effective__item">
         <img src=${card.url} alt=${card.alt} class="effective__item_img">
         <h3 class="effective__item_head">${card.header}</h3>
         <p class="effective__item_text">${card.text}</p>
      </div>
   `
		)
	);
}

export default effectiveRender;
