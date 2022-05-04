export const generateCalendarLink = () => {
	const link =  document.querySelector('#generate-calendar-link');
	if (!!link) {
		const titleElement = document.querySelector('[data-calendar-title]');
		const descriptionElement = document.querySelector('[data-calendar-description]');
		const dateStartElement = document.querySelector('[data-calendar-date]');
		const locationElement = document.querySelector('[data-calendar-location]');
		let eventTitle = 'Event';
		let eventDescription = 'Description';
		let eventStartDate = new Date();
		let eventEndDate = new Date();
		let eventLocation = '';

		if (!!titleElement) {
			eventTitle = transformText(titleElement.dataset.calendarTitle);
		}
		if (!!descriptionElement) {
			eventDescription = transformText(descriptionElement.dataset.calendarDescription);
		}
		if (!!locationElement) {
			eventLocation = transformText(locationElement.dataset.calendarLocation);
		}
		if (!!dateStartElement) {
			eventStartDate = transformDate(dateStartElement.dataset.calendarDate);
			eventEndDate = transformDate(dateStartElement.dataset.calendarDate, true);
		}

		const generatedLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDescription}&location=${eventLocation}&dates=${eventStartDate}%2F${eventEndDate}`;

		link.setAttribute('href', generatedLink);

	}
};

const transformDate = (d, end) => {
	const date = new Date(d);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = end ? date.getDate() + 1 : date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const milliseconds = date.getMilliseconds();

	return `${year}${transformZerosValue(month)}${transformZerosValue(day)}T${transformZerosValue(hours)}${transformZerosValue(minutes)}${transformZerosValue(milliseconds)}Z`;
};

const transformZerosValue = (value) => {
	return value <= 9 ? '0' + value : value;
}

const transformText = (text) => {
	return text.split(' ').join('+');
}