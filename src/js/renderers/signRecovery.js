import Highway from '@dogstudio/highway';

class SignRecoveryRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to sign-recovery page');
    }
    onEnterCompleted() {
        console.log('enter completed to sign-recovery page');
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

export default SignRecoveryRenderer;