// Remember to always start your script files
// with this "document ready" line below
// and don't forget to close at the very end of the file
// with curly brace, parenthesis, and semicolon.

$(document).ready(function(){


	// This part allows Alfonso
	// to re-use his letters

	var letters = $('.letters').html().split('');
	var letterArray = [];

	for (i = 0; i < letters.length; i++) {
	    console.log(letters[i]);
	 
		var character = letters[i];
	    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
		var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
	    
	    letterArray.push(characterHTML);
	};

	$('.letters').html(letterArray);

	// Word shuffle

	$('button').click(function(){
		$('.letters').shuffle();
	});

	(function($){

	    $.fn.shuffle = function() {
	        return this.each(function(){
	            var items = $(this).children().clone(true);
	            return (items.length) ? $(this).html($.shuffle(items)) : this;
	        });
	    }
	    
	    $.shuffle = function(arr) {
	        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	        return arr;
	    }
	    
	})(jQuery);

// This is the closing bracket, parenthesis, and semicolon
});