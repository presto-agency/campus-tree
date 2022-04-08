export const switchAlert = (status) => {
	const alert = document.querySelector('.alert');
	status ? alert.classList.add('is-active') : alert.classList.remove('is-active');
};