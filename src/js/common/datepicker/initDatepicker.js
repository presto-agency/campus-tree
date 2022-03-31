import { Datepicker } from 'vanillajs-datepicker';

export const initDatepicker = () => {
	const inputs = document.querySelectorAll('.input-datepicker');
	for (let i = 0; i < inputs.length; i++) {
		const datepicker = new Datepicker(inputs[i], {
			format: 'dd/mm/yyyy',
			autohide: true,
		});
	}
};