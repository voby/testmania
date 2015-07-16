var Man = require('../src/Object.js').Man;
var Student = require('../src/Object.js').Student;
var Professor = require('../src/Object.js').Professor;

describe('Object.create way', function() {
	var sam = Object.create(Man).constructor('Sam', 17);
	var frodo = Object.create(Student).constructor('Frodo', 33);
	var bilbo = Object.create(Professor).constructor('Bilbo', 111, 'Frodo');

	require('./common.js')(sam, frodo, bilbo);
});
