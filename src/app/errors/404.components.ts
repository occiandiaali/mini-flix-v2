import { Component } from '@angular/core';

@Component({
    template: `<h1 class="errorMessage">404'd - That is all we know!</h1>`,
    styles: [`
        .errorMessage {
            background-color: #D2E7EE;
            margin-top: 150px;
            fontsize: 170px;
            text-align: center;
            color: #f00;
        }`]
})
export class Error404Component {
    constructor() {}
}