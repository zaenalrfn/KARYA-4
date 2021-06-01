// NAVBAR
var navbar = document.querySelector('.HB');
var slide = document.querySelector('nav ul')
navbar.onclick = function() {
	navbar.classList.toggle('active');
	slide.classList.toggle('slide');

}
// NAV SCROLL
window.addEventListener('scroll' , function() {
	var nv = document.querySelector('nav');
	var windowPosition = window.scrollY > 0;
	nv.classList.toggle('aktif',windowPosition);
})


// AOS
