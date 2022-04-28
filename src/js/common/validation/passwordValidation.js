export const passwordValidation = () => {
	const forms = document.querySelectorAll('form');
	for (let i = 0; i < forms.length; i++) {
		const passInputs = forms[i].querySelectorAll('input[data-validate="password"]');
		if (passInputs.length >= 2) {
			let pass1;
			let pass2;

			passInputs[0].addEventListener('change', (e) => {
				pass1 = e.target.value;
			});

			passInputs[1].addEventListener('change', (e) => {
				pass2 = e.target.value;
			});
		}
	}
};

const isDifferent = (pass1, pass2) => {
	return  pass1 !== pass2;
}