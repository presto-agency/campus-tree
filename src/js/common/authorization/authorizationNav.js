import {moveLottieToStep} from "./moveLottieOnStep";
import {setLabelsPosition} from "../tree/setLabelsPosition";

export const authorizationNav = () => {
	let elementsLink = document.querySelectorAll('.trigger-obj');
	elementsLink.forEach(link => link.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector('.sign-in').scrollTo({ top: 0, behavior: 'smooth' });
		let attr = this.getAttribute('data-register-go');
		let reverse = this.getAttribute('data-register-reverse');
		if (!!attr) {
			moveRegistrationTo(attr, reverse);
		}
	}));
};

export const moveRegistrationTo = (step, reverse) => {
	const activeStep = document.querySelector('.steps-content.active');
	let nextStep = document.querySelector(`[data-register-step="${step}"]`);
	!!activeStep ? activeStep.classList.remove('active') : null;
	!!nextStep ? nextStep.classList.add('active') : null;
	moveLottieToStep(parseInt(step), !!reverse);
	setLabelsPosition();
}