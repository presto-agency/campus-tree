import Highway from '@dogstudio/highway';
import Tween from 'gsap';
import {transition} from "../constants/transitions";


class Fade extends Highway.Transition {
	out({ from, done }) {
		Tween.fromTo(from,
			{
				opacity: 1,
			},
			{
				opacity: 0,
				duration: transition.opacity.duration,
				ease: transition.opacity.ease,
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
				duration: transition.opacity.duration,
				opacity: 1,
				ease: transition.opacity.ease,
				onComplete: done,
			});
	}
}

export default Fade;