import Tween from 'gsap';
import {scrollToBottomComments} from "./scrollToBottomComments";
import {leavesTabletCarousel} from "./leavesTabletCarousel";

export const initTabs = () => {
	const tabs = document.querySelectorAll('.tabs');
	if (!!tabs.length) {
		for (let i = 0; i < tabs.length; i++) {
			let tabsButtons = tabs[i].querySelectorAll('.tabs-item');
			for (let j = 0; j < tabsButtons.length; j++) {
				tabsButtons[j].addEventListener('click', () => {
					resetActiveClasses(tabsButtons);
					tabsButtons[j].classList.add('is-active');
					/*
					Get id content & segment
					 */
					let tabId = tabsButtons[j].dataset.tabId;
					let tabSegment = tabsButtons[j].dataset.tabSegment;
					/*
					Get tab content & segment
					 */
					let tabContent = document.querySelectorAll(`[data-tab-content="${tabId}"]`);
					let tabSegmentContent = document.querySelectorAll(`[data-tab-segment="${tabSegment}"][data-tab-content="${tabId}"]`);
					/*
					Switch tab content || segment
					 */
					hideContents(tabSegment);
					!!tabSegmentContent
						? Tween.set(tabSegmentContent, {
							display: 'block',
						})
						: Tween.set(tabContent, {
							display: 'block',
						});

					/*
					Scroll to bottom comments
					 */
					scrollToBottomComments();
					/*
					Init carousel
					 */
					leavesTabletCarousel();
				});
			}
		}
	}
};

const resetActiveClasses = (buttons) => {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('is-active');
	}
};

const hideContents = (tabSegment) => {
	let contents;
	if (!!tabSegment) {
		contents = document.querySelectorAll(`[data-tab-segment="${tabSegment}"][data-tab-content]`);
	} else {
		contents = document.querySelectorAll('[data-tab-content]');
	}
	for (let i = 0; i < contents.length; i++) {
		contents[i].style.display = 'none';
	}
}