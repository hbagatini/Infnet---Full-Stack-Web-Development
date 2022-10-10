var loading = document.getElementsByClassName('loading-spinner');
var contents = document.getElementsByClassName('img-slick');

window.addEventListener('load', function () {
	loading.classList.add('d-none');
	loading.parentNode.classList.replace('vh-100', 'd-none');
	contents.classList.remove('d-none');
});
