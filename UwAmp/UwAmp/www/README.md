# 3720 Twitter API Example

This project works with the wonderful PHP Wrapper [TwitterAPIExchange.php](https://github.com/j7mbo/twitter-api-php) by [James Mallison](https://www.j7mbo.com/) (J7mbo) 

## Get Validated:
* Create a [Twitter App](https://developer.twitter.com/en/apps)
* use a domain name you own as the Website URL (won't be an issue for local hosting)
* generate keys and tokens

## Update and Run Code
* update credentials in get_tweets.php with keys and tokens from Twitter App
* set $URL endpoint and $getfield methods in get_tweets.php
* run the project from a local server
* examine data and determine what to pull and how to display it

## Running Twitter Wrapper with UwAmp
To use with UwAmp, you must update the CURL certificate (no need to do this if you're running MAMP)
1. Run UwAmp
2. Click on page icon next to PHP Config button 
3. Search for curl.cainfo
4. Delete the semicolon at the start of the line and update the line to read: `curl.cainfo = "C:\Curl\cacert.pem"`
5. Save the file
