import Highway from '@dogstudio/highway';
// import bodymovin from 'lottie-web';
// import initDatepicker from 'initDatepicker';
// import LottieInteractivity from '@lottiefiles/lottie-interactivity';

class authorizationRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to authorization page');
        // initDatepicker();
    }
    onEnterCompleted() {
        console.log('enter completed to authorization page');
    }
}

export default authorizationRenderer;