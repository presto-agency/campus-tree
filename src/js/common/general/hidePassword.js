export const hidePassword = () => {
	const passwords = document.querySelectorAll('.password-mask');
	for (let i = 0; i < passwords.length; i++) {
		passwords[i].innerHTML = '************';
	}
};