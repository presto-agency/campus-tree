import Pristine from '../../libs/pristine.min';
import {moveRegistrationTo} from "../authorization/authorizationNav";
import {saveToLocalStorage} from "../../localStorage/saveToLocalStorage";

export const registrationStep3Validation = () => {
	const form = document.querySelector('#registration-step-2-form');
	if (!!form) {
		const formValid = new Pristine(form, {
			classTo: 'input-container',
			errorClass: 'has-error',
		});

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			if (formValid.validate()) {
				const inputs = form.querySelectorAll('[name]');
				const data = [];
				for (let i = 0; i < inputs.length; i++) {
					const { name, value } = inputs[i];
					let dataObject = { name, value };
					data.push(dataObject);
					saveToLocalStorage('registration-step-2', data);
				}
				moveRegistrationTo(3);
			}
		});
	}
};