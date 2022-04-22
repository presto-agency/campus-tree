import Highway from '@dogstudio/highway';
import {setLabelsPosition} from "../common/tree/setLabelsPosition";
import {setBoxHeight} from "../common/box/setBoxHeight";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {leavesTabletCarousel} from "../common/general/leavesTabletCarousel";
import {initTabs} from "../common/general/initTabs";
import {hidePassword} from "../common/general/hidePassword";
import {initDatepicker} from "../common/datepicker/initDatepicker";
import {inputSearchTags} from "../common/authorization/inputSearchTags";

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to home');
		leavesTabletCarousel();
		initTabs();
		hidePassword();
	}
	onEnterCompleted() {
		console.log('enter completed to home');
		setBoxHeight();
		setLabelsPosition();
		updatePaginationNumbers();
		initDatepicker();
		inputSearchTags();
	}
}

export default HomeRenderer;