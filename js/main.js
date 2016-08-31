
//Load Particle JS
// particlesJS.load('particles-js', 'data/particles.json', function() {});

if (document.readyState != 'loading') {
	docReady();
} else {
	document.addEventListener('DOMContentLoaded', docReady);
}

function scrollTo(element, to, duration) {

	console.log(to);
	var codeSectionScrollTop = to.clientTop;
	console.log('codsecscroltop ' + codeSectionScrollTop);






	// to.scrollTop = 100;
	// console.log('scrolling');
	// if (duration <= 0) return;
	// var difference = to.scrollTop - element.scrollTop;
	// var perTick = difference / duration * 10;
	//
	// console.log('to scrolltop: ' + to.scrollTop);
	// console.log('elem scroll top: ' + element.scrollTop);
	// console.log('diff: ' + difference);
	// console.log('perTick: ' + perTick);
	//
	// setTimeout(function() {
	// 	element.scrollTop = element.scrollTop + perTick;
	// 	if (element.scrollTop === to) return;
	// 	scrollTo(element, to, duration - 10);
	// }, 10);
};

function docReady() {
	var aboutLink = document.getElementById('aboutLink');
	var codeLink = document.getElementById('codeLink');
	var contactLink = document.getElementById('contactLink');
	var aboutSection = document.getElementById('about');
	var codeSection = document.getElementById('code');
	var contactSection = document.getElementById('contact');

	aboutLink.addEventListener('click', function(){scrollTo(aboutLink, aboutSection, 100)}, false);
	codeLink.addEventListener('click', function(){scrollTo(codeLink, codeSection, 100)});
	contactLink.addEventListener('click', function(){scrollTo(contactLink, contactSection, 100)});

	aboutLink.addEventListener('touch', function(){scrollTo(aboutLink, aboutSection, 100)});
	codeLink.addEventListener('touch', function(){scrollTo(codeLink, codeSection, 100)});
	contactLink.addEventListener('touch', function(){scrollTo(contactLink, contactSection, 100)});
};





