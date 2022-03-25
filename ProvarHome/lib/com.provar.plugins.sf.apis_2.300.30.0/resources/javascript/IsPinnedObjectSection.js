var xpathToMatch = "(//div[contains(@Class, 'pinned')]//one-record-home-flexipage2//*[starts-with(name(),'forcegenerated-flexipage_')])[1]";
var objectName = arguments[0];
var element = document.evaluate(xpathToMatch, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
if(!element) return false; 
return (element.objectApiName || '').toLowerCase() === objectName.toLowerCase();