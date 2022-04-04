import Highway from '@dogstudio/highway';
import {setLabelsPosition} from "../common/tree/setLabelsPosition";
import {setBoxHeight} from "../common/box/setBoxHeight";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";
import {leavesTabletCarousel} from "../common/general/leavesTabletCarousel";
import {initTabs} from "../common/general/initTabs";

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to home');
		leavesTabletCarousel();
		initTabs();
	}
	onEnterCompleted() {
		console.log('enter completed to home');
		setBoxHeight();
		setLabelsPosition();
		updatePaginationNumbers();
	}
}

export default HomeRenderer;