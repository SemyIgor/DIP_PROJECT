import effectiveRender from './modules/effective.js';
import startTest from './modules/tests.js';

effectiveRender();
startTest();

const courses = [
	{
		courseName: 'Введение в программирование',
		price: 'Бесплатно',
		monthes: '0.5',
	},
	{
		courseName: 'Основы программирования на Python',
		price: '9 900',
		monthes: '1',
	},
	{
		courseName: 'Python, продвинутый уровень',
		price: '14 900',
		monthes: '2.5',
	},
	{
		courseName: 'Сети + фреймворк Flask',
		price: '14 900',
		monthes: '2.5',
	},
	{
		courseName: 'Базы данных',
		price: '14 900',
		monthes: '2',
	},
	{
		courseName: 'Фреймворк Django',
		price: '14 900',
		monthes: '2',
	},
	{
		courseName: 'Разработка «боевого» проекта',
		price: '9 900',
		monthes: '1.5',
	},
];

// Длина группы цифр в отформатированной цене
const groupLength = 3;

const tableBody = document.querySelector('.price__table tbody');

// Суммируем цены за курсы и форматируем результат
const totalPrice = numberToStringFormated(
	sumObjElementsOfArray(courses, 'price')
);

// Суммируем продолжительность обучения
const totalMonthes = sumObjElementsOfArray(courses, 'monthes');

// Выводим строки с данными по курсам
courses.forEach((course) => {
	renderCourse(course);
});

// Выводим итоговую строку таблицы
tableBody.insertAdjacentHTML(
	'afterend',
	`
   <tfoot>
      <tr>
         <th scope="row">Итого</th>
         <td>${totalPrice}</td>
         <td>${totalMonthes}</td>
      </tr>
   </tfoot>
`
);

// Получаем сумму элементов выбранного свойства объекта
// Здесь array - массив объектов,
// element - строка, содержащая имя суммируемого свойства объекта
// totalPrice - сумма указанного свойства всех элементов массива
function sumObjElementsOfArray(array, element) {
	let totalPrice = array.reduce(function (sum, item) {
		const price = parseFloat(item[element].replaceAll(' ', ``));
		if (price) return sum + price;
		else return sum;
	}, 0);
	return totalPrice;
}

// Выводим строки с данными по курсам
function renderCourse(course) {
	tableBody.insertAdjacentHTML(
		'beforeend',
		`
      <tr>
         <th scope="row">${course.courseName}</th>
         <td>${course.price}</td>
         <td>${course.monthes}</td>
      </tr>
`
	);
}

// Форматируем число, преобразовав в строку и разделив на группы по 3 цифры
function numberToStringFormated(number) {
	number = String(number);
	let stringNumber = '';
	while (number.length > 0) {
		stringNumber = number.slice(-groupLength) + ' ' + stringNumber;
		number = number.slice(0, -groupLength);
	}
	return stringNumber;
}
