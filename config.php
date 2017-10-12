<?php
	$path = "";
	require_once("content/php/kyoutu.php");

	if(isset($_POST["ip_name"])){
		$str_sql = ("
			INSERT INTO
				config('ip', 'uid')
			VALUES(?, ?)
		");
		$stmt = $pdo->prepare($str_sql);
		$stmt->bindValue(1, $_SERVER['REMOTE_ADDR'], PDO::PARAM_STR);
		$stmt->bindValue(2, $_POST["ip_name"], PDO::PARAM_STR);

		$stmt->execute();

	}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>チャットサイト｜設定</title>
	<link rel="stylesheet" href="content/css/reset.css">
	<link rel="stylesheet" href="content/css/jquery.flipcountdown.css">
	<link rel="stylesheet" href="content/css/style.css">
	<script src="content/js/jquery-3.2.1.min.js"></script>
	<script src="content/js/jquery.flipcountdown.js"></script>

	<script src="content/js/jquery.particleground.min.js"></script>


	<script>
		$(function(){
			$('#clock').flipcountdown();
		});





document.addEventListener('DOMContentLoaded', function () {
	particleground(document.getElementById('particles'), {
		dotColor: '#5cbdaa',
		lineColor: '#5cbdaa'
	});
	var intro = document.getElementById('intro');
	intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


	</script>



</head>

<body class="config">

<div id="particles">
	<div id="intro">


	</div>
</div>

<div class="config_cnt">
	<div id="clock"></div>

	<div class="waku">

		<form method="post">
			<div><span style="font-family: HG創英角ﾎﾟｯﾌﾟ体">名前を取得する</span></div>
			<div><span>あなたのIP  ：</span><?=$_SERVER['REMOTE_ADDR']?></div>
			<div><span>現在の名前：</span><?=$user_name?></div>
			<div><span>名前の更新：</span><input type="text" name="ip_name"></div>
			<div><button type="submit">送信</button></div>
		</form>
	</div>
	<a class="migi" href="./"><div>チャットルームに戻る</div></a>
</div>
</body>
</html>

<?php
	$stmt = null;
	$pdo = null;
?>
