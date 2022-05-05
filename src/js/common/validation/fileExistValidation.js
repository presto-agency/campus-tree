export const fileExistValidation = () => {
	const containers = document.querySelectorAll('.input-container-file');
	if (containers.length) {
		for (let i = 0; i < containers.length; i++) {
			let image = containers[i].querySelector('img');
			let fileInput = containers[i].querySelector('input[type="file"]');

			if (!!fileInput && !!image) {
				let imageSrc = image.getAttribute('src');
				!!imageSrc ? fileInput.removeAttribute('required') : null;
			}

		}
	}
};