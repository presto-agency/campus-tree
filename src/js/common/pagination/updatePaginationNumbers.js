export const updatePaginationNumbers = () => {
	const pagination = document.querySelector('.pagination');
	if (!!pagination) {
		const url = new URL(window.location);
		const currentPageNumber = parseInt(url.searchParams.get('page'));
		const paginationListNumbers = document.querySelector('.pagination-list-numbers');
		/*
		Set and append numbers
		 */
		const totalItemCount = parseInt(pagination.dataset.totalCount);
		const visibleItemsCount = parseInt(pagination.dataset.visibleCount);
		const paginationNumbersCount = Math.ceil(totalItemCount / visibleItemsCount);
		const paginationArray = paginationFunc(currentPageNumber, paginationNumbersCount, 6);
		for (let i = 0; i < paginationArray.length; i++) {
			let link = document.createElement('a');
			link.setAttribute('class', 'pagination-list-item pagination-link');
			link.setAttribute('data-transition', 'pagination');
			link.setAttribute('data-page', `${i+1}`);
			typeof paginationArray[i] === 'number' ? link.setAttribute('href', generateURL(paginationArray[i])) : null;
			link.innerHTML = `${paginationArray[i]}`;
			paginationListNumbers.appendChild(link);
		}
		/*
		Detect numbers click
		 */
		const links = document.querySelectorAll('.pagination-link');
		const linkDefault = document.querySelector('#pagination-link');
		if(!!links.length && !!linkDefault) {
			for (let i = 0; i < links.length; i++) {
				links[i].addEventListener('click', (e) => {
					e.preventDefault();
					let href = links[i].getAttribute('href');
					linkDefault.setAttribute('href', href);
					linkDefault.click();
				});
			}
		}

		/*
		Arrows
		 */
		const paginationArrows = document.querySelectorAll('.pagination-arrow');
		if (!currentPageNumber) {
			paginationArrows[0].setAttribute('disabled', 'true');
			paginationArrows[1].setAttribute('href', generateURL(2));
		} else {
			paginationArrows[0]
				.setAttribute('href', !currentPageNumber || currentPageNumber === 1
					? generateURL(1)
					: generateURL(currentPageNumber - 1));
			paginationArrows[1]
				.setAttribute('href', !currentPageNumber || currentPageNumber === paginationArray.length
					? generateURL(paginationArray.length)
					: generateURL(currentPageNumber + 1));
		}

		/*
		Remove active class from all links
		 */
		resetActiveClass(pagination);
		/*
		Add active class to link of current page, or to first link
		 */
		if (!!currentPageNumber) {
			let activeLink = pagination.querySelector(`.pagination-list-item[data-page="${currentPageNumber}"]`);
			if (!!activeLink) {
				activeLink.classList.add('is-active');
			}
		} else {
			const firstLink = pagination.querySelector(`.pagination-list-item[data-page="1"]`);
			!!firstLink ? firstLink.classList.add('is-active') : null;
		}
	}
}

const resetActiveClass = (pagination) => {
	const links = pagination.querySelectorAll('.pagination-list-item');
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove('is-active');
	}
}

const generateURL = (pageNumber) => {
	const search = window.location.search;
	if (!!search) {
		const searchArray = search.split('&');
		let params = '';
		for (let i = 0; i < searchArray.length; i++) {
			let searchString = searchArray[i].replace('?','');
			let searchValue = searchString.substring(searchString.indexOf('=') + 1);
			let searchLabel = searchString.substring(0, searchString.indexOf('='));
			if (searchLabel !== 'page') {
				params += `&${searchLabel}=${searchValue}`;
			}
		}
		return `?page=${pageNumber}${params}`;
	}
	return `?page=${pageNumber}`;
}

function getRange(start, end) {
	return Array(end - start + 1).fill().map((v,i) => i + start);
}

function paginationFunc(current, length, delta = 4) {
	const range = {
		start: Math.round(current - delta / 2),
		end: Math.round(current + delta / 2)
	};

	if(range.start - 1 === 1 || range.end + 1 === length) {
		range.start += 1;
		range.end += 1;
	}

	let pages = current > delta ? getRange(
		Math.min(range.start, length - delta),
		Math.min(range.end, length)
	) : getRange(1, Math.min(length, delta + 1));

	const withDots = (value, pair) => pages.length + 1 !== length? pair : [value];

	if (pages[0] !== 1) {
		pages = withDots(1, [1, '...']).concat(pages);
	}

	if (pages[pages.length - 1] < length) {
		pages = pages.concat(withDots(length, ['...', length]));
	}

	return pages;
}