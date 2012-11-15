<!DOCTYPE HTML>
<!--[if lt IE 7]><html class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html class=""><!--<![endif]-->
<head>
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- could combine the bootstrap CSS files, if we're always going to use both -->
	<link rel="stylesheet" href="_css/bootstrap.min.css" />
	<link rel="stylesheet" href="_css/bootstrap-responsive.min.css" />

	<link rel="stylesheet" href="_css/style.css" />

	<title>A Piano Example</title>

</head>
<body>

	<div class="container">
		<div class="row-fluid">
			<div id="keyboard">
				<div class="keys"></div>
			</div>
		</div>
		<div class="row-fluid">
			<h5>Play Log</h5>
			<div id="log"><pre>[ Click the keys above ]</pre></div>
			<div class="controls">
				<a class="btn btn-success replay" data-fn="play">Play</a>
				<a class="btn btn-warning reset" data-fn="reset">Reset</a>
			</div>
		</div>

	</div>

	<div id="buttons"></div>

	<script src="_js/riff.js"></script>
	<script src="_js/audio.js"></script>
	
	<!-- could pull from a CDN like google's to make it load faster -->
	<script src="_js/jquery.js"></script>

	<script src="_js/modernizr.min"></script>
	<script src="_js/script.js"></script>

</body>
</html>