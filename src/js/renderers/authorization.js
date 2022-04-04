import Highway from '@dogstudio/highway';

class authorizationRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to authorization page');
    }
    onEnterCompleted() {
        console.log('enter completed to authorization page');
            (function showPassword() {
                let eyePictures = document.querySelectorAll('.eye-password');
                eyePictures.forEach(eye => {
                    eye.onclick = () => {
                        let x = eye.nextElementSibling;
                        if (x.type === "password") {
                            x.type = "text";
                        } else {
                            x.type = "password";
                        }
                    }
                })
            }())
    }
}

export default authorizationRenderer;