$( function() {

	/**
	 *	I like to name my cached jQuery objects $variable so I can
	 *	easily tell later on "oh yeah... this is a jQuery object..."
	 */
	var $controls = $( '.controls' )
	,	$keyboard = $( '#keyboard' )
	,	$log = $( '#log' )
	,	$keys = $keyboard.find( '.keys' )
	,	playing = false
	,	keys = {}
	,	playlist = []
	/**
	 *	Why use $.find instead of $( selector, context )? Because
	 *	internally jQuery uses $.find anyway, so this it's faster
	 *	( at least that USED to be true, hope it still is! )
	 */


	var addKey = function( $where, key ) {
		var $key = $( '<span class="key" id="' + key + '"><a data-key="' + key + '"><span class="letter">' + key + '</span></a></span>' )
		$where.append( $key )
		
		/**
		 *	Let's map the keys so we don't have to search the dom every
		 *	time we want to play one
		 */
		keys[ key ] = $key;
	}

	var addToList = function( key ) {
		playlist.push( key )

		$log.html( '<pre>' + playlist.join() + '</pre>' )
		$controls.show();
	}

	var replayer = function() {
		var count = playlist.length
		,	plays = 0

		var play = function() {
			if ( plays < count )
				playKey( playlist[ plays ], false, play )

			plays++;
		}

		play();
	}

	var playKey = function( key, quick, callback ) {
		callback = callback || new Function


		$keys.find( '.pressed' ).removeClass( 'pressed' )
		keys[ key ].addClass( 'pressed' )

		/* if we wanted to enable the Audio
		if ( window.Audio ) {

			if ( playing ) {
				playing.pause()
				$( playing ).off( 'ended' )
			}

			playing = tones[ key ]
			playing.play()
			$( playing ).on ( 'ended', function() {
				console.log( key + ' ended' )
				$keys.find( '.pressed' ).removeClass( 'pressed' )
				$( this ).off( 'ended' )
				callback( key )
			});
		}
		else {
			setTimeout( 1000, function() {
				$keys.find( '.pressed' ).removeClass( 'pressed' )
				callback( key )
			});
		}*/

		var t = quick ? 100 : 1000;

		setTimeout( function() {
			$keys.find( '.pressed' ).removeClass( 'pressed' )
			callback( key )
		}, t );
	}

	for ( var key in tones ) {
		if ( /\#/.test( key ) )
			addKey( $keys.find( '#' + key.replace( /\#/, '' ) ) , key )
		else
			addKey( $keys, key )
	}

	/**
	 *	If there are no tones, we don't need to worry about a click
	 */
	$keyboard.on( 'click', '[data-key]', function( e ) {
		var $this = $( e.target ).closest( '[data-key]' )
		,	key = $this.data( 'key' )

		playKey( key, true )
		addToList( key )
	});

	$( document ).on( 'click', '.replay', function() {
		
		replayer();
	
	}).on( 'click', '.reset', function() {
	
		$controls.hide();
		playlist = [];
		$log.html( '<pre>[ Click the keys above ]</pre>' );
	
	});

	$controls.hide();
	
});