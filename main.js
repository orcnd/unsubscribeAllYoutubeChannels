var waitTimeout=1;
var coolDownTimeout=7;
var count = document.querySelectorAll(
  "ytd-channel-renderer tp-yt-paper-button.style-scope.ytd-subscribe-button-renderer"
);
var i = 0;
function deleteRecursive() {   
    count[i].click();
	
	var cp=waitTimeout*1000; //wait a sec
    setTimeout(function () {
        document.getElementById("confirm-button").click();
    },cp-400); //wait for popup 
    i++;
	if (i%10==0 && i>0) cp=coolDownTimeout*1000; // wait little bit more every 6 unsub to not get blocked
	if (i<count.length) setTimeout(deleteRecursive,cp)
}
deleteRecursive();
