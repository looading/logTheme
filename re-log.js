const tmp = {
	log: console.log,
	dir: console.dir,
	info: console.info,
	time: console.time,
	warn: console.warn,
	error: console.error,
	trace: console.trace,
	assert: console.assert,
	timeEnd: console.timeEnd
}

console.log = function(...arg) {
	arg[0] = `${arg[0]}`.info;
	tmp.log(...arg);
}
console.dir = function(...arg) {
	arg[0] = `${arg[0]}`.green;
	tmp.dir(...arg);
}
console.info = function(...arg) {
	arg[0] = `${arg[0]}`.info;
	tmp.info(...arg);
}
console.time = function(...arg) {
	arg[0] = `${arg[0]}`.red;
	tmp.time(...arg);
}
console.warn = function(...arg) {
	arg[0] = `${arg[0]}`.warn;
	tmp.warn(...arg);
}
console.error = function(...arg) {
	arg[0] = `${arg[0]}`.error;
	tmp.error(...arg);
}
console.trace = function(...arg) {
	arg[0] = `${arg[0]}`.red;
	tmp.trace(...arg);
}
console.assert = function(...arg) {
	arg[0] = `${arg[0]}`.red;
	tmp.assert(...arg);
}
console.timeEnd = function(...arg) {
	arg[0] = `${arg[0]}`.red;
	tmp.timeEnd(...arg);
}

module.exports = console;