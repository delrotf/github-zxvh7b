import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
import {
  faPrint,
  faMobileAlt,
  faEnvelope,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  yearsOfExperience: number;
  updateDate: number;
  faPrint = faPrint;
  faMobileAlt = faMobileAlt;
  faEnvelope = faEnvelope;
  faFacebookMessenger = faFacebookMessenger;
  faUser = faUser;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.yearsOfExperience = environment.yearsOfExperience;
    this.updateDate = environment.updateDate;
  }

  open(content) {
    this.modalService.open(content);
  }
}
