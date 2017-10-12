
//****▼初期設定▼****************************************************
nkspd = 90;       //ねこの速さ：小さいほど速いが、５０以上が望ましい。
//****▲初期設定▲****************************************************


//****▼**********************************************************

document.write('<div id="jsneko" style="position: absolute; z-index: 7; left: 0; top: 0; pointer-events: none;">');
    document.write('<img width=32 height=32 name=nyan>');
document.write('</div>');

/*
$(function(){
	var body = document.body;
	var stalker = document.createElement("div");
	stalker.id = "jsneko";
	stalker.style.position = "fixed";
	stalker.style.zIndex = "7";
	stalker.style.left = "0";
	stalker.style.top = "0";
	stalker.style.pointerEvents = "none";

	stalker.innerHTML = '<img src="../../content/img/favicon.gif" alt="マウスストーカー" width="32px" height="32px" name="nyan">'; //表示させる要素 画像であれば img 要素を入れる

	body.appendChild(stalker);

	//	body.addEventListener("mousemove", function(e) {
	//		stalker.style.left = e.clientX - 16 + "px"; //35 は要素の長さの半分
	//		stalker.style.top = e.clientY - 32 + "px"; //80 は縦の位置 各自調整
	//	}, false);

});
*/


//****▲**********************************************************


//****▼**************************************************************
//画像の読み込み
//たくさんある
var mati2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOZ'+
    'SLrc/jDKSatd4OXrgNjYxzWeqJTgCASCSZRBeq2tWArx+NYt4PMuy601KAJlFICxNOgJisjJbfip'+
    'RSXKJtUDVQG/Pa8P1ftdsWDeWZoO6sZWn05jndMDePccltdzhix1KhlZQF1yFShDiyhJRVqFXAM/'+
    'j2s7alaZalI/PXgxn1NjYx0rnx94Y6k4oVw5DKOxcrK0lna3uLkJADs=';
var up1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOT'+
    'SLrM8KDJ2eATWNhIuwJZqHneM2ghODzkBGIvnHGtM5wxetM1kYsiXmsD3PQ+wFPxiITdVinmBxK0'+
    'SH2/KnNzmXFrRKAXEBC6AmVxEG2WkFEhZUpQHsLjYlC7IrjF/X8jdklqe25PGYiJOz1ZfYWNTyeS'+
    'SpKGboRLW45eV1NdVp58K6IUADilZ3WpFWysbpevsqIJADs=';
var up2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOx'+
    'SLrM8KDJuaAVWFhIGwgPAWSkJn5Rp3wgMGjkODwBqK4BjI0ZD9s3l2bw8sGIspRqZCyVmDeR5vK8'+
    'KDuuprM3i/J84NguKqX2rGSpbqu7LgXIR+xBNJG17HFa+3K6g1NwRIOBf0tNcnNpK081iItaLJF7'+
    'GHVDOpaGEzJiMyRFe309OyVdd5V9X5U9lKJsqaFViauam0+MMYtSOXa4ObWbNUAOwsASkhTIuiFY'+
    'xrrP0DcJADs=';
var down1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOl'+
    'SLrcAC3KuUAIkOpp8f7OIGQgCAgDWW7nuGrPI8bqS7RCLuauffOogXDXW+GARF4NNkQKecMlB4gj'+
    'HqURwO50anKDWMY11x2RoWGFdhY4uzFg1rZ9xsFR6VvbQn0A4R4we0BBSWaBHHxHOoSHDzBfjY1c'+
    'aR0yM4RdKZYUFjFKmUoPiFmja2ZUYBiPgnegVBd5FZ+SIzE2NDi5Pg40vL/AwcLDxLwJADs=';
