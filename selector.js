function $(val, ...args) {
	let el = val[0].trim();
	const valF = !Number.isNaN(parseInt(el[0])) || el[0] === "-";
	let chars = "";
	if(valF && el.match(/:/))
		for(let ch of el) {
			chars += ch;
			if(ch === ":")
			break;
		}
	let F = 0,
	    L = chars.length-1,
	    index;
	if(F - L) {
	  el = el.slice(L + 1, el.length).trim();
	  index = chars.slice(F, L);
	  index = parseInt(index);
	}
	let query = document.querySelectorAll(el);
	if(!Number.isNaN(index) && query)
	  el = query[index] ||query[query.length + index];
	else {
	  if(query.length === 1)
	    el = query[0];
	  else if(query.length > 1)
	    el = query;
	  else
	    el = undefined;
	}
	return el;
}