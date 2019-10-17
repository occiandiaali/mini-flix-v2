import { Component } from '@angular/core';

@Component({
    template: `
            <h1 class="errorMessage">404'd - That is all we know!</h1>
            <img src="./../../../assets/popcorn.png" alt="popcorn pack" id="pop-pack"/>
            <p>Image by <a href="https://pixabay.com/users/Clker-Free-Vector-Images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=312386">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=312386">Pixabay</a></p>
            `,
    styles: [`
        .errorMessage {
            background-color: #D2E7EE;
            margin-top: 150px;
            fontsize: 170px;
            text-align: center;
            color: #f00;
        }

        #pop-pack {
            width: 150px;
            height: 200px;
            display: block;
            margin: auto;
        }

        p {
            text-align: center;
        }
        `]
})
export class Error404Component {
    constructor() {}
}