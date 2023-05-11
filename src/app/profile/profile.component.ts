import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DataService],
})
export class ProfileComponent implements OnInit {
  yearsOfExperience: number;

  faUser = faUser;

  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.yearsOfExperience = this.dataService.yearsOfExperience;
  }

  open(content) {
    this.modalService.open(content);
  }
}
