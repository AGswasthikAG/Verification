import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import bookmyshow from '../../pageobject/bookmyshowpageobject'
const data = new bookmyshow()

Given('User have valid url', () => {
    cy.visit(Cypress.env('assignemnt URL'))

})

When("user select the location", () => {

    data.banglorelocation().click()

})
And("user search the PVR", () => {
    data.searchtextbox()

})
And("user select the kormangal", () => {
    data.koramangal().click()


})
And("user select the firstmovie snd firstshow", () => {
    data.firstmovieandfirstshow().click()

})
And("user accept the terms and condition", () => {
    data.acceptterms().click()

})
And("user click the select seat button", () => {
    data.selectseatbtn().click()

})
And("user choose the seats number", () => {

    data.selectseats().click()
})

Then("displyed the seaat number", () => {
    data.selectedseatstodisplay()

})