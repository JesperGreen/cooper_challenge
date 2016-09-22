describe("Person", function() {

  beforeEach(function) {
    person = new Person({
      gender: 'Male',
      age: 23
    });
  };

  it("Should get a Poor result", function(){
    person.cooperDistance(1500);
    expect(person.cooperMessage).toBe('Poor')
  })

  it("Should get a Excellent result", function(){
    person.cooperDistance(5000);
    expect(person.cooperMessage).toBe('Excellent')
  })
});