var down2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAO3'+
    'SLoMsK49RqsCIeJ88bTg9ohXwIGhIIzDeqkf2gTqCsDErZ4yRMO3gaMm4PVygxZRWUvGerpmMkl0'+
    'HS/UZdV5fW2zxCe0KmDWxOOVagrDdXNtnfKmQ6fU6lbdfaX/ojoZVn0rP2pRgnYWQ2GMZ4oVjmtg'+
    'QEcaUU1kl1CSZI+QElSYeUKgEmdVgKYNoqllQm8dro2xcKNhg10Aeo4OQasNjb5htUi5cLDFJDNG'+
    'bx5PDs3OaBHF1gwJADs=';
var left1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOt'+
    'SLrc/jDKSauFIF+ah9eb0wnCQA5gSAAeWbqfCpzmW5pAlC5s7buu3GMm5LWAyFORMROAmrVkcskL'+
    'ZqZSJ4m6wgaPwCuu0cxqb+FuqVjOtpHCXnx7i2494KACEAjkmm9hZlt7fmozH1dBMHBMGW2PdJJ2'+
    'TkODQX6BXHtmUXyPgJucYSwnhHs4onugK2IkmXywqkOPfbaxrBugu4atMo88OyqtbLPDx8jJysvM'+
    'DwkAOw==';
var left2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOh'+
    'SLrc/jDKSasENoLdeO5BgDGAMH7EFp5KaaLAILzdTFfuwLbu7F22XcomGBhvjk1Rl/Qtg7tNrih0'+
    '9Z6njewYbJpmXF8qHEZeiUTlEy1eXKXnIhvNis/v9Bp+n+9I+UQyfQ9qdzmCgkJuMYJsIjFgWyZV'+
    'PY0CIZiPkEYrfnKTmZhwo52LiKOoPKRZAKKjOHA8K7EfP6o8KLm6u7y9vr/AwAkAOw==';
var upleft1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOt'+
    'SLrcBNBJCasVAsytAMYXyE0XEGRfNi4R9Jlgqq2sBwYn+tKMNwypDFDE62B+wR9wVrQJkB/gwMJc'+
    'AaBBHbJizXqPW6vz+3wOq5txcmj+oSnkNZGj/irPoyvby1aq0nogd3JzJC9YhH9pTy5gfIUUQAE2'+
    'Unsybw4ek2VxGZgNJpN1X5+gJo2Xgp40p6ggVIyssC9cEDilNTC0Fh23Vji3XBS4ucJFx8jJysvM'+
    'PAkAOw==';
var upleft2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOt'+
    'SLrc/jDK6YC9lk4gurAfoEHc5XmYOIJnx6Jaxg0uyMGjMtNAEHwnlQRDmHl+nwEv5sO0XMpPrPd7'+
    'tZSlqYBnDS4pLNrTtXXpMg9LNFoCKt+W5rAjfr7FVCHpZhe/zTFjdGxbaGCCeGR6G2N1ZCErgn1S'+
    'h2N8dICMUS2XOJqCnQOLEQA0mygmnnNlnAs3AaMkrEEMeTkpHbC1cjm1Arq7sUzAtcJgvL1DyMmk'+
    'xgkAOw==';
var dwleft1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOl'+
    'SLrc/jDKSR+4tV4ghthZs12e0AlBAIQKUA7eCLJcB8PmTNsln68QTGvD65mOQgcHuOT0jMdPMEfg'+
    'qKLRGnL6M12x2q3FdPN+c1jq+JTWuspqZTqLbHPdPDdcusbX0WBKF4AfP4M5OHEicz50WXeMYIFr'+
    'kYBnQFOHjlYqMJgRMiNZnYoSoW8xKgF8IaFmFymfGaexsSwMSSMqsreCvL3AwcLDxBIJADs=';
var dwleft2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOn'+
    'SLrc/jDKSat1IGtwoRZgIHLERlLACAqaAoSj9bLgObPZldX1XnclHu4mGJwqr4FysGoWjx6Ob7l0'+
    'sjDHTVFpdUJLLd+Oal1+Z1pBwNddfYO93YjYVL7BIPsqgGvfXXl+VjkSdF1EfwyGbT8TUjQ8dmxX'+
    'KC83aIM6kDRVkIkNi01oHTuGYkB4cQBMlEAmk59RLSVKa6gus0ExtxsLKba3uIqEwcXGtwkAOw==';
