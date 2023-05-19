jQuery(document).ready(function ($) {
	// скролы к якорям	

	let $page = $('html, body');
	$('a[href*="#"]').click(function () {
		console.log('s');
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top - 110
	}, 500);
	history.pushState('data to be passed', 'Title of the page', $.attr(this, 'href'));
	history.replaceState('data to be passed', 'Title of the page', '.');
	return false;
	});
})