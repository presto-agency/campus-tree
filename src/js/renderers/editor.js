import Highway from '@dogstudio/highway';

class EditorRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to editor page');
    }
    onEnterCompleted() {
        console.log('enter completed to editor page');
    }
}

export default EditorRenderer;