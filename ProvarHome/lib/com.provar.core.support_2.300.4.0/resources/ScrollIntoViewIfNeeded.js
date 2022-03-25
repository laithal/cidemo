var el = arguments[0];
var topOfElement = arguments[1] == undefined ? true : arguments[1];
if(el && (typeof el.getBoundingClientRect === 'function')){
	 var rect = el.getBoundingClientRect();
	 var inView = (
		        rect.top >= 0 &&
		        rect.left >= 0 &&
		        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
		        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		    );
	
		if (!inView){
			arguments[0].scrollIntoView(topOfElement);
		}
}
