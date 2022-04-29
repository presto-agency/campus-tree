export const passwordValidation = () => {
	const forms = document.querySelectorAll('form');
	for (let i = 0; i < forms.length; i++) {
		const passInputs = forms[i].querySelectorAll('input[data-validate="password"]');
		const button = forms[i].querySelector('button');
		if (passInputs.length >= 2) {
			let pass1;
			let pass2;

			passInputs[0].addEventListener('keydown', (e) => {
				setTimeout(() => {
					pass1 = e.target.value;
					!!pass2 ? detect(pass1, pass2, passInputs[1].parentNode, button) : null;
				}, 100);
			});

			passInputs[1].addEventListener('keydown', (e) => {
				setTimeout(() => {
					pass2 = e.target.value;
					detect(pass1, pass2, passInputs[1].parentNode, button);
				}, 100);
			});
		}
	}
};

const detect = (pass1, pass2, parent, button) => {
	if (pass1 !== pass2) {
		parent.classList.add('has-error-password');
		!!button ? button.setAttribute('disabled', true) : null;
	} else {
		parent.classList.remove('has-error-password');
		!!button ? button.removeAttribute('disabled') : null;
	}
}