if (!arguments[0].__dataHost || arguments[0].__dataHost.tagName !== 'SB-INPUT') return true;
arguments[0].__dataHost.value = arguments[1];
return false;