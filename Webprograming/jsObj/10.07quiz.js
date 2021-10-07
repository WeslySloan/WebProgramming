var circle = {
	// 프로퍼티 생성 및 초기화
	circle : "circle", 

	// 메소드 작성
	inquiry : function () { return this.balance; }, // 잔금 조회
	
		return money;
} 





const circle = {
    firstName: 'Gildong',
    lastName: 'Hong',
    getName: function() {return this.lastName + ' ' + this.firstName;},
    // getLastName: function getLastName() {return 'Mr. ' + this.lastName; },   // ES5
    getLastName() {return 'Mr. ' + this.lastName; },   // ES6
};

console.log(person.getName());     // Hong Gildong
console.log(person.getLastName());  // Mr. Hong
