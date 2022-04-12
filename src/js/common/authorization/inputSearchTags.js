export const inputSearchTags = () =>{
    const input = document.querySelector('#objects');
    const suggestions = document.querySelector('.input-tags-suggestions ul');
    const objects = [];

    let clubs = document.querySelectorAll('.input-tags-suggestions>ul>li');
    clubs.forEach(el => {
        objects.push(el.innerHTML)
    })

    suggestions.innerHTML = '';

    function search(str) {
        let results = [];
        const val = str.toLowerCase();

        for (let i = 0; i < objects.length; i++) {
            if (objects[i].toLowerCase().indexOf(val) > -1) {
                results.push(objects[i]);
            }
        }

        return results;
    }

    function searchHandler(e) {
        const inputVal = e.currentTarget.value;
        let results = [];
        if (inputVal.length > 0) {
            results = search(inputVal);
        }
        showSuggestions(results, inputVal);
    }

    function showSuggestions(results, inputVal) {

        suggestions.innerHTML = '';

        if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                let item = results[i];
                const match = item.match(new RegExp(inputVal, 'i'));
                item = item.replace(match[0], match[0]);
                suggestions.innerHTML += `<li>${item}</li>`;
            }
            suggestions.classList.add('has-suggestions');
        } else {
            results = [];
            suggestions.innerHTML = '';
            suggestions.classList.remove('has-suggestions');
        }
    }

    function useSuggestion(e) {
        let newEl = document.createElement('li');
        let result = document.querySelector('.input-tags-results');
        newEl.innerHTML =  `<span></span>${e.target.innerText}`;
        result.appendChild(newEl);
        suggestions.innerHTML = '';
        suggestions.classList.remove('has-suggestions');
        input.value = '';
        removeTag();
    }

    function removeTag() {
        let existTags = document.querySelectorAll('.input-tags-results>li>span');
        if (existTags.length > 0){
            for (let existTag of existTags){
                existTag.onclick = () => {
                    existTag.parentNode.remove()
                }
            }
        }
    }

    input.addEventListener('keyup', searchHandler);
    suggestions.addEventListener('click', useSuggestion);

};