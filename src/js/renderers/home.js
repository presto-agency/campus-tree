import Highway from '@dogstudio/highway';

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to home');
	}
	onEnterCompleted() {
		console.log('enter completed to home');
	}
}

export default HomeRenderer;