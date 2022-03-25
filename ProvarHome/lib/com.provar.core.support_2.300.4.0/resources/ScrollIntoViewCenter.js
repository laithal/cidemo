var el = arguments[0];
var isIEDriver = arguments[1];
var isFirefoxDriver = arguments[2];
if(el) {
	if (isIEDriver) {
		// In case of IE-Browser by scrollIntoView() we moving towards the element but it will move to the top view of that 
		// element. To align the element to center we do calculation on Pixels of the current screen.  
		el.scrollIntoView();
		var top = el.getBoundingClientRect().top;
		var middleY = window.innerHeight/2;
		var offsetY = 0;
		if (top < middleY) {
		 offsetY = middleY - top;
		}
		window.scroll(0,window.pageYOffset-offsetY);
	} else {
		if (el.tagName === 'SLOT') {
			el = el.parentNode ? el.parentNode : el;
		}
		if (el.closest('div.listViewContent.slds-table--header-fixed_container')) {
			if (isFirefoxDriver) {
				el.scrollIntoView({ block: "nearest" });	
			} else {
				el.scrollIntoViewIfNeeded({ behaviour: "smooth" });	
			}
		} else {
			el.scrollIntoView({ block: "center", behaviour: "smooth" });
		}
	}
}