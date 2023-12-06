import { UI_ELEMENTS } from './ui-elements.js';

function updateDateTime() {

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;

	const currentNumber = new Date().getMonth();
	const monthName = UI_ELEMENTS.MONTH_LIST[currentNumber];
	const MARCH = 'Март';
	const AUGUST = 'Август';

	function getCorrectEnding(arr) {
		let result = '';
		for (const elem of arr) {
			if (elem !== MARCH && elem !== AUGUST) {
				result = elem.slice(0, elem.length - 1) + 'я';
			} else {
				result = elem + 'а';
			}
		}
		return result;
	}
	const month = getCorrectEnding(UI_ELEMENTS.MONTH_LIST)


	const weekNumber = new Date().getDay();
	const weekName = UI_ELEMENTS.WEEK_LIST[weekNumber];

	const currentDayOfMonth = new Date().getDate();

	const currentHours = new Date().getHours();
	const currentMinutes = new Date().getMinutes();
	const currentSeconds = new Date().getSeconds();

	UI_ELEMENTS.FULL_YEAR.textContent = `На дворе ${currentYear} год`;

	UI_ELEMENTS.MONTH.textContent = `${currentMonth}й месяц, а именно ${monthName}`;

	UI_ELEMENTS.MONTH_DAY.textContent = `Значит сегодня ${currentDayOfMonth}й день ${month}`;

	UI_ELEMENTS.WEEK_DAY.textContent = `${weekNumber}й день недели, а именно ${weekName}`;

	UI_ELEMENTS.TIME.textContent = `${currentHours} часов ${currentMinutes} минут ${currentSeconds} секунд`;

}

setInterval(updateDateTime, 1000);


