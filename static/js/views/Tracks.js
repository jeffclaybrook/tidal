import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle("Tracks");
   }

   async getHtml() {
      return `
         <h1>Tracks</h1>
      `;
   }
}