import Highway from '@dogstudio/highway';

class WithoutScrollToTop extends Highway.Transition {
	out({ from, done }) {
		done();
	}
	in({ from, to, done }) {

		from.remove();
		setTimeout(() => done(), 200);
	}
}

export default WithoutScrollToTop;