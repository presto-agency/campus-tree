import Highway from '@dogstudio/highway';

class SignInRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to sign-in page');
    }
    onEnterCompleted() {
        console.log('enter completed to sign-in page');
    }
}

export default SignInRenderer;