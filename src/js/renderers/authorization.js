import Highway from '@dogstudio/highway';
import {authorizationNav} from "../common/authorization/authorizationNav";
import {moveLottieOnStep, moveLottieToStep} from "../common/authorization/moveLottieOnStep";

class authorizationRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to authorization page');
        authorizationNav();
        moveLottieOnStep();
        moveLottieToStep(20);
    }
    onEnterCompleted() {
        console.log('enter completed to authorization page');
    }
}

export default authorizationRenderer;