import Tween, { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {leavesCarousel} from "../general/leavesTabletCarousel";

gsap.registerPlugin(ScrollToPlugin);

export const treeNavigation = () => {

	if (document.querySelector('.tree') &&
		document.querySelectorAll('.tree .branch').length &&
		document.querySelectorAll('.tree .leaf').length) {
		/*
		Branches
		 */
		const branches = document.querySelectorAll('.tree .branch');
		// const branchLink = document.querySelector('#branch-link');
		if (!!branches.length) {
			// const branchLinkHref = branchLink.getAttribute('href');
			for (let i = 0; i < branches.length; i++) {
				branches[i].addEventListener('click', () => {
					// const branchUrlParam = branches[i].getAttribute('data-url-param');
					const branchId = branches[i].getAttribute('id');
					const branchLabelLink = document.querySelector(`[data-branch-id="${branchId}"]`);
					console.log(branchLabelLink);
					if (!!branchLabelLink) {
						let href = branchLabelLink.getAttribute('href');
						branchLabelLink.setAttribute('href', `${href}`);
						// document.querySelector('#branch-link').click();
						branchLabelLink.click();
					}
				});
			}
		}

		/*
		Leaf
		 */
		const leaves = document.querySelectorAll('.tree .leaf-scroll');
		for (let i = 0; i < leaves.length; i++) {
			leaves[i].addEventListener('click', () => {
				let leafId = leaves[i].dataset.eventId;
				let eventDOM = document.querySelector(`.event[data-event-id="${leafId}"]`);
				clearActiveEvents();
				if (!!eventDOM && window.innerWidth >= 1200) {
					Tween.to(document.querySelector('.leaves .scroll-wrap.splide__track'), {
						scrollTo: eventDOM,
						duration: 0.4,
						ease: 'none',
						onComplete: () => {
							eventDOM.classList.add('is-active');
						}
					});
				} else if (!!eventDOM) {
					!!leavesCarousel ? leavesCarousel.go(i) : null;
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