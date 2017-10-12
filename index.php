<?php
	date_default_timezone_set('Asia/Tokyo');

	$path = "";


/****背景****************************************/
$val1 = null;
$val2 = null;
$timeout = time() + 1000 * 86400; //現在の時刻 + 1000日 * (24時間 * 60分 * 60秒)

if(isset($_POST["bgmain"])){
	$val1 = $_POST["bgmain"];
}

if($val1 != null){

	setcookie("bgmainCookie", $val1, $timeout, "/", "");
	setcookie("bgmainCookie", $val1);

	header("Location: " . $_SERVER['PHP_SELF']);
	if(isset($_COOKIE["bgmainCookie"])){
		$bgmain = " class='{$_COOKIE["bgmainCookie"]}'";
	}else{
		$bgmain = "";
	}
}else{
	if(isset($_COOKIE["bgmainCookie"])){
		$bgmain = " class='{$_COOKIE["bgmainCookie"]}'";
	}else{
		$bgmain = "";
	}
}

/************************************************/


/****チャットカラー******************************/

if(isset($_POST["chatColor"])){
	$val2 = $_POST["chatColor"];
}
if($val2 != null){
	setcookie("chatColorCookie", $val2, $timeout, "/", "");
	setcookie("chatColorCookie", $val2);

	header("Location: " . $_SERVER['PHP_SELF']);
	if(isset($_COOKIE["chatColorCookie"])){
		$color = " {$_COOKIE["chatColorCookie"]}";
	}else{
		$color = "";
	}
}else{
	if(isset($_COOKIE["chatColorCookie"])){
		$color = " {$_COOKIE["chatColorCookie"]}";
	}else{
		$color = "";
	}
}

