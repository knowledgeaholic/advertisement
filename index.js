jQuery(document).ready(function($){
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
// 	$(".code-block").addClass('code-block-style')
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
