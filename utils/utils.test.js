const utils = require('./utils');
const expect = require('expect');

it('Should Add two numbers', () => {
    var res = utils.add(30,40);
    expect(res).toBe(70).toBeA('number');
// if(res !== 70)
//     throw new Error(`Expected 70 but got ${res}`);
});

it('Should comute square', () => {
var res = utils.square(5);

expect(res).toBe(25).toBeA('number');
if(res !== 25)
throw new Error(`Expected 25 but got ${res}`);
});

it('Should verify First name and Last name are set', () => {
    var user = {
        age:23,
        location:'Indore'
    }
    var res = utils.setName(user,'Anubhav Jaiswal');

    expect(res).toInclude({
        firstName:'Anubhav',
        lastName:'Jaiswal'
    }).toBeA('object');

    expect(user).toEqual(res);
});

// it('should expect some values',() => {
    // expect(12).toNotBe(1);  //passes
    // expect(12).toNotBe(12); //fails
    // expect({name:'Anubhav'}).toBe({name:'Anubhav'}); // fails
    //expect({name:'Anubhav'}).toEqual({name:'Anubhav'}); //pass
    // expect([2,3,4]).toInclude(1); fails
    // expect([1,2,3,4]).toExclude(5); pass
    // expect({
    //     name:'Anubhav',
    //     age:25,
    //     location:'indore'
    // }).toExclude({
    //     age:25
    // }) fails
    //  pass
// })

it('Should add two numbers asynchronously',(done) => {
    utils.asyncAdd(10,20,(sum) => {
        expect(sum).toBe(30).toBeA('number');
        done();
    });
});

it('Should Square number asynchronously',(done) => {
    utils.asyncSquare(5,(square) => {
        expect(square).toBe(25).toBeA('number');
        done();
    });
});