var el = arguments[0];
if(document.createEvent)
{
	var evObj = document.createEvent('MouseEvents');
	evObj.initEvent('click',true, false);
	el.dispatchEvent(evObj); 
	el.dispatchEvent(evObj);
}
