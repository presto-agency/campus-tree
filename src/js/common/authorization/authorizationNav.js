import {moveLottieToStep} from "./moveLottieOnStep";

export const authorizationNav = () => {
	let elementsLink = document.querySelectorAll('.trigger-obj');
	elementsLink.forEach(link => link.addEventListener('click', function (e) {
		e.preventDefault();
		let attr = this.getAttribute('data-attr');
		const activeStep = document.querySelector('.steps-content.active');
		let nextStep = document.getElementById(attr);
		activeStep.classList.remove('active');
		nextStep.classList.add('active');
		moveLottieToStep(100);
	}))
};

