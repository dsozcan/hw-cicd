import login from "../pages/login"
import HomePage from "../pages/HomePage"
describe('homework 2', () => {

let data;

it('TC01 login ilk deneme', () => {

    login.navigateUrl();
    login.userLogIn("user888@gmail.com", "1234567890");
    HomePage.userLogOut();

})

it('TC02 login ikinci deneme', function(){

    login.navigateUrl();
    login.userLogIn("testowyqa@qa.team", "QA!automation-1");
    HomePage.userLogOut();

})

})