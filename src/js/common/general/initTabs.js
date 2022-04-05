import Tween from 'gsap';

export const initTabs = () => {
	const tabs = document.querySelectorAll('.tabs');
	if (!!tabs.length) {
		for (let i = 0; i < tabs.length; i++) {
			let tabsButtons = tabs[i].querySelectorAll('.tabs-item');
			for (let j = 0; j < tabsButtons.length; j++) {
				tabsButtons[j].addEventListener('click', () => {
					resetActiveClasses(tabsButtons);
					tabsButtons[j].classList.add('is-active');
					let tabId = tabsButtons[j].dataset.tabId;
					let tabContent = document.querySelectorAll(`[data-tab-content="${tabId}"]`);
					if (!!tabs && !!tabContent) {
						hideContents();
						for (let i = 0; i < tabContent.length; i++) {
							tabContent[i].style.display = 'block';
						}
					}
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

const hideContents = () => {
	const contents = document.querySelectorAll('[data-tab-content]');
	for (let i = 0; i < contents.length; i++) {
		contents[i].style.display = 'none';
	}
}