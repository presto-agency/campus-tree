export const mobileTree = () => {
    let btns = document.querySelectorAll('.trigger-mob');
    let animationObj = document.querySelector('.sign-in');
    let addActive = () => {
        animationObj.classList.add('active');
    }
    let removeActive = () => {
        animationObj.classList.remove('active');
    }
    addActive();
    setTimeout(removeActive, 2500);
    btns.forEach(btn => {
        btn.onclick = () => {
            addActive();
            setTimeout(removeActive, 2500);
        }
    })
}