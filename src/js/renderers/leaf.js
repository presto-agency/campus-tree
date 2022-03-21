import Highway from '@dogstudio/highway';

class LeafRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to leaf');
	}
	onEnterCompleted() {
		console.log('enter completed to leaf');
	}
}

export default LeafRenderer;