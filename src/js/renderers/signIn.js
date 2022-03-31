import Highway from '@dogstudio/highway';

class SignInRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to sign-in page');
    }
    onEnterCompleted() {
        console.log('enter completed to sign-in page');
            // (function showPassword() {
                // let eyePictures = document.querySelectorAll('.sign-input');
                // console.log(eyePictures)
                // eyePictures.forEach(eye => {
                //     eye.onclick = () => {
                //         let x = document.getElementById("sign-input");
                //         if (x.type === "password") {
                //             x.type = "text";
                //         } else {
                //             x.type = "password";
                //         }
                //     }
                // })
            // }())
    }
}

export default SignInRenderer;