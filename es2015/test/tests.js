var expect = chai.expect;
var should = chai.should();

describe( "Compare Numbers - es2015", () => {
  const one = 1;
  const two = 2;

  it( "1 should equal 1", () => {
    expect( one ).to.equal( one );
  } );

  it( "2 should be greater than 1", () => {
    two.should.be.greaterThan( one );
  } );

  it( "1 should be greater than 2", () => {
    one.should.be.greaterThan( two, "This should fail." );
  } );

} );

