import { Directive, OnInit, Renderer2, ElementRef, Output } from '@angular/core';
import { GcaptchaServiceService } from './gcaptcha-service.service';
import { ConfigService } from './config.service';

@Directive({
  selector: '[appGscaptcha]',
  outputs: ['captcharesponse']
})
export class GscaptchaDirective implements OnInit {
  
  private THEME = "dark";
  constructor(private rndr: Renderer2,
    private el: ElementRef,
    private captchaService:GcaptchaServiceService,
    private configService: ConfigService) { }
    
  ngOnInit() {

    this.rndr.addClass(this.el.nativeElement, 'g-recaptcha');
    this.rndr.setAttribute(this.el.nativeElement, "data-theme", this.THEME);

    (window as any).captchaLoaded = () => {
      (grecaptcha as any).render(this.el.nativeElement, {
        'sitekey': this.configService.SITE_KEY,
        'callback': (ngresponse) => {
          // captcha is cooked so lets announce it
          this.captchaService.announceCaptcha(ngresponse);
        }
      });
    }
  }
}