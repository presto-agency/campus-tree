import lottie from 'lottie-web';

let tree;
const iframes = [[0,50],[50,110],[110,170],[170,216],[216]];
const iframesReverse = [[110,50],[170,110],[216,170],[216]];

export const initRegistrationLottie = () =>{
	if (!!document.querySelector('#register-movie')) {
		tree = lottie.loadAnimation({
			container: document.querySelector('#register-movie'),
			render: 'canvas',
			autoplay: true,
			loop: false,
			// path: 'lottie/tree.json',
			path: '//campustree.live/wp-content/themes/campustree/lottie/tree.json',
			initialSegment: iframes[0],
			rendererSettings: {
				progressiveLoad: true,
				hideOnTransparent: true
			},
		});
	}
};

export const moveLottieToStep = (step, reverse) => {
	reverse
		? tree.playSegments(iframesReverse[step], true)
		: tree.playSegments(iframes[step], true);
};
