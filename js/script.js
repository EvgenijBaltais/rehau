document.addEventListener('DOMContentLoaded', () => {

	if (document.querySelector('.arrow-top')) {

		document.querySelector('.arrow-top').addEventListener('click', () => {

			window.scrollTo({ top: 0, behavior: 'smooth' });
		})
	}

	if (document.querySelector('.slider-block-button')) {
		document.querySelector('.slider-block-button').addEventListener('click', () => {
			window.scrollTo({ top: document.querySelector('.page-content').offsetTop, behavior: 'smooth' })
		})
	}
})