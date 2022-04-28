import Pristine from "../../libs/pristine.min";

export const loginValidation = () => {
	const form = document.querySelector('#sign-in-form');

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