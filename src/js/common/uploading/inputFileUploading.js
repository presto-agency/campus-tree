export const inputFileUploading = () => {
	const fileInputs = document.querySelectorAll('input[type="file"]');
	for (let i = 0; i < fileInputs.length; i++) {
		const image = fileInputs[i].parentNode.querySelector('img');
		fileInputs[i].onchange = (e) => {
			let tgt = e.target || window.event.srcElement;
			let files = tgt.files;
			console.log(files);

			// FileReader support
			displayUploadImage(files, image);
		}
	}
};

export const displayUploadImage = (files, image) => {
	if (FileReader && files && files.length) {
		let fr = new FileReader();
		fr.onload = () => {
			if (!!image) {
				image.src = fr.result;
				image.style.backgroundColor = '#FFFFFF';
				image.style.display = 'block';
			}
		}
		fr.readAsDataURL(files[0]);
	}
};