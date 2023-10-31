function TwoNumbers(a, b) {
  this.a = a;
  this.b = b;

//   this.sum = function () {
//     return this.a + this.b;
//   };
}

TwoNumbers.prototype.sum = function () {
    return this.a + this.b;
};

var twoNumbers = new TwoNumbers(3, 4);

console.log(twoNumbers.sum()); // 7