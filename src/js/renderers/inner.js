import Highway from '@dogstudio/highway';

class InnerRenderer extends Highway.Renderer {
    onEnter() {
        console.log('enter to inner page');
    }
    onEnterCompleted() {
        console.log('enter completed to inner page');
        (function turnCross() {
            let items = document.querySelectorAll('.faq-list');
            items.forEach(item => {
                item.onclick = () => {
                    let activeBtn = document.querySelector('.faq-list.active')
                    item.classList.toggle('active')
                    if (activeBtn) {
                        activeBtn.classList.remove('active')
                    }
                }
            })
        }());
    }
}

export default InnerRenderer;