import Pristine from '../../libs/pristine.min';

export const leafCreationValidation = () => {
	const leafCreationForm = document.querySelector('#leaf-creation-form');

	if (!!leafCreationForm) {
		const leafCreationValid = new Pristine(leafCreationForm, {
			classTo: 'input-container',
			errorClass: 'has-error',
		});

		leafCreationForm.addEventListener('submit', (e) => {
			if (!leafCreationValid.validate()) {
				e.preventDefault();
			}
		});
	}
};