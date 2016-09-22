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

  Person.prototype.getCooperResultsForMales = function(distance) {
    var age = this.age;
    switch (true) {
      case (age.between(13,14)):
        switch (true) {
          case (distance <= 2099):
            return 'Poor';
          case (distance.between(2100, 2199)):
            return 'Below average';
          case (distance.between(2200, 2399)):
            return 'Average';
          case (distance.between(2400, 2699)):
            return 'Above average';
          case (distance >= 2700):
            return 'Excellent';
        }
        break;
    }
  }
};
