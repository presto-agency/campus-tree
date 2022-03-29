import Highway from '@dogstudio/highway';

class EditorTextRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to editor-text page');
    }
    onEnterCompleted() {
        console.log('enter completed to editor-text page');
    }
}

export default EditorTextRenderer;