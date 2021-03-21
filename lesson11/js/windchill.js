let t = parseFloat(document.getElementById('temp').inner.HTML);
let w = parseFloat(document.getElementById('wind').inner.HTML);
let a = calc(t,w);

fuction calc(a,b) {
	let result = 35.74 + (0.6215 * a) 
	- (35.75 * Math.pow(b, 0.16)) 
	+ (0.4275 * a * Math.pow(b, 0.16));
	return result.toFixed(1);

}

if (t <= 50 && w > 3) {
	let finalResult = `${a}°F`
}
else {
	let finalResult = 'N/A'
}

document.getElementById('windchill').innerHTML = finalResult;

