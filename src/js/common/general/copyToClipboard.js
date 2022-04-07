export const copyToClipboard = () => {
	const btns = document.querySelectorAll('.copyToClipboard');
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', () => {
			navigator.clipboard.writeText(window.location.href);
		});
	}
};