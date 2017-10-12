<?php
	session_start();


	date_default_timezone_set('Asia/Tokyo');

	$_SESSION['ticket'] = md5(uniqid().mt_rand());


	$pdo = new PDO("sqlite:{$path}content/db/sqlite.db");

	$val = null;
	if(isset($_POST["ip_name"])){
		$val = $_POST["ip_name"];
	}

	if($val != null){
		$timeout = time() + 1000 * 86400; //現在の時刻 + 1000日 * (24時間 * 60分 * 60秒)
		setcookie("ip_nameCookie", $val, $timeout, "/", "");
		setcookie("ip_nameCookie", $val);

		header("Location: " . $_SERVER['PHP_SELF']);
		if(isset($_COOKIE["ip_nameCookie"])){
			$user_name = $_COOKIE["ip_nameCookie"];
		}else{
			$user_name = $_SERVER['REMOTE_ADDR'];
		}
	}else{
		if(isset($_COOKIE["ip_nameCookie"])){
			$user_name = $_COOKIE["ip_nameCookie"];
		}else{
			$user_name = $_SERVER['REMOTE_ADDR'];
		}
	}
?>
