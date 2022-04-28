import Pristine from '../../libs/pristine.min';

export const personalTreeValidation = () => {
	const personalTreeForm = document.querySelector('#personal-tree-form');

	if (!!personalTreeForm) {
		const personalTreeValid = new Pristine(personalTreeForm, {
			classTo: 'input-container',
			errorClass: 'has-error',
		});

		personalTreeForm.addEventListener('submit', (e) => {
			if (!personalTreeValid.validate()) {
				e.preventDefault();
			}
		});
	}
};