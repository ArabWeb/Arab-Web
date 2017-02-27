







document.write('<div class="chatbox" style="position: fixed; z-index: 10001; bottom: 9px; max-width: 267px; right: 30px; text-align: center; margin: auto; ">');
document.write('<div class="smartchatbox-show-403232499" style="right: 0; cursor: pointer; text-align: left; margin: auto;  border-radius: 4px; padding: 3px 0px 3px 10px; background-color: #3056c0;"><img src="//yourshoutbox-quizme.netdna-ssl.com/app/webroot/shoutbox/img/chat.png" style="cursor: pointer; text-align: center; margin-top: 6px; margin: 0; margin-left: 5px; padding: 0;"></img></div>');
document.write('<div class="smartchatbox-403232499" style="display: none; margin-top: 0px;">');


document.write('<div id="smartchatbox_img403232499" style="width: 265px; height: 350px; overflow: hidden; margin: auto; padding: 0; border: 1px solid #120878;  background: url(\'http://www3.smartchatbox.com/shoutbox/img/backgrounds/185_small.jpg\') 50% 50%; ">');
document.write('<div id="smartchatbox403232499" style="width: 265px; height: 350px; overflow: hidden; margin: auto; padding: 0; border:0; ">');

document.write('<iframe src="http://www3.smartchatbox.com/shoutbox/sb.php?key=403232499" scrolling="no" frameborder="0" width="265px" height="350px" style="border:0; margin:0; padding: 0;">');
document.write('</iframe></div></div>');



document.write('</div>');
document.write('</div>');



	(function () {	
		function smartchatbox_loadscript_403232499(url, callback) {

			var script = document.createElement("script")
			script.type = "text/javascript";

			if (script.readyState) { //IE
				script.onreadystatechange = function () {
					if (script.readyState == "loaded" || script.readyState == "complete") {
						script.onreadystatechange = null;
						callback();
					}
				};
			} else { //Others
				script.onload = function () {
					callback();
				};
			}

			script.src = url;
			document.getElementsByTagName("head")[0].appendChild(script);
		}
				
		function smartchatbox_iframe_setup_403232499() {
			ysb_jQuery(document).ready(function() {
							ysb_jQuery(document).on('click', '.smartchatbox-show-403232499', function() {
						ysb_jQuery(".smartchatbox-403232499").toggle('slow');
				});			
						
						
			});
		}
		
		if(!(window.ysb_jQuery)) {
			smartchatbox_loadscript_403232499("//yourshoutbox-quizme.netdna-ssl.com/app/webroot/shoutbox/js/ysb_jQuery.js?ver=1.0", function () { smartchatbox_iframe_setup_403232499(); });
		} else {
			smartchatbox_iframe_setup_403232499();
		}

	})();
	
