// JavaScript Document

var menu = document.getElementById('burguer-menu');
var nav = document.getElementById('nav');

menu.addEventListener('touchstart', function(){
	nav.classList.toggle('active')				  
});