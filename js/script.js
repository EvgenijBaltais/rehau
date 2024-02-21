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

    // Меню

	if (document.querySelector('.menu-area-w')) {
	    document.querySelector('.menu-area-w').addEventListener('click', () => {

	        let target = event.target.parentElement

	        if (target.parentElement.querySelector('.menu-icon').classList.contains('open')) {

	            setTimeout(() => {
	                document.querySelector('.nav').style.opacity = 0
	                target.parentElement.querySelector('.menu-icon').classList.remove('open')
	            }, 0)

	            setTimeout(() => {
	                document.querySelector('.nav').removeAttribute('style')
	            }, 150)

				body_unlock()
	        }

	        else {

	            setTimeout(() => {
	                document.querySelector('.nav').style.display = 'block'
	                target.parentElement.querySelector('.menu-icon').classList.add('open')
	            }, 0)
	            
	            setTimeout(() => {
	                document.querySelector('.nav').style.opacity = 1
	            }, 10)

				body_lock()
	        }
	    });
	}

	function body_lock() {

		let body = document.body;
		if (!body.classList.contains('scroll-locked')) {
			let bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			body.classList.add('scroll-locked');
			body.style.top = "-" + bodyScrollTop + "px";
			body.setAttribute("data-popup-scrolltop", bodyScrollTop)
		}
	}
	
	function body_unlock() {
		let body = document.body;
		if (body.classList.contains('scroll-locked')) {
			let bodyScrollTop = document.body.getAttribute("data-popup-scrolltop");
			body.classList.remove('scroll-locked');
			body.style.top = "";
			body.removeAttribute("data-popup-scrolltop")
			window.scrollTo(0, bodyScrollTop)
		}
	}

})