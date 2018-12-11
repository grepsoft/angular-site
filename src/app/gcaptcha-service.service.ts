import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GcaptchaServiceService {

  /*
    Subject is multicast. Observable is unicast
    Unicasting means that each subscribed observer owns
    an independent execution of the Observable    
  */
  private captchaReady = new Subject<string>();

  // outsiders can subscribe using this observable
  captchaAnnounced = this.captchaReady.asObservable();

  captchaResponse:string;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any,
  private configService: ConfigService) { this.init(); }

  init() {

    if(isPlatformBrowser(this.platformId)) {
      let script = document.createElement("script") as HTMLScriptElement;
      script.innerHTML = '';
      script.src = this.configService.CAPTCHA_URL;
      script.async = true;
      script.defer = true;
  
      document.head.appendChild(script);
    }
  }

  announceCaptcha(captcha) {
    // whoever needs it let them have it
    this.captchaReady.next(captcha);
  }
}
