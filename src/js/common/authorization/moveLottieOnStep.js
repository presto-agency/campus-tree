import lottie from 'lottie-web';

let tree;
let step = 0;

export const moveLottieOnStep = () =>{
	tree = lottie.loadAnimation({
		container: document.querySelector('#register-movie'),
		render: 'svg',
		autoplay: false,
		loop: false,
		path: 'lottie/tree.json',
		rendererSettings: {
			progressiveLoad: true,
			hideOnTransparent: true
		}
	})
};

export const moveLottieToStep = () => {
	step += 30;
	tree.goToAndStop(step, true);
};