/************************************************/


	require_once("{$path}content/php/kyoutu.php");



	$tmp = $_SERVER['REMOTE_ADDR'];

	$text = null;

	if(isset($_POST["text"])) {
		if($_POST["text"] != ""){
			$text = $_POST["text"];

			$str_sql = ("
				INSERT INTO
					chat('date', 'uid' ,'text')
				VALUES(?, ?, ?)
			");
			$stmt = $pdo->prepare($str_sql);
			$stmt->bindValue(1, date("Y-m-d H:i"), PDO::PARAM_STR);
			$stmt->bindValue(2, $user_name, PDO::PARAM_STR);
			$stmt->bindValue(3, $text, PDO::PARAM_STR);

			$stmt->execute();
			header("Location: " . $_SERVER['PHP_SELF']);

		}
	}

	if(isset($_POST["kensaku"])) {
		$kensaku = $_POST["kensaku"];
	}else{
		$kensaku = null;
	}




	$stmt = $pdo->prepare('
			SELECT
				*
			FROM
				chat
			WHERE
				text
					LIKE
						?
	');
	$stmt->bindValue(1, "%{$kensaku}%", PDO::PARAM_STR);

	$stmt->execute();


	$i = 1;
	$count = 0;
	while($row = $stmt->fetch()):
		$id[$i] = htmlspecialchars($row['id']);
		$uid[$i] = htmlspecialchars($row['uid']);
		$date[$i] = substr(htmlspecialchars($row['date']), 11, 16);
		$date2[$i] = substr(htmlspecialchars($row['date']), 0, 11);
		$ip[$i] = htmlspecialchars($row['ip']);
		$text[$i] = htmlspecialchars($row['text']);

		$i++;
		$count++;
	endwhile;

?>


<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>チャットサイト｜トップページ</title>
	<meta name="viewport" content="width=360,initial-scale=1">
	<link href="<?=$path?>favicon.ico" rel="shortcut icon">
	<link rel="stylesheet" href="<?=$path?>content/css/reset.css">
	<link rel="stylesheet" href="<?=$path?>content/css/style.css">
	<link rel="stylesheet" href="<?=$path?>content/css/style2.css">

	<script src="<?=$path?>content/js/jquery-3.2.1.min.js"></script>
	<script src="<?=$path?>content/js/jquery.fadethis.min.js"></script>
	<link rel="stylesheet" href="<?=$path?>content/css/jquery.mmenu.all.css">
	<script src="<?=$path?>content/js/jquery.mmenu.all.js"></script>
	<link rel="stylesheet" href="<?=$path?>content/css/fakeLoader.css">
	<script src="<?=$path?>content/js/fakeLoader.min.js"></script>
	<style>
		body{
			overflow-x: hidden;
		}

		.talk-date{
			color: white;
			font-size: 15px;
			position: absolute;
			top: 50px;
			left: 210px;
		}

		.mytalk .talk-date{
			left: auto;
			right: 210px;
		}


		.talk-name{
			width: 10em;
			height: 1em;
			color: white;
			font-size: 15px;
			position: absolute;
			top: 0px;
			left: 70px;
		}

		.mytalk .talk-name{
			left: auto;
			right: 70px;
			text-align: right;
		}


		.chatColor2{
			color: black;
		}
		.chatColor3{
			color: red;
		}



	.mm-listview>li>a,
	.mm-listview>li>span {
		padding: 40px 0;
	}

		input[type="button" i],
		input[type="submit" i],
		input[type="reset" i],
		input[type="file" i]::-webkit-file-upload-button,
		.mm-listview button{
			width: 70px;
			height: 70px;
			border-radius: 50%;
		}

		button{
			cursor: pointer;
		}


	</style>

	<script>
		$(function(){
			window.scrollTo(0,document.body.scrollHeight);
		});
	</script>
</head>

<body>
<div id="fakeLoader"></div>
<div class="wrap">
<div class="main_content">


	<header>
	<div class="inner">
		<div class="header_title">
				<form method="post">
					<span><?=$user_name?></span>
					<div class="chat_search">
						<span>　チャット履歴検索：</span><input type="text" name="kensaku" value="<?=$kensaku?>">
						<button type="submit">送信</button>
					</div>
				</form>
	</div>
		<div class="herder_sub"><a href="#menu">▽</a></div>
	</div>

	<div id="menu">
		<ul>
			<li><a style="font-size: 1.5em; text-align: center" href="<?=$path?>config.php">名前登録</a></li>
			<li>
				<form method="post">
					<span>背景変更　</span>
					<button type="submit" name="bgmain" value="bg1" style="background: url(<?=$path?>content/img/bg.jpg); background-size: 100%">青空</button>
					<button type="submit" name="bgmain" value="bg2" style="background: url(<?=$path?>content/img/bg2.gif); background-size: 100%">春</button>
					<button type="submit" name="bgmain" value="bg3" style="background: url(<?=$path?>content/img/bg3.jpg); background-size: 100%">夏</button>
					<button type="submit" name="bgmain" value="bg4" style="background: url(<?=$path?>content/img/bg4.png); background-size: 100%">秋</button>
					<button type="submit" name="bgmain" value="bg5" style="background: url(<?=$path?>content/img/bg5.jpg); background-size: 100%">冬</button>
					<br><br>
					<span>文字色変更</span>
					<button type="submit" name="chatColor" value="chatColor1" style="background: white;">白</button>
					<button type="submit" name="chatColor" value="chatColor2" style="background: black; color: white;">黒</button>
					<button type="submit" name="chatColor" value="chatColor3" style="background: red;">赤</button>
				</form>
			</li>
		</ul>
	</div>

	</header>

	<main<?=$bgmain?>>
		<div class="inner">

			<?php
				if($date2[$count] < date("Y-m-d")):
							$str_sql = ("
								INSERT INTO
									chat('date', 'text', 'ip')
								VALUES(?, 'date', 'date')
							");
							$stmt = $pdo->prepare($str_sql);
							$stmt->bindValue(1, date("Y-m-d H:i"), PDO::PARAM_STR);
							$stmt->execute();
				endif;
			?>
			<?php for($i = 1; $i <= $count; $i++): ?>

				<?php if($ip[$i] == "date"): ?>
					<p class="date-box"><?=$date2[$i]?></p>
				<?php elseif($uid[$i] == $user_name): ?>
					<p class="chat-talk mytalk slide-left">
						<span class="talk-icon">
							<img src="<?=$path?>content/img/my.gif" alt="myicon" width="50px" height="50px">
						</span>
						<span class="talk-name <?=$color?>"><?=$uid[$i]?></span>
						<span class="talk-content"><?=$text[$i]?></span>
						<span class="talk-date <?=$color?>"><?=$date[$i]?></span>
					</p>


				<?php else: ?>
					<p class="chat-talk slide-right">
						<span class="talk-icon">
							<img src="<?=$path?>content/img/aite.png" alt="tartgeticon" width="50px" height="50px">
						</span>
						<span class="talk-name <?=$color?>"><?=$uid[$i]?></span>
						<span class="talk-content"><?=$text[$i]?></span>
						<span class="talk-date <?=$color?>"><?=$date[$i]?></span>
					</p>

				<?php endif; ?>

			<?php endfor; ?>
		</div>
	<main>

</div>

<div class="cccc">
	<div class="inner">
		<form method="post">
			<input class="mozi" type="text" name="text">
			<button class="btn" type="submit" width="100px">送信</button>
		</form>
	</div>
</div>
</div>
<script src="<?=$path?>content/js/neko.js"></script>
<script>$(window).fadeThis();</script>
<script>

$(function(){
	$("#menu").mmenu({
		"extensions": [
			"theme-dark",
			"pagedim-black",
		],
		"offCanvas": {
			"position": "top",
			"zposition": "top"
		},
		"autoHeight": true
	});
});

</script>
<script>
 $("#fakeLoader").fakeLoader({
   timeToHide:1000, //Time in milliseconds for fakeLoader disappear
   zIndex:999999, // Default zIndex
   spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
   bgColor:"#2ecc71", //Hex, RGB or RGBA colors
   // imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
 });
</script>

</body>
</html>

<?php
	$stmt = null;
	$pdo = null;

?>
