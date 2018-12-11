import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    template: `<div data-theme="dark"  data-callback="onCaptcha"></div>`
})
export class gsCaptchaComponent implements OnInit {

    constructor(private elementRef: ElementRef) {
    }
     ngOnInit() {        
     }
}