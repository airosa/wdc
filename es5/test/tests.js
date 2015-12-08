( function() {

  var expect = chai.expect;
  var should = chai.should();

  describe( "Compare Numbers", function() {
    var one = 1;
    var two = 2;

    it( "1 should equal 1", function() {
      expect( one ).to.equal( one );
    } );

    it( "2 should be greater than 1", function() {
      two.should.be.greaterThan( one );
    } );

    it( "1 should be greater than 2", function() {
      one.should.be.greaterThan( two, "This should fail." );
    } );

  } );

} ).call( this );

