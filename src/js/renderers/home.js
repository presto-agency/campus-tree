import Highway from '@dogstudio/highway';
import {setLabelsPosition} from "../common/tree/setLabelsPosition";
import {setBoxHeight} from "../common/box/setBoxHeight";

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to home');
		setLabelsPosition();
		setBoxHeight();
	}
	onEnterCompleted() {
		console.log('enter completed to home');
	}
}

export default HomeRenderer;