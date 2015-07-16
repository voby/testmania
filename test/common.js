var should = require('chai').should();

module.exports = function(sam, frodo, bilbo) {
	describe('Man', function() {
		it('Man should have name and age', function() {
			var name = sam.name;
			name.should.equal('Sam');
			var age = sam.age;
			age.should.equal(17);
		});

		it('Man.live() should return a proper string: "Sam lives nowhere"', function() {
			var liveText = sam.live();
			liveText.should.equal('Sam lives nowhere');
		})
	});

	describe('Student', function() {
		it('Student should have name and age', function() {
			var name = frodo.name;
			name.should.equal('Frodo');
			var age = frodo.age;
			age.should.equal(33);
		});

		it('Student.live() should return a proper string: "Frodo lives nowhere"', function() {
			var liveText = frodo.live();
			liveText.should.equal('Frodo lives nowhere');
		});

		it('Student.study() should return a proper string: "Frodo says: "Learning is fun""', function() {
			var studyText = frodo.study();
			studyText.should.equal('Frodo says: "Learning is fun"');
		});
	});

	describe('Professor', function() {
		it('Professor should have name, age and favorite student', function() {
			var name = bilbo.name;
			name.should.equal('Bilbo');
			var age = bilbo.age;
			age.should.equal(111);
			var favoriteStudent = bilbo.favoriteStudent;
			favoriteStudent.should.equal('Frodo');
			var experienced = bilbo.experienced;
			experienced.should.be.ok;
		});

		it('Professor.live() should return a proper string: "Bilbo lives nowhere"', function() {
			var liveText = bilbo.live();
			liveText.should.equal('Bilbo lives nowhere');
		});

		it('Professor.setFavoriteStudent() should change favorite student', function() {
			var favoriteStudent = bilbo.favoriteStudent;
			favoriteStudent.should.equal('Frodo');
			
			bilbo.setFavoriteStudent('Sam');
			favoriteStudent = bilbo.favoriteStudent;
			favoriteStudent.should.equal('Sam');
			
			bilbo.setFavoriteStudent('Sauron');
			favoriteStudent = bilbo.favoriteStudent;
			favoriteStudent.should.equal('Sauron');
		});

		it('Professor.setFavoriteStudent() should take exactly 1 argument', function() {
			(function(){bilbo.setFavoriteStudent()}).should.throw('Professor expects 1 argument but given 0');
			(function(){bilbo.setFavoriteStudent('One','Two','Three')}).should.throw('Professor expects 1 argument but given 3');
		});

		it('Professor.setFavoriteStudent() should take only strings', function() {
			(function(){bilbo.setFavoriteStudent(1)}).should.throw('Professor expects string as a argument');
			(function(){bilbo.setFavoriteStudent({})}).should.throw('Professor expects string as a argument');
		});

		it('Professor.toggleExperience should toggle experienced', function() {
			var experienced = bilbo.experienced;
			experienced.should.be.ok;

			bilbo.toggleExperience();
			var experienced = bilbo.experienced;
			experienced.should.be.false;

			bilbo.toggleExperience();
			var experienced = bilbo.experienced;
			experienced.should.be.ok;
		});
	});
};