var right1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOo'+
    'SLrc/jDKSatdIF+ah9eb0wnCQA5gSAAeWbqfupbmS5NACLjweaKinKjGK9KEGAEyaWzWhBlcY6ds'+
    'VosZqnL6ihY/PK1ryZKKW1frFhObWcVNaCAANXrAvPs1B6Ar4EaAY2ZkX4NjHSZUSwxwT4dZYYx/'+
    'gX2CgQ9eWZY9bxBRQJQ2KHCTf1lzqD5ZK5sRm6lzsq4XIJabtDKspykyrRi9vsLDxMXGxxAJADs=';
var right2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOi'+
    'SLrc/jDKSWsD2EZwQ+DaBS6Al4UKIIykIAxspa4PMLixNNO1y+u7VS41uJ16xZtvaHvhjqldcYVz'+
    'BKewkWq6rDKuyheMAMZ5W740F5NuL7/udniJCbKC8Xz8ru+7+XJ+aXUxM0prfVAkW2IuWQF5RYop'+
    'Hlh1HpiQPmGTJR+EhJmYbE6KJaAnqKCHUKAyoKOFQ0CXnyg1IHW3u7y9vr/Awb8JADs=';
var upright1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOw'+
    'SLq88C3K6YR4ONNNgL3Yd3GT93mBp5GNaZnpCXQz615WEL81232Dm2AwGPkUHmJRRHz5MoDi0tJ0'+
    'bkJVITDISVZFYFFPYmpOw7KrcvoNj0vUM/rUjbfnRrgSiB9yKS53a2VBby1bc0QuhodDaF8PRYwM'+
    'D4lSLwFDkw5aYZKZmxV9MjqhNJo8bgApph2SUGAYKSSrrDSVMitXpUiwH6ytNCWyOrNHV1DHysvM'+
    'zc7PEgkAOw==';
var upright2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOv'+
    'SLrc/jDKSRW4+FZ5RRcgsC0ZAJ5eJ44m+qHpSLRh2g7evFK0JwQB0wC3YwmGrcCJqNPwjoPeKQMs'+
    'QkyAIWxqqlodQilXGGtgLCDidhn6zrzDuA8LhTrB1bR8jctx9H1aa3dXWT57gxV0PkdrfhwtUn0w'+
    'bmZ1jpSKaZSOlZZbYlqeDIYujkwTPRkwWlGKSo+hIa9BpFuoPFWksCUstbuPMjp4v8IRALrGx8nK'+
    'hc0ECQA7';
var dwright1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOr'+
    'SLrc/jDK6YClmFgghtgZBARBJ5zDdoWLunVeB7DMCw/4OdMWmvueXaZ3KgKDIMWqYjTGTL0dR9jg'+
    'GK3NT2lmpday2OJIh/W2sp8rCagTFXG4MjpmPjfl6LYbWIandXpMd2JXhB97MGU2eElfhU4/YIiA'+
    'eY91SmIlf5WBDwBxa11gUxNWKQFhLioYHKioN6qXniQWax8uNBq0tKq5GiOrSrIUjb7Gx8jJyhkJ'+
    'ADs=';
var dwright2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOm'+
    'SLrc/jDKSaslIGtw1eZYIAqkZgFiUHoZKaABSGmuDJRrh9XtW8oXwMD16t1eOiGROGgOgbOlwOn8'+
    'YaCPo9RV3TAyDmFTSi1aveHtMqMqGiFiNVu1qUW061v7NS5KekR4TDkTeIJbWHBqcieBGWNaNxyJ'+
    'aWs4OGAVR0ddNUhBl4uUdz9SkqOkU3VWOh6OH60LKE0gsLEwn1eZtyI2JrEsQLvAxMUECQA7';
var awake = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOz'+
    'SLrc/jDKuQCFVub6NvHRBgjgmIGaMpKVwGroF7iiG6CAlzfATH8uwY2x65wCPlIuiLQUKavgYBr8'+
    'XSrU1YAmmMY+uVIwyrWCn51sldQdfEPruPlqWrKVpitRXn1PyGt+UHZ4RHo8YzxDh0BIMyJNjCuO'+
    'PyNuklVJJFuCRE5UVV5KdDRkpiudAFOcqpxtS6uCgFG0gX85SCSOPU27aA64jjdNwby+IWHJYWfK'+
    'y4zP0NHSDAkAOw==';
var jare2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOk'+
    'SLrc/jDKKQGguAFhc94C51GgEFyjYqFqGJ7sF66E5YZDTAa3Ndw/kQfAcw2CpZ+uUgTOBMjhbdoT'+
    'YkocatZ6hT6/rmUlGOzRUpucbRZoi0laTps7XJVWuZTjHtYzQDBQeX41LnN9fliHHWgXWCYgjm97'+
    'SgBHM3eWgxVmYXF0lGWWYEZHdhAWTURuWyYwG257q3OrK4ZtbmcadrySvbqEwcLDEwkAOw==';
var kaki1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOm'+
    'SLrc/jDKSau9mACQKxBbJ31CEIoOWZpoo5Ygd22nJty4MHB1pNIv3eC2YU1Ug2ROhyvKRrlhE5d0'+
    'eqjTm7RoPC6DREAgAKIESZumWPiEAHPnM3RJ/6ThPhqIvu8nkyNxcHdNZm9RO4htXnx9hUc8UlRV'+
    'X0dDhI6ZPSmDW1qYiylKRGR9JniQH2Riq2OnMUCbGqylrDRjb0MDrouxvrO+vy3DxMUOCQA7';
var kaki2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOj'+
    'SLrc/jDKSau9uIFcgdjcAjLeFxLeqJSBepVjKQQtJ4PyXGM5AAyCoND0Gg6Aw+DARckhjUGmxDmU'+
    'LXnJqPX6ekaz0qkvp9WOfRNyWehTRsXt2/kHrHMh7aqPFsgCwyRnWnxqgA5kYx9CR4YrGz9JR0tJ'+
    'jZB5X2yUU3pIHow9aUdsfYoziGltfQA0H4Rmc4errK0te7VtdYQac7C8vo0nwcLDCQA7';
var sleep1 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOX'+
    'SLrc/jDKSesEOAPLye6XB1bfKG2loqUW67jUijWwuax2rjO1Dgg9Ek0AzP1KP2LwpNQQgUsaJvA8'+
    'PoHFGGAwAFCr2+vxIhgAv0+uWbz8mZNX4hrMrMbv8gwkqYbjwVkvZWJQeBhYNW5lXGFQcHxHMHBr'+
    'YXN+iF0Pl0pccZGFiYYyUwEYbxEyRAGrpRmrXq0toyoyO7YmCQA7';
var sleep2 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOW'+
    'SLrc/jDKSau9OOvNu/8cII6gAzTjuYmQurYLa6WyQgvuy4h4R8YCQSBXSeFuwtpENBgAAkFANDgl'+
    'PqSDKDQKaFJxvYhUkH1+yd6v0qQ+U7Nq667tdjvXQLSzfpb6W2RtI25jf1eBTU5wR1Rje3gEY4E4'+
    'WYuSVU6HhGmNjDxykXU0KQFDXWFXSKWlpEOsoCajKrIltRcJADs=';
var mati3 = 'data:image/gif;base64,'+
    'R0lGODlhIAAgAKL/AAAAAP/////MZplmM8DAwAAAAAAAAAAAACH5BAEAAAQALAAAAAAgACAAAAOf'+
    'SLrc/jDKSatd4OXrgNjYxzWeqJTgCASCSZRBeq2tWArx+NYt4PMui8dXGvR+MgrA2Ps4W4PkBHWs'+
    'oVS/TyBm9amYWm4tquKtxFbd7XwLctZt6Sz78eo66Tt+y5K/W3w9eic8LHlvGUtgUGR2SlVWZldT'+
    'A5V1lh6VP5VkEm1PoJ9+J3RnMXxwRI4Ypn1bRK84qJk5DKq3Xri6o4O9voMJADs=';


nekoG = new Array([]);
for (i=0; i<=38; i++) {
	nekoG[i] = new Image();
}
/* mati2    */nekoG[ 0].src = mati2;
/* mati2    */nekoG[ 1].src = mati2;
/* up1      */nekoG[ 4].src = up1;
/* up2      */nekoG[ 5].src = up2;
/* down1    */nekoG[ 6].src = down1;
/* down2    */nekoG[ 7].src = down2;
/* left1    */nekoG[16].src = left1;
/* left2    */nekoG[17].src = left2;
/* upleft1  */nekoG[20].src = upleft1;
/* upleft2  */nekoG[21].src = upleft2;
/* dwleft1  */nekoG[22].src = dwleft1;
/* dwleft2  */nekoG[23].src = dwleft2;
/* right1   */nekoG[24].src = right1;
/* right2   */nekoG[25].src = right2;
/* upright1 */nekoG[28].src = upright1;
/* upright2 */nekoG[29].src = upright2;
/* dwright1 */nekoG[30].src = dwright1;
/* dwright2 */nekoG[31].src = dwright2;
/* awake    */nekoG[32].src = awake;
/* jare2    */nekoG[33].src = jare2;
/* kaki1    */nekoG[34].src = kaki1;
/* kaki2    */nekoG[35].src = kaki2;
/* sleep1   */nekoG[36].src = sleep1;
/* sleep2   */nekoG[37].src = sleep2;
/* mati3    */nekoG[38].src = mati3;
var NID=0,NID2=0;
//マウスカーソルの位置 とりあえず100,100
var MX = 100;
var MY = 100;
//猫の左上位置
var NX = 0;
var NY = 0;
//猫の移動周期(ms)
var NCYCLE = 250;
//猫の移動量
NS = 16;
NS2 = NS*NS;
NS_2 = NS >> 1;
//猫のアニメーションフラグ
NA = 1;
//一つ前に、猫は何をしていたか。
BN = 0;
/*以下２進数
Ｙ軸	移動無し	00
	上		10
	下		11
Ｘ軸	移動無し	00??
	左		10??
	右		11??
*/
//マウスカーソル位置を取得


//****▲**************************************************************

//    Touch     : typeof document.ontouchstart !== 'undefined',
//    Pointer   : window.navigator.pointerEnabled,
//    MSPointer : window.navigator.msPointerEnabled


if(window.navigator.msPointerEnabled){
    document.onmousemove = GetM;

}else if("onmousemove" in window){
    document.onmousemove = GetM;

}else if("ontouchmove" in window){

    document.ontouchmove = GetM;
}


//document.onmousemove = GetM;

//document.ontouchmove = GetM;

//****▼**************************************************************
function GetM(e) {
		MX = e.pageX;
		MY = e.pageY;
}
//****▲**************************************************************


//****▼**************************************************************
//猫を動かす
function nekomove(){
	var	DX = MX - NX;
	var	DY = MY - NY;
	var	DX2 = DX*DX;
	var	DY2 = DY*DY;
	DX2 = ( DX2 === 0 && DY2 === 0 ) ? 1 : DX2;
	var	XF = (DX < 0 ) ? -1 : 1;
	var	YF = (DY < 0 ) ? -1 : 1;

	var	NDX;
	var	NDY;

	//移動量をきめる
	//やっぱり、無駄な計算をしている気がする
	if ( DX2 + DY2 < NS2 ){
		NDX = DX;
		NDY = DY;
	} else {
		NDX = XF*Math.ceil(Math.sqrt(NS2*DX2/(DX2+DY2)));
		NDY = YF*Math.ceil(Math.sqrt(NS2*DY2/(DX2+DY2)));
	}
	if ( NDX === 0 && NDY === 0 ) {
		clearInterval(NID);
		nekostop();
	} else {			//移動する
		var Ndirect = 0;
		if ( NDY < 0 && NDY + NS_2 <= 0) Ndirect += 2;
		else if ( NDY > 1 && NDY - NS_2 >= 0) Ndirect += 3;
		if ( NDX < 0 && NDX + NS_2 <= 0) Ndirect += 8;
		else if ( NDX > 1 && NDX - NS_2 >= 0) Ndirect += 12;
		NA = ( NA === 0 ) ? 1 : 0;
		BN = Ndirect;
		chimg((Ndirect<<1)+NA);
		NX += NDX;
		NY += NDY;





    	document.getElementById("jsneko").style.left = NX - 16+"px";
        document.getElementById("jsneko").style.top = NY - 35+"px";
	}        // else end
}        //nekomove end
//****▲**************************************************************


