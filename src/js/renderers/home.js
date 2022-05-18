import Highway from '@dogstudio/highway';
import {setLabelsPosition} from "../common/tree/setLabelsPosition";
import {setBoxHeight} from "../common/box/setBoxHeight";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {leavesTabletCarousel} from "../common/general/leavesTabletCarousel";
import {initTabs} from "../common/general/initTabs";
import {hidePassword} from "../common/general/hidePassword";
import {initDatepicker} from "../common/datepicker/initDatepicker";
import {inputSearchTags} from "../common/authorization/inputSearchTags";
import {inputMask} from "../common/general/inputMask";

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		leavesTabletCarousel();
		initTabs();
		hidePassword();
		personalTreeValidation();
	}
	onEnterCompleted() {
		setBoxHeight();
		setLabelsPosition();
		updatePaginationNumbers();
		initDatepicker();
		inputSearchTags();
		inputMask();
	}
}

export default HomeRenderer;