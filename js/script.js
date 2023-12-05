import { UI_ELEMENTS } from './ui-elements.js';

function updateDateTime() {

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();

	const currentNumber = new Date().getMonth();
	const monthName = UI_ELEMENTS.MONTH_LIST[currentNumber];
	const caseOfMonth = monthName.slice(0, monthName.length - 1) + 'я';

	const weekNumber = new Date().getDay();
	const weekName = UI_ELEMENTS.WEEK_LIST[weekNumber];

	const currentDayOfMonth = new Date().getDate();

	const currentHours = new Date().getHours();
	const currentMinutes = new Date().getMinutes();
	const currentSeconds = new Date().getSeconds();

	UI_ELEMENTS.FULL_YEAR.textContent = `На дворе ${currentYear} год`;

	UI_ELEMENTS.MONTH.textContent = `${currentMonth}й месяц, а именно ${monthName}`;

	UI_ELEMENTS.MONTH_DAY.textContent = `Значит сегодня ${currentDayOfMonth} день ${caseOfMonth}`;

	UI_ELEMENTS.WEEK_DAY.textContent = `${weekNumber}й день недели, а именно ${weekName}`;

	UI_ELEMENTS.TIME.textContent = `${currentHours} часов ${currentMinutes} минут ${currentSeconds} секунд`;

}

setInterval(updateDateTime, 1000);


