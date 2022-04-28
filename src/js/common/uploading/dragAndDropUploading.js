import {displayUploadImage} from "./inputFileUploading";

export const dragAndDropUploading = () => {
	const dropAreas = document.querySelectorAll('.box-banner-drop .input-container-file');
	for (let i = 0; i < dropAreas.length; i++) {

		const image = dropAreas[i].querySelector('img');

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			dropAreas[i].addEventListener(eventName, preventDefaults, false);
		});

		function preventDefaults (e) {
			e.preventDefault();
			e.stopPropagation();
		}

		dropAreas[i].addEventListener('drop', handleDrop, false);

		function handleDrop(e) {
			let dt = e.dataTransfer
			let files = dt.files
			handleFiles(files)
		}

		function handleFiles(files) {
			displayUploadImage(files, image);
		}

	}
};