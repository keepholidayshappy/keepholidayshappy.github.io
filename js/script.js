
$( document ).ready(function() {

	$("#template-1").on( "click", function() {
		$('.send-proposal').attr('href','http://google.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').text('Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.');
	});
	$("#template-2").on( "click", function() {
		$('.send-proposal').attr('href','http://mashable.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').text('Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.');
	});
	$("#template-3").on( "click", function() {
		$('.send-proposal').attr('href','http://producthunt.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').text('Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.');

	});
	$("#template-4").on( "click", function() {
		$('.send-proposal').attr('href','http://sidebar.io');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.');
	});
	$("#template-5").on( "click", function() {
		$('.send-proposal').attr('href','http://facebook.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').text('Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.');
	});
});