import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle("Artists");
   }

   async getHtml() {
      return `
         <h1>Artists</h1>
      `;
   }
}