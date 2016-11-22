
$( document ).ready(function() {

	$("#template-1").on( "click", function() {
		$('.send-proposal').attr('href','http://mashable.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html('I love you so listen, <br />Listen very carefully, <br />Keep your shit together, <br />For the sake of our family. <br /><br />The elections are over, <br />We didn’t see eye to eye. <br />So it’s better if we focus <br />On turkey and pie. <br /><br />If only for a day, <br />Let’s hold our tongues near, <br />Lest some of us stop talking <br />Until the next election year. <br /><br />Watch your mouth and hold your drinks, <br />No need for World War 3, <br />What I’m trying to say is, please, <br />DON’T TALK ABOUT POLITICS AROUND ME.');
	});
	$("#template-2").on( "click", function() {
		$('.send-proposal').attr('href','http://google.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html("In this season of gratitude (and politics), <br /> Let us all agree:<br /><br /> I love you all dearly, <br /> But indulge me one thing <br /> To our holiday celebrations <br /> Do not “your politics” bring. <br /><br /> No Trumping over Turkey, <br /> Let’s Baruch and not Barack. <br /> No matter the yearn, <br /> Resist the Bern, <br /> And keep your feelings on lock. <br /><br /> Keep the Clintons out of Christmas, <br /> As we decorate the tree <br /> No elephants at tables, <br /> No donkeys outside stables, <br /> And a joyous occasion this will still be. <br />");
	});
	$("#template-3").on( "click", function() {
		$('.send-proposal').attr('href','http://producthunt.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html('Over the course of the past two years, America has been ripped in two by a raucous political season, which culminated in the most insanely toxic and heated environment in a very long time. So, this Thanksgiving, I think we should wipe the slate clean -- just like Hillary deleted her emails -- because it would be “WRONG” or “NOT NICE!” to quote the President-Elect, to generalize about each other! <br /><br /> There’s so many other things going on in each others’ and our own lives, let’s just talk about those things and skip the political banter this Turkey Day!');
	});
	$("#template-4").on( "click", function() {
		$('.send-proposal').attr('href','http://sidebar.io');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').html('Our cranberry sauce is red <br /> And our fat turkey is brown <br /> No politics at dinner, <br /> I want all smiles, no frowns<br /><br /> The pilgrims and the indians <br/ > had a nice holiday meal <br /> don’t talk trump at my table <br /> Or shit is going to get real');
	});
	$("#template-5").on( "click", function() {
		$('.send-proposal').attr('href','http://facebook.com');
		$('.template-option').removeClass('active');
		$(this).addClass('active');
		$('.proposal-text').text('Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.');
	});


	$('.template-options-select').on("change", function () {
    	var templateNum=$(this).val();
    	console.log(templateNum);
    	if (templateNum == 'template-1') {
    		console.log('temp1');
    		$('.send-proposal').attr('href','http://mashable.com');
			$('.proposal-text').html('I love you so listen, <br />Listen very carefully, <br />Keep your shit together, <br />For the sake of our family. <br /><br />The elections are over, <br />We didn’t see eye to eye. <br />So it’s better if we focus <br />On turkey and pie. <br /><br />If only for a day, <br />Let’s hold our tongues near, <br />Lest some of us stop talking <br />Until the next election year. <br /><br />Watch your mouth and hold your drinks, <br />No need for World War 3, <br />What I’m trying to say is, please, <br />DON’T TALK ABOUT POLITICS AROUND ME.');
    	}
    	if (templateNum == 'template-2') {
    		console.log('temp2');
    		$('.send-proposal').attr('href','http://google.com');
			$('.proposal-text').html("In this season of gratitude (and politics), <br /> Let us all agree:<br /><br /> I love you all dearly, <br /> But indulge me one thing <br /> To our holiday celebrations <br /> Do not “your politics” bring. <br /><br /> No Trumping over Turkey, <br /> Let’s Baruch and not Barack. <br /> No matter the yearn, <br /> Resist the Bern, <br /> And keep your feelings on lock. <br /><br /> Keep the Clintons out of Christmas, <br /> As we decorate the tree <br /> No elephants at tables, <br /> No donkeys outside stables, <br /> And a joyous occasion this will still be. <br />");
		}
		if (templateNum == 'template-3') {
			$('.send-proposal').attr('href','http://producthunt.com');
			$('.proposal-text').html('Over the course of the past two years, America has been ripped in two by a raucous political season, which culminated in the most insanely toxic and heated environment in a very long time. So, this Thanksgiving, I think we should wipe the slate clean -- just like Hillary deleted her emails -- because it would be “WRONG” or “NOT NICE!” to quote the President-Elect, to generalize about each other! <br /><br /> There’s so many other things going on in each others’ and our own lives, let’s just talk about those things and skip the political banter this Turkey Day!');
		}
		if (templateNum == 'template-4') {
			$('.send-proposal').attr('href','http://sidebar.io');
			$('.proposal-text').html('Our cranberry sauce is red <br /> And our fat turkey is brown <br /> No politics at dinner, <br /> I want all smiles, no frowns<br /><br /> The pilgrims and the indians <br/ > had a nice holiday meal <br /> don’t talk trump at my table <br /> Or shit is going to get real');
		}
    });




	$('.create-proposal').on("click", function() {
		var target = $('.template-creator')
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);

	});

});