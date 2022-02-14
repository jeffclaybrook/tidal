import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
   constructor(params) {
      super(params);
      this.setTitle("Playlists");
   }

   async getHtml() {
      return `
         <h1>Playlists</h1>
      `;
   }
}