import Highway from '@dogstudio/highway';
import {toggleTooltip} from "../common/general/toggleTooltip";
import {copyToClipboard} from "../common/general/copyToClipboard";
import {initTabs} from "../common/general/initTabs";
import {initAvatarFirstLastName} from "../common/general/initAvatarFirstLastName";
import {checkboxAlertToggle} from "../common/alert/checkboxAlertToggle";
import {scrollToBottomComments} from "../common/general/scrollToBottomComments";
import {loadImages} from "../common/general/loadImages";
import {initDatepicker} from "../common/datepicker/initDatepicker";
import {initTimepicker} from "../common/datepicker/initTimepicker";
import {inputSearchTags} from "../common/authorization/inputSearchTags";
import {resetFilters} from "../common/general/resetFilters";
import {leafCreationValidation} from "../common/validation/leafCreationValidation";

class LeafRenderer extends Highway.Renderer {
	onEnter() {
		toggleTooltip();
		copyToClipboard();
		initTabs();
		initAvatarFirstLastName();
		checkboxAlertToggle();
		inputSearchTags();
		resetFilters();
		leafCreationValidation();
	}
	onEnterCompleted() {
		scrollToBottomComments();
		loadImages();
		initDatepicker();
		initTimepicker();
	}
}

export default LeafRenderer;