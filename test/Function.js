var Man = require('../src/Function.js').Man;
var Student = require('../src/Function.js').Student;
var Professor = require('../src/Function.js').Professor;

describe('Function way', function() {
	var sam = new Man('Sam', 17);
	var frodo = new Student('Frodo', 33);
	var bilbo = new Professor('Bilbo', 111, 'Frodo');
	
	require('./common.js')(sam, frodo, bilbo);
});
