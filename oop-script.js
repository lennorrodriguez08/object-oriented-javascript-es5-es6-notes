        // function Person(firstName, lastName, dob) {

        //     this.firstName = firstName;
        //     this.lastName = lastName;
        //     this.birthday = new Date(dob);
        // }

        // Person.prototype.calculateAge = function () {
        //     let calcAge = Date.now() - this.birthday.getTime();
        //     return new Date(calcAge).getUTCFullYear() - 1970;
        // }

        // Person.prototype.greeting = function() {
        //     return `Hello ${this.firstName} ${this.lastName}`;
        // }

        // function Customer(firstName, lastName, dob, phone, membership) {

        //     Person.call(this, firstName, lastName, dob);

        //     this.phone = phone;
        //     this.membership = membership;
        // }

        // Customer.prototype = Object.create(Person.prototype);

        // Customer.prototype.constructor = Customer;

        // const person1 = new Customer('Via', 'Arellano', '06-13-1993', '555-555', 'Basic');

        // console.log(person1);
        // console.log(person1.greeting());

        // ES6 =======================================

        class Person {
            constructor(firstName, lastName, dob) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.birthday = new Date(dob);
            }

            greeting() {
                return `Hello there ${this.firstName} ${this.lastName}`;
            }

            calculateAge() {
                let calculate = Date.now() - new Date(this.birthday).getTime();
                return new Date(calculate).getUTCFullYear() - 1970;
            }

            getsMarried(newLastname) {
                return this.lastName = newLastname;
            }

            static addNumbers(x, y) {
                return Math.abs(x - y);
            }

        }

        class Customer extends Person {
            constructor(firstName, lastName, phone, membership) {
            super(firstName, lastName);

            this.phone = phone;
            this.membership = membership;

            }
        }

        // const person1 = new Person('Ronnel', 'Rodriguez', '09-08-1996');
        // console.log(person1);
        // console.log(person1.calculateAge());
        // console.log(person1.greeting());
        // console.log(person1.hasOwnProperty('firstName'));
        // console.log(Person.addNumbers(5, 10));
        
        // person1.getsMarried('Arellano');
        // console.log(person1);

        const person2 = new Customer('Via', 'Arellano', '555-555', '06-13-1993');
        console.log(person2);