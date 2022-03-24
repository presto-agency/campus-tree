import Highway from '@dogstudio/highway';
import {setLabelsPosition} from "../common/tree/setLabelsPosition";
import {setBoxHeight} from "../common/box/setBoxHeight";
import {updatePaginationNumbers} from "../common/pagination/updatePaginationNumbers";

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to home');
	}
	onEnterCompleted() {
		console.log('enter completed to home');
		setBoxHeight();
		setLabelsPosition();
		updatePaginationNumbers();
	}
}

export default HomeRenderer;