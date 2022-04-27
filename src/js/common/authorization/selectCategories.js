import {getDataFromLocalStorage} from "../../localStorage/getDataFromLocalStorage";
import {saveToLocalStorage} from "../../localStorage/saveToLocalStorage";

export const selectCategories = () => {
	const steps = document.querySelectorAll('.sign-in .steps-content');
	const localStep0 = getDataFromLocalStorage('registration-step-0');
	const localStep1 = getDataFromLocalStorage('registration-step-1');
	let arrayStep0 = !!localStep0 ? localStep0 : [];
	let arrayStep1 = !!localStep1 ? localStep1 : [];

	for (let i = 0; i < steps.length; i++) {
		const inputs = steps[i].querySelectorAll('.tree-checkboxes .input');
		if (inputs.length) {
			for (let j = 0; j < inputs.length; j++) {
				inputs[j].addEventListener('change', () => {
					const modal = document.querySelector(inputs[j].dataset.eventModalId);
					const modalList = modal.querySelector('.selected-list');
					const value = inputs[j].value;
					const thumb = inputs[j].dataset.eventThumb;
					const category = inputs[j].dataset.eventCategory;
					const inputId = inputs[j].getAttribute('id');
					const selectedLeaf = { value, thumb, category, id: inputId };
					if (inputs[j].checked) {
						switch (i) {
							case 0:
								!isExist(arrayStep0, selectedLeaf) ? arrayStep0.push(selectedLeaf) : null;
								break;
							case 1:
								!isExist(arrayStep1, selectedLeaf) ? arrayStep1.push(selectedLeaf) : null;
								break;
						}
					} else {
						switch (i) {
							case 0:
								arrayStep0 = removeLeaf(arrayStep0, selectedLeaf);
								break;
							case 1:
								arrayStep1 = removeLeaf(arrayStep1, selectedLeaf);
								break;
						}
					}
					saveToLocalStorage('registration-step-0', arrayStep0);
					saveToLocalStorage('registration-step-1', arrayStep1);
				});
			}
		}
	}
};

const isExist = (array, object) => {
	let filteredArray = array.filter(option => option.id === object.id);
	return filteredArray.length;
}

const removeLeaf = (array, object) => {
	return array.filter(option => option.id !== object.id);
}

export const getSelectedLeaves = () => {
	const localStep0 = getDataFromLocalStorage('registration-step-0');
	const localStep1 = getDataFromLocalStorage('registration-step-1');

	if (!!localStep0 || localStep0.length) {
		for (let i = 0; i < localStep0.length; i++) {
			let id = localStep0[i].id;
			!!document.getElementById(id) ? document.getElementById(id).checked = true : false;
		}
	}

	if (!!localStep1 || localStep1.length) {
		for (let i = 0; i < localStep1.length; i++) {
			let id = localStep1[i].id;
			!!document.getElementById(id) ? document.getElementById(id).checked = true : false;
		}
	}
};

export const getSelectedCategories = () => {
	const inputs = document.querySelectorAll('.tree-checkboxes .input:checked');
	if (inputs.length) {
		for (let i = 0; i < inputs.length; i++) {
			const modal = document.querySelector(inputs[i].dataset.eventModalId);
			const modalList = modal.querySelector('.selected-list');
			const value = inputs[i].value;
			const thumb = inputs[i].dataset.eventThumb;
			const category = inputs[i].dataset.eventCategory;
			const inputId = inputs[i].getAttribute('id');
			const template = `<li class="selected-link">
                            <div class="selected-link-club">
                              <div class="selected-link-img">
                                <img src="${thumb}" alt="${value}">
                              </div>
                              <div class="selected-link-name">
                                <div class="section-title">
                                  <h4 class="h-4">${value}</h4>
                                </div>
                                <p class="tag tag-clubs">${category}</p>
                              </div>
                            </div>
                            <label for="${inputId}" class="selected-link-remove">
                              <div class="link color-alumni-hover">
																<span class="link-icon">
																	<svg class="svg svg__24 color-alumni">
																		<use xlink:href="../images/sprite/sprite.svg#remove-circle"></use>
																	</svg>
																</span>
																<span class="link-title">Delete from selected</span>
															</div>
                            </label>
                          </li>`;

			modalList.insertAdjacentHTML('beforeend', template);
		}
	}
};