import Pristine from '../../libs/pristine.min';

export const registrationStep4Validation = () => {
	const form = document.querySelector('#registration-step-3-form');

	if (!!form) {
		const formValid = new Pristine(form, {
			classTo: 'input-container',
			errorClass: 'has-error',
		});

		form.addEventListener('submit', (e) => {
			if (!formValid.validate()) {
				e.preventDefault();
			}
		});
	}
};