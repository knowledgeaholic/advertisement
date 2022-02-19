window.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll(".code-block").forEach(e => e.classList.add('code-block-style'))
	var callElement = document.querySelectorAll(".code-block")
	function setCookie(cname, cvalue, exdays) {
		  const d = new Date();
		  var setTimeCookie= d.setTime(d.getTime() + (exdays*1*60*60*1000));
		  let expires = "expires="+ d.toUTCString();
		  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	for(var i = 0;i < callElement.length;i++ ){
		callElement[i].onclick = function(){
			setCookie("advertisement","yes",0.005)
			callElement.forEach(e => e.remove());
		}
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
	console.log("cookie: " + getCookie("advertisement"))
	if((getCookie("advertisement"))){
		callElement.forEach(e => e.remove());
	}
});
