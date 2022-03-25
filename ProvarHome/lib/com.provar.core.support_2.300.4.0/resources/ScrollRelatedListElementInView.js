var relatedListXpath = arguments[0];
var callable = arguments[arguments.length - 1];
let iterator = 0;
var flag = false;
let element = document.evaluate(relatedListXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (!element) {
	callable();
	return;
}
let interval = setInterval(() => {
    iterator++;
	element && element.scrollIntoView({ block: "center", behaviour: "smooth" });
	element = document.evaluate(relatedListXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	if (element) {
        let isLoaded = document.evaluate(".//span[contains(@class, 'lds-shrink-none')]", element, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let isRendering = document.evaluate("//div[@data-this-triggers-rerenders and contains(@class, 'slds-hide')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let isBodyPresent = document.evaluate(".//div[contains(@class, 'forceRelatedListPreview') or contains(@class,'listDisplays')]", element, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        flag = (isLoaded && isLoaded.hasAttribute("title") && isBodyPresent && !isRendering); 
	}
    if (flag || iterator === 120) {
        clearInterval(interval);
        callable();
    }
},500);