(function($) {

    $.fn.asiHero = function( options ) {
        // Establish our default settings
        var settings = $.extend(
          true, {
            responsiveMode : 'responsive', // responsive or adaptive
            adaptiveImg : [],
            layout : 'fluid',
            dataPosition : null,
            divider : 'false',
            contentCol : null,
            offerContentType: null,
            offerContentImg: null,
            urgencyText : null,
            headlineText : null,
            messageText : null,
            messageSubText : null,
            textAlign : null,
            fontColor: null,
            bgColor: null,
            bgImage: null,
            bgColorContent: null,
            paddingSection: null,
            paddingContent: null,
            addButton: 'false',
            buttonClass: 'btn asi-btn asi-btn-white asi-btn-white',
            buttonText: 'BUTTON',
            buttonLink: null,
            complete: null
          }, options, $(this).data()
        );

        return this.each(function() {
        	if ( settings.responsiveMode == 'responsive'){
	        	$(this).html(
	    			'<div class="section asi-section asi-mix-hero-wrapper">\
	    				<div id="asi-mix-hero" class="asi-bg-hero-image">\
	    					<div class="row asi-row">\
								<div id="asi-content-col">\
									<div class="asi-content asi-content-body">\
										<div id="asi-hero-wrapper" class="asi-section-content-wrapper">\
											<p class="asi-hero-message asi-lead lead asi-hero-lead"></p>\
											<p class="asi-hero-sub-message asi-sub-lead"></p>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>'
				);
        	}
        	if (( settings.responsiveMode == 'adaptive') && ( settings.adaptiveImg != null)){
        		$(this).html(
	    			'<div class="section asi-section asi-mix-hero-wrapper">\
	    				<div id="asi-mix-hero" class="asi-bg-hero-image asi-adaptive-hero">\
	    					<a href="'+settings.adaptiveImg['img-link']+'">\
	    						<img class="data-img img-data img-responsive" data-pos="'+settings.adaptiveImg['data-pos']+'" \
	    						src="'+settings.adaptiveImg['src']+'" \
	    						data-lrg="'+settings.adaptiveImg['data-lrg']+'" \
	    						data-med="'+settings.adaptiveImg['data-lrg']+'" \
	    						data-sml="'+settings.adaptiveImg['data-lrg']+'">\
	    					</a>\
						</div>\
					</div>'
				);
        	}
        	if (( settings.responsiveMode == 'adaptive') && ( settings.adaptiveImg == null)){
        		alert('You must also set the adaptiveImage options when responsiveMode = adaptive');
        	}
        	if ( settings.layout == 'fixed' ) {
		        $(this).find('#asi-mix-hero').addClass('container asi-container');
		        $(this).addClass('asi-fixed-hero');
		    }
		    if ( settings.layout == 'fluid' ) {
		        $(this).find('#asi-mix-hero').addClass('container-fluid asi-container-fluid asi-fluid-hero');
		    }
		    if ( settings.contentCol ) {
		    	$(this).find('#asi-content-col').addClass( settings.contentCol );
		    }
		    if ( settings.offerContentType == 'image') {
		    	$(this).find('#asi-hero-wrapper').html(settings.offerContentImg);
		    }
        	if ( settings.urgencyText ) {
        		$(this).find('.asi-section-content-wrapper').prepend('<p class="asi-urgency-msg">'+settings.urgencyText+'</p>');
        	}
        	if (( settings.divider == 'true' ) && ( settings.urgencyText != null )) {
        		$(this).find('.asi-section-content-wrapper p.asi-urgency-msg').after('<div class="asi-divider"><div class="asi-divider-line"></div></div>');
        	}else if ( settings.divider == 'true' ){
        		$(this).find('.asi-section-content-wrapper').prepend('<div class="asi-divider"><div class="asi-divider-line"></div></div>');
        	}
	    	if ( settings.headlineText ) {
	    		$(this).find('#asi-hero-wrapper p:eq(1)').before( settings.headlineText );
	    	}
	    	if ( settings.messageText ) {
	    		$(this).find('#asi-mix-hero p.asi-lead').html( settings.messageText );
	    	}
	    	if ( settings.messageSubText ) {
	    		$(this).find('#asi-mix-hero p.asi-sub-lead').html( settings.messageSubText );
	    	}
	    	if ( settings.textAlign ) {
	    		$(this).find('#asi-mix-hero h1, #asi-mix-hero p, #asi-mix-hero .asi-btn').addClass( settings.textAlign );
	    	}
		    if ( settings.fontColor ) {
		        $(this).find('#asi-mix-hero h1, #asi-mix-hero p').css( 'color', settings.fontColor );
		    }
		    if ( settings.bgColor ) {
		        $(this).find('#asi-mix-hero').css( 'background-color', settings.bgColor );
		    }
		    if ( settings.bgImage ) {
		        $(this).find('#asi-mix-hero').attr( 'style', 'background-image:url('+settings.bgImage+');');
		    }
		    if ( settings.bgColorContent ) {
		    	$(this).find('#asi-mix-hero .asi-section-content-wrapper').css('background-color', settings.bgColorContent);
		    }
		    if ( settings.paddingSection ) {
		    	$(this).find('#asi-mix-hero .asi-section').css('padding', settings.paddingSection);
		    }
		    if ( settings.paddingBody ) {
		    	$(this).find('#asi-mix-hero .asi-content-body').css('padding', settings.paddingBody);
		    }
		    if ( settings.paddingContent ) {
		    	$(this).find('#asi-mix-hero .asi-section-content-wrapper').css('padding', settings.paddingContent);
		    }
		    if ( settings.addButton == 'true' ){
		    	$(this).find('#asi-mix-hero .asi-sub-lead').after('<div id="asi-hero-btn-wrap"><a id="asiHero-button-link" target="_self"><button id="asiHero-button">'+settings.buttonText+'</button></a></div>');
		    }
		    if ( settings.buttonClass ) {
		    	$(this).find('#asi-mix-hero #asiHero-button').attr('class', settings.buttonClass);
		    }
		    if (settings.buttonLink){
		    	$(this).find('#asi-mix-hero #asiHero-button-link').attr('href', settings.buttonLink);
		    }
		    if ( settings.dataPosition ){
		    	$(this).find('a').attr('data-pos', settings.dataPosition);
		    }
		    if ($.isFunction( settings.complete )) { 
		    	settings.complete.call( this );
			}
		});
	}

}(jQuery));

