//audio.play();

( function(){
	"use_strict";

	/**
	 *	BONUS (for HTML5 audio-enabled browsers )
	 *	Map all the keys && my best mathmatical guess for the 
	 *	correct tone value( good thing we only have 1 octave )
	 */
	var tone_map = {
			'C' : 2.45,
			'C#' : 2.35,
			'D' : 2.2,
			'D#' : 2.0,
			'E' : 1.95,
			'F' : 1.8,
			'F#' : 1.7,
			'G' : 1.60,
			'G#' : 1.53,
			'A' : 1.45,
			'A#' : 1.36,
			'B' : 1.28
		}
	/**
	 *	A map of all the tones we will have
	 */
	,	tones = {};

	/**
	 *	No Audio object? Don't waste your time.
	 */
	if ( ! window.Audio ) {
		window.tones = tone_map;
		return false;
	}

	for ( var key in tone_map ) {
		var data = [];

		for ( var i = 0; i < 10000; i++ )
			data.push( 128 + Math.round( 127 * Math.sin( i / tone_map[ key ] ) ) )

		var wave = new RIFFWAVE( data );

		tones[ key ] = new Audio( wave.dataURI );
	}

	/**
	 *	The only part that needs to be public
	 *	For a larger app, would probably be 
	 *	best to namespace this better                                                                  adfs  
	 */
	window.tones = tones;
})();