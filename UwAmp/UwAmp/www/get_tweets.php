<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "416694432-kpYR48308MUrar8E697VkOrAVUPAvXqYRHyHjbWu",
	    'oauth_access_token_secret' => "b71oo8nI37oD6n2ahU5K4GEPXEtsLm0JnCLzskAg5ZOmC",
	    'consumer_key' => "JY7wDX9clQxUSzkiQbTNcFqvd",
	    'consumer_secret' => "ZW0qxRCf1AAjBGvmv0UjZ0LQITQxjZ2uLunDChETWHV0KJ32l3"
	);

	$q = $_REQUEST["q"]; 
	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=#'. $q .'&lang=en&count=1&tweet_mode=extended'; // queries start with ? and are strung together with &
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();
           

?>

