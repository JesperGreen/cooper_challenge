function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;

  Person.prototype.cooperDistance = function (distance) {
    if (this.gender.toUpperCase() = 'MALE') {
      this.cooperMessage = this.getCooperResultsForMales(distance);
    } else {
      this.cooperMessage = this.getCooperResultsforFemales(distance);
    }
  };
};
