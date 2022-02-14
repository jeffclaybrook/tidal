import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle("Albums");
   }

   async getHtml() {
      return `
         <h1>Albums</h1>
      `;
   }
}