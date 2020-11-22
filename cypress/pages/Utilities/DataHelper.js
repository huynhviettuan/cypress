const faker = require('faker');
function getRandomDOB() {
    let date = new Date(faker.date.between('1970-01-01', '2000-01-01'));
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    let formatted_date = dd + '/' + mm + '/' + yyyy;
    return formatted_date;
}
export function generateUser() {

    const gender = ["m", "f"];
    const randomGender = gender[Math.floor(Math.random() * gender.length)];

    return {
        fullname: faker.name.firstName() + ' ' + faker.name.lastName(),
        address: Math.floor(Math.random() * 1000) + ' ' + faker.address.streetAddress(),
        city: faker.address.city(),

        gender : randomGender,

        state: faker.address.state(),

        pin: Math.floor(Math.random() * 1000000),

        phone: Math.floor(Math.random() * 100000000000),

        dob: getRandomDOB(),

        email: faker.name.firstName() + ' ' + faker.name.lastName() + Math.floor(Math.random() * 1000000000) + 1 + '@gmail.com',

        password: Math.floor(Math.random() * 10000000000)
    }
}