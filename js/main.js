
//Load Particle JS
particlesJS.load('particles-js', 'data/particles.json', function() {});

if (document.readyState != 'loading') {
	console.log('yo');
	docReady();
} else {
	document.addEventListener('DOMContentLoaded', docReady);
	console.log('lll');
}




function docReady() {

	console.log('doc ready');

	// var scrollTo = function(element, to, duration) {
	// 	console.log('scrolling');
	// 	if (duration <= 0) return;
	// 	var difference = to - element.scrollTop;
	// 	var perTick = difference / duration * 10;
	//
	// 	setTimeout(function() {
	// 		element.scrollTop = element.scrollTop + perTick;
	// 		if (element.scrollTop === to) return;
	// 		scrollTo(element, to, duration - 10);
	// 	}, 10);
	// };
	//
	// var aboutLink = document.getElementById('aboutLink');
	// var codeLink = document.getElementById('codeLink');
	// var contactLink = document.getElementById('contactLink');
	// var aboutSection = document.getElementById('about');
	// var codeSection = document.getElementById('code');
	// var contactSection = document.getElementById('contact');
	//
	// aboutLink.addEventListener('click', scrollTo(aboutLink, aboutSection, 100));
	// codeLink.addEventListener('click', scrollTo(codeLink, codeSection, 100));
	// contactLink.addEventListener('click', scrollTo(contactLink, contactSection, 100));
	//
	// aboutLink.addEventListener('touch', scrollTo(aboutLink, aboutSection, 100));
	// codeLink.addEventListener('touch', scrollTo(codeLink, codeSection, 100));
	// contactLink.addEventListener('touch', scrollTo(contactLink, contactSection, 100));
};



