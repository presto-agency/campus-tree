export const initAvatarFirstLastName = () => {
	const thumbs = document.querySelectorAll('.person-thumb');
	for (let i = 0; i < thumbs.length; i++) {
		let image = thumbs[i].querySelector('img');
		const firstLastName = thumbs[i].dataset.thumbTitle;
		if (!!firstLastName) {
			const matches = firstLastName.match(/\b(\w)/g);
			const maskLabel = matches.join('');
			if (!image || !image.getAttribute('src')) {
				let mask = document.createElement('div');
				mask.classList.add('person-thumb-mask');
				mask.innerHTML = maskLabel;
				thumbs[i].appendChild(mask);
			}
		}
		if (!!image && !image.getAttribute('src')) {
			image.style.display = 'none';
		}
	}
};