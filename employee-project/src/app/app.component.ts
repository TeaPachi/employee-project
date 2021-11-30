import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Employees List';
  footer = 'all right are reserved to my teacher Alex © ';
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
}
