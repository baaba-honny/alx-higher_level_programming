#!/usr/bin/node
if (process.argv[2] === undefined || is NaN(process.argv[2])) {
	console.log(Missing number of occurences');
} else {
	const x = Number(process.argv[2]);
	let i = 0;
	while (i < x) {
		console.log('C is fun');
		i++;
	}
}
