let t = parseFloat(document.getElementById('temp').inner.HTML);
let w = parseFloat(document.getElementById('wind').inner.HTML);
let a = calc(t,w);

fuction calc(x,y) {
	let result = 35.74 + (0.6215 * x) 
	- (35.75 * Math.pow(y, 0.16)) 
	+ (0.4275 * x * Math.pow(y, 0.16));
	return result.toFixed(1);
}

if(t <= 50 && w > 3) {
	let finalResult = `${a}°F`
}
else {
	let finalResult = 'N/A'
}
