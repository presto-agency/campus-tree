import IMask from 'imask';

export const inputMask = () => {
	const inputs = document.querySelectorAll('.input-date-mask');
	if (inputs.length) {
		for (let i = 0; i < inputs.length; i++) {
			const dateMask = IMask(inputs[i], {
				mask: Date,
				min: new Date(1950, 0, 1),
				lazy: false,
			});
		}
	}
};