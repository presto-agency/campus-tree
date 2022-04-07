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

// (function showPassword() {
//     let eyePictures = document.querySelectorAll('.eye-password');
//     eyePictures.forEach(eye => {
//         eye.onclick = () => {
//             let x = eye.nextElementSibling;
//             if (x.type === "password") {
//                 x.type = "text";
//             } else {
//                 x.type = "password";
//             }
//         }
//     })
// }())
//     (function lottieTree() {
//         LottieInteractivity.create({
//             player: '#lottie-1',
//             mode:"scroll",
//             actions: [
//                 {
//                     visibility: [0.50, 1.0],
//                     type: "play"
//                 }
//             ]
//         });
// }())