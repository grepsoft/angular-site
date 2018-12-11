import { 
  Component, OnInit, Inject, PLATFORM_ID,Input
} from '@angular/core';
import { Contact } from './contactData';
import { HttpClient } from '@angular/common/http';
import { GcaptchaServiceService } from '../gcaptcha-service.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  inputs: ['captcharesponse']
})
export class ContactusComponent implements OnInit {

  contactModel = new Contact('', '', '', '', '');  

  private captcharesponse:string;

  constructor(private http:HttpClient,
    @Inject(PLATFORM_ID) private readonly platformId: any,
    private captchaService:GcaptchaServiceService,
    private configService: ConfigService) { }

  ngOnInit() {  
    this.captchaService.captchaAnnounced.subscribe( captcha => {
      this.captcharesponse = captcha;      
    })
  }

  onSubmit() {
    this.contactModel.captcha = this.captcharesponse;
    console.log("Captcha: " + this.contactModel.captcha);
    /**
     * This would usually go into a separate service like contactusHttpService but 
     * for a project this small it's not really needed.
     */
    this.http.post(this.configService.SERVICE_URL, JSON.stringify(this.contactModel)).subscribe((data) => {
        console.log(data['success'] + " " + data['error-message']);
    });
  }

  onCaptcha(captchaData) {
    console.log("TS Captcha..." + captchaData);
  }
}