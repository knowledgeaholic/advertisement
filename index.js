jQuery(document).ready(function($){
	$(".code-block").remove()		
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
			setCookie("advertisement","yes",0.085)
		},
		outCallback: function(element, event) {
			if((getCookie("advertisement"))){
				$('.code-block').remove();
			}
		}
	});
});
