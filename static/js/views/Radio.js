import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle("Radio");
   }

   async getHtml() {
      return `
         <h1>Radio</h1>    
      `;
   }
}