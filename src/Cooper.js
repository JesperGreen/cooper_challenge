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
      case (age.between(13, 14)):
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

      case (age.between(15, 16)):
        switch (true) {
          case (distance <= 2199):
            return 'Poor';
          case (distance.between(2200, 2299)):
            return 'Below average';
          case (distance.between(2300, 2499)):
            return 'Average';
          case (distance.between(2500, 2799)):
            return 'Above average';
          case (distance >= 2800):
            return 'Excellent';
        }
        break;


      case (age.between(17, 19)):
        switch (true) {
          case (distance <= 2299):
            return 'Poor';
          case (distance.between(2300, 2499)):
            return 'Below average';
          case (distance.between(2500, 2699)):
            return 'Average';
          case (distance.between(2700, 3000)):
            return 'Above average';
          case (distance > 3000):
            return 'Excellent';
        }
        break;


      case (age.between(20, 29)):
        switch (true) {
          case (distance < 1600):
            return 'Poor';
          case (distance.between(1600, 2199)):
            return 'Below average';
          case (distance.between(2200, 2399)):
            return 'Average';
          case (distance.between(2400, 2799)):
            return 'Above average';
          case (distance >= 2800):
            return 'Excellent';
        }
        break;


      case (age.between(30, 39)):
        switch (true) {
          case (distance < 1500):
            return 'Poor';
          case (distance.between(1500, 1899)):
            return 'Below average';
          case (distance.between(1900, 2299)):
            return 'Average';
          case (distance.between(2300, 2700)):
            return 'Above average';
          case (distance > 2700):
            return 'Excellent';
        }
        break;


      case (age.between(40, 49)):
        switch (true) {
          case (distance < 1400):
            return 'Poor';
          case (distance.between(1400, 1699)):
            return 'Below average';
          case (distance.between(1700, 2099)):
            return 'Average';
          case (distance.between(2100, 2500)):
            return 'Above average';
          case (distance > 2500):
            return 'Excellent';
        }
        break;


      case (age >= 50):
        switch (true) {
          case (distance < 1300):
            return 'Poor';
          case (distance.between(1300, 1599)):
            return 'Below average';
          case (distance.between(1600, 1999)):
            return 'Average';
          case (distance.between(2000, 2400)):
            return 'Above average';
          case (distance > 2400):
            return 'Excellent';
        }
        break;
    }
  }
};
