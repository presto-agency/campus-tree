export const showPassword = () => {
    let eyePictures = document.querySelectorAll('.__click-trigger');
    eyePictures.forEach(eye => {
        eye.onclick = () => {
            let x = eye.previousElementSibling;
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
    })
};