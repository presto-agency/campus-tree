import Highway from '@dogstudio/highway';

class SignApprovalRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to sign-approval page');
    }
    onEnterCompleted() {
        console.log('enter completed to sign-approval page');

    }
}

export default SignApprovalRenderer;