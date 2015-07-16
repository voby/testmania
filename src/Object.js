var Man = {
	constructor: function(name, age) {
		this.name = name;
		this.age = age;
		this.live = function() {
			return this.name + ' lives nowhere';
		};
		return this;
	}
};

var Student = Object.create(Man, {
	study: {
		value: function() {
			return this.name + ' says: "Learning is fun"';
		}
	}
});

var Professor = Object.create(Man, {
	constructor: {
		value: function(name, age, student) {
			Man.constructor.apply(this, arguments);
			this.favoriteStudent = student;
			this.experienced = true;
	
			return this;
		},
		writable: true
	},

	setFavoriteStudent: {
		value: function(student) {
			if (arguments.length !== 1) {
				throw new Error('Professor expects 1 argument but given ' + arguments.length);
			}
			if (typeof student !== 'string') {
				throw new Error('Professor expects string as a argument');
			}
			this.favoriteStudent = student;
		}
	},

	toggleExperience: {
		value: function() {
			this.experienced = !this.experienced;
		}
	}
});

module.exports = {
	Man: Man,
	Student: Student,
	Professor: Professor
};
