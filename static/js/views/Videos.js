import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle("Videos");
   }

   async getHtml() {
      return `
         <h1>Videos</h1>
      `;
   }
}