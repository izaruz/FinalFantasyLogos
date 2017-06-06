// JavaScript Document

var menu = document.getElementById('burguer-menu');
var nav = document.getElementById('nav');

function toggleMenu(){
	nav.classList.toggle('active');	
	menu.classList.toggle('icon-close');
}

menu.addEventListener('touchstart', toggleMenu);
