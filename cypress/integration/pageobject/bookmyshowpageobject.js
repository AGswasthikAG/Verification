/// <reference types="Cypress" />
class bookmyshow {
   banglorelocation() {
      return cy.get("[alt='BANG']")
   }
   searchtextbox() {
      return cy.contains("Search for Movies, Events, Plays, Sports and Activities").type("pvr")
   }
   koramangal() {
      return cy.contains(": The Forum Mall, Koramangala")
   }
   firstmovie() {
      return cy.get("ul[id='showEvents']>ul>li:nth-of-type(2)>.listing-info>.details>.__name")
   }
   firstmovieandfirstshow() {
      return cy.get("ul[id='showEvents']>ul>li:nth-of-type(2)>.body.__cn-list>._available.showtime-pill-container:first-of-type")
   }
   acceptterms() {
      return cy.get("#btnPopupAccept")
   }
   selectseatbtn() {
      return cy.get("#proceed-Qty")
   }
   selectseats() {
      // return cy.get(".SRow1>#A_11_015>._available")
      return cy.get("#A_3_021")
   }
   selectedseatstodisplay() {

      return cy.get("._available._selected").invoke('text').then((text) => {
         cy.log(text)
      });
   }




}
export default bookmyshow