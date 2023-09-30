//scrolling button
window.onload = function(){
	//window.scrollTo(x,y)
	let scrolled;
	let timer;
    const button = document.getElementById('fixedbut');

	button.addEventListener('click',() => {
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	})
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100; //100 - скорость прокрутки
			timer = setTimeout(scrollToTop, 10);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}


//en-rus buttons

const enButton = document.getElementById('en-button');
const rusButton = document.getElementById('ru-button')

enButton.addEventListener('click', () => {
    enButton.classList.add('header__eng_clicked');
    rusButton.classList.remove('header__rus_white')
})

rusButton.addEventListener('click', () => {
    rusButton.classList.remove('header__rus_white')
} )
