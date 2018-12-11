import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  SITE_KEY = '<YOUR GCAPTCHA CLIENT KEY>';
  SERVICE_URL = '<YOUR END POINT>';
  CAPTCHA_URL = "https://www.google.com/recaptcha/api.js?onload=captchaLoaded&render=explicit";

  constructor() { }
}
