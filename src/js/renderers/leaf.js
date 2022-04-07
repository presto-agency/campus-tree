import Highway from '@dogstudio/highway';
import {toggleTooltip} from "../common/general/toggleTooltip";
import {copyToClipboard} from "../common/general/copyToClipboard";

class LeafRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to leaf');
		toggleTooltip();
		copyToClipboard();
	}
	onEnterCompleted() {
		console.log('enter completed to leaf');
	}
}

export default LeafRenderer;