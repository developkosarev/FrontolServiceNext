<?php

$data = [];
	
$data[] = date("Y-m-d H:i:s");

$data[] = $_SERVER['REMOTE_ADDR'];
$data[] = $_SERVER['HTTP_REFERER'] ?? '';
$data[] = $_SERVER['HTTP_USER_AGENT'];

$headers = apache_request_headers();

$data[] = $headers['X-Forwarded-For'] ?? '';

$str = implode('@@@', $data) . "\n";

$f = fopen('logs.txt', 'a');

fwrite($f, $str);

fclose($f);

	

header('Content-type: application/xml');
readfile('FrontolServiceAddon.xml');
exit;