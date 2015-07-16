function Man (name, age) {
	this.name = name;
	this.age = age;
}

Man.prototype.live = function() {
	return this.name + ' lives nowhere';
};

function Student(name, age) {
	Man.apply(this, arguments);
}

Student.prototype = new Man();
Student.prototype.study = function() {
	return this.name + ' says: "Learning is fun"';
};

function Professor(name, age, student) {
	Man.apply(this, arguments);
	this.favoriteStudent = student;
	this.experienced = true;
}

Professor.prototype = new Man();
Professor.prototype.setFavoriteStudent = function(student) {
	if (arguments.length !== 1) {
		throw new Error('Professor expects 1 argument but given ' + arguments.length);
	}
	if (typeof student !== 'string') {
		throw new Error('Professor expects string as a argument');
	}
	this.favoriteStudent = student;
};
Professor.prototype.toggleExperience = function() {
	this.experienced = !this.experienced;
};

module.exports = {
	Man: Man,
	Student: Student,
	Professor: Professor
};
