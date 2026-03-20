const request = require("supertest"); //importing supertest package
const app = require("../app"); //importing the app module

describe("Calculator Routes", () => { //describes all routes related to calculator so only need it once
  let number1 = Math.floor(Math.random() * 1_000_000); //generating random number between 0 and 1 million
  let number2 = Math.floor(Math.random() * 1_000_000);

  test("Get /calculate/add => sum of numbers", () => {
    return request(app) //returns the supertest request object pf app and passing the entire operation to it and returning it
      .get(`/calculate/add?num1=${number1}&num2=${number2}`) //must use the same path as defined in the route
      .expect("Content-Type", /json/) //what type of data is expected in return
      .expect(200) // expect the status code to be 200 - success
      .then((response) => { //handling the response using then method
        expect(response.body).toEqual({ //expecting the body of the response to be equal to
          result: (number1 + number2), //sum of the two numbers
        });
      });
  });

  test("Get /calculate/subtract => subtract of numbers", () => {
    //adding a test case for subtract route
    return request(app)
      .get(`/calculate/subtract?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200) //chaining methods
      .then((response) => {
        expect(response.body).toEqual({  //toEqual is a matcher that checks for exact equality
          result: (number1 - number2), //difference of the two numbers
        });
      });
  });

  test("Get /calculate/divide => divide of numbers", () => {
    return request(app)
      .get(`/calculate/divide?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: (number1 / number2),
        });
      });
  });

  test("Get /calculate/multiply => multiply of numbers", () => {
    return request(app)
      .get(`/calculate/multiply?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: (number1 * number2),
        });
      });
  });
});
