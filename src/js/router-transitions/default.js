import Highway from '@dogstudio/highway';
import Tween from 'gsap';


class Default extends Highway.Transition {
	out({ from, done }) {
		Tween.fromTo(from,
			{
				opacity: 1,
			},
			{
				opacity: 0,
				duration: 0.2,
				ease: 'none',
				onComplete: done,
			});
	}
	in({ from, to, done }) {

		window.scrollTo( 0, 0 );

		from.remove();
		Tween.fromTo(to,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.2,
				ease: 'none',
				onComplete: done,
			});
	}
}

export default Default;