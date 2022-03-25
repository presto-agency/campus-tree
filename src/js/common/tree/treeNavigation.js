import Tween, { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const treeNavigation = () => {

	if (document.querySelector('.tree') &&
		document.querySelectorAll('.tree .branch').length &&
		document.querySelectorAll('.tree .leaf').length) {
		/*
		Branches
		 */
		const branches = document.querySelectorAll('.tree .branch');
		const branchLink = document.querySelector('#branch-link');
		const branchLinkHref = branchLink.getAttribute('href');
		for (let i = 0; i < branches.length; i++) {
			branches[i].addEventListener('click', () => {
				const branchUrlParam = branches[i].getAttribute('data-url-param');
				if (!!branchUrlParam) {
					branchLink.setAttribute('href', `${branchLinkHref}?${branchUrlParam}`);
					branchLink.click();
				}
			});
		}

		/*
		Leaf
		 */
		const leaves = document.querySelectorAll('.tree .leaf');
		const leafLink = document.querySelector('#leaf-link');
		for (let i = 0; i < leaves.length; i++) {
			leaves[i].addEventListener('click', () => {
				let leafId = leaves[i].dataset.eventId;
				let eventDOM = document.querySelector(`.event[data-event-id="${leafId}"]`);
				clearActiveEvents();
				if (!!eventDOM) {
					Tween.to(document.querySelector('.leaves .scroll-wrap'), {
						scrollTo: eventDOM,
						duration: 0.4,
						ease: 'none',
						onComplete: () => {
							eventDOM.classList.add('is-active');
						}
					});
				} else {
					leafLink.click();
				}
			});
		}
	}
};

const clearActiveEvents = () => {
	const events = document.querySelectorAll('.leaves .event');
	for (let i = 0; i < events.length; i++) {
		events[i].classList.remove('is-active');
	}
}