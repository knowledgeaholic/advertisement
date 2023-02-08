jQuery(document).ready(function($){
// 	$('.code-block').remove();
// 	console.log("Hello")
	var modal = document.getElementById("myModal");
	var min = 5,max = 8;
	var randTime = Math.floor(Math.random() * (max - min + 1) + min);
	var btn = document.getElementById("myBtn");

	var span = document.querySelector(".close");
	modal.style.display = "none";
//
	setTimeout(function(){
		modal.style.display = "block";
// 		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
// 		   modal.style.display = "none";
// 		}
// 		else{
// 		   modal.style.display = "block";
// 		}
	},randTime*1000)

	span.onclick = function() {
	  modal.style.display = "none";
	}
	$(".code-block").addClass('code-block-style')
	function setCookie(cname, cvalue, exdays) {
		  const d = new Date();
		  var setTimeCookie= d.setTime(d.getTime() + (exdays*1*60*60*1000));
		  let expires = "expires="+ d.toUTCString();
		  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	function getCookie(cname) {
	  let name = cname + "=";
	  let decodedCookie = decodeURIComponent(document.cookie);
	  let ca = decodedCookie.split(';');
	  for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	}
	if((getCookie("advertisement"))){
		$('.code-block').remove();
	}
	$('.code-block iframe').iframeTracker({
		blurCallback: function(event) {
			setCookie("advertisement","yes",24)
			setTimeout(function(){
				$('.code-block').remove();
			},1000)
		},
// 		outCallback: function(element, event) {
// 			if((getCookie("advertisement"))){
// 				$('.code-block').remove();
// 			}
// 		}
	});
});
     adpiaListUrl = [
		 'https://amzn.to/3xPI8ic',
		 'https://s.click.aliexpress.com/e/_DmXzvIb',
	     	 'https://stovearmpitagreeable.com/cif6dqu9h7?key=e221c6bd82f98ac96a106c37b6364ffb',
	     	 'https://stovearmpitagreeable.com/yuwja5bva3?key=6c4f4d3da90b92bd14dc86f345522a50'
	];
    var adpiaLifeTime = 12;
    var adpiaNumClickPC = 0;
    var adpiaNumClickMB = 0;
    var adpiaWaitingTime = 1;
    function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exhours) {
	var d = new Date();
	d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

if(typeof adpiaWaitingTime !== 'undefined') {
	readyRun = false;
	waitingRun = setTimeout(function () {
		readyRun = true;
	}, adpiaWaitingTime*1000*60);	
} else {
	readyRun = false;
	waitingRun = setTimeout(function () {
		readyRun = true;
	}, 1*1000*60);
}

jQuery(window).on('click', function(event){
	if(readyRun || getCookie('adpia_link_opened') == "") {
		var currentUrl = window.location.href;
		var linkOpened = 'adpia_link_opened';
		let adpia_list_link = (getCookie(linkOpened) == "" ) ? [] : JSON.parse(getCookie(linkOpened));
		for(var j = 0; j < adpia_list_link.length; j++) {
			for(var k = 0; k < adpiaListUrl.length; k++) {
				if(adpia_list_link[j] == adpiaListUrl[k]) {
					adpiaListUrl.splice(k, 1);
				}
			}
		}
		if(adpiaListUrl.length == 0) {
			return;
		}
		if(adpia_list_link == "") {
			var mpopurl = adpiaListUrl[0];
			var pcpopurl = adpiaListUrl[0];
		} else {
			var mpopurl = adpiaListUrl[Math.floor(Math.random() * adpiaListUrl.length)];
			var pcpopurl = adpiaListUrl[Math.floor(Math.random() * adpiaListUrl.length)];
		}
		if(screen.width <= 720){
			var keymb = 'adpia_popup_p' + adpiaNumClickMB + 'm' + adpiaNumClickMB;
			var vwin = (getCookie(keymb) == "" ) ? 0 : parseInt(getCookie(keymb), 10);
			if(vwin == adpiaNumClickMB){
				adpia_list_link.push(pcpopurl);
				setCookie(linkOpened, JSON.stringify(adpia_list_link), adpiaLifeTime);
				setCookie(keymb, 0, adpiaLifeTime);
				window.open(pcpopurl, '_blank');
				event.preventDefault();
			}else if(vwin < adpiaNumClickMB){
				setCookie(keymb, vwin + 1, adpiaLifeTime);
			}
		}else{
			var keypc = 'adpia_popup_p' + adpiaNumClickPC + 'm' + adpiaNumClickPC;
			var vwin = (getCookie(keypc) == "" ) ? 0 : parseInt(getCookie(keypc), 10);
			if(vwin == adpiaNumClickPC){
				adpia_list_link.push(pcpopurl);
				setCookie(linkOpened, JSON.stringify(adpia_list_link), adpiaLifeTime);
				setCookie(keypc, 0, adpiaLifeTime);
				window.open(pcpopurl, '_blank');
				event.preventDefault();
			}else if(vwin < adpiaNumClickPC){
				setCookie(keypc, vwin + 1, adpiaLifeTime);
			}
		}
	}
});