//****▼**************************************************************
function chimg(num){
    document.nyan.src = nekoG[num].src;
}
//****▲**************************************************************


//****▼ネコが止まった時の処理１▼************************************
function nekostop(){     //ネコストップ
	NA = 0;
	chimg(0);
	OLDMX = MX;
	OLDMY = MY;
	NA = 0;
	NJC = 0;
	NID2 = setTimeout(nekojare,NCYCLE*5);
    mousecheck();
}
//****▲ネコが止まった時の処理１▲************************************


//****▼ネコが止まった時の処理２▼************************************
function nekojare(){     //ネコじゃれ
	NJC++;
	clearTimeout(NID2);
	if ( NJC <= 10 ) {
	  if ( NJC & 1 == 1 ) chimg(33);
	  else chimg(0);
	  NID2 = setTimeout(nekojare,NCYCLE>>1);
	} else {
	  NKC = 0;
	  NID2 = setTimeout(nekokaki,NCYCLE);
	}
    mousecheck();
}
//****▲ネコが止まった時の処理２▲************************************


//****▼ネコが止まった時の処理３▼************************************
function nekokaki(){     //ネコ毛づくろい
	NKC++;
	clearTimeout(NID2);
	if ( NKC <= 8 ) {
	  if ( NKC & 1 == 1 ) chimg(34);
	  else chimg(35);
	  NID2 = setTimeout(nekokaki,NCYCLE>>1);
	} else {
	  NID2 = setTimeout(nekoakubi,NCYCLE);
	}
    mousecheck();
}
//****▲ネコが止まった時の処理３▲************************************


//****▼ネコが止まった時の処理４▼************************************
function nekoakubi(){    //ネコあくび
	clearTimeout(NID2);
	chimg(38);
	NNC = 0;
	NID2 = setTimeout(nekone,NCYCLE<<2);
    mousecheck();
}
//****▲ネコが止まった時の処理４▲************************************


//****▼ネコが止まった時の処理５▼************************************
function nekone(){       //ネコ寝る
	NNC++;
	clearTimeout(NID2);
	if ( NNC & 1 == 1 ) chimg(36);
	else chimg(37);
	NID2 = setTimeout(nekone,NCYCLE<<1);
    mousecheck();
}
//****▲ネコが止まった時の処理５▲************************************


//****▼**************************************************************
function mousecheck(){
	if ( OLDMX != MX || OLDMY != MY ) {
	  clearTimeout(NID2);
	  clearInterval(NID);
	  nekostart();
	}
}
//****▲**************************************************************


//****▼ネコが起きた時の処理？▼**************************************
var NID2=setTimeout(["",0]);
function nekostart(){
	clearTimeout(NID2);
	chimg(32);
//    NID2 = setTimeout("NID = setInterval(nekomove,nkspd)",NCYCLE*3);

    NID2 = setTimeout(nekostart2,NCYCLE*3);

}

function nekostart2(){
    NID = setInterval(nekomove,nkspd);
}
//****▲ネコが起きた時の処理？▲**************************************





//****▼ロード▼******************************************************
window.onload = function() {       //スクリプトを自動起動する宣言
 nekostart();                      //nekostartをロード
};
//****▲ロード▲******************************************************
