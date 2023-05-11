import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() {}

  get yearsOfExperience() {
    let since = 1998;
    let currentYear = new Date().getFullYear();
    let yearsOfExperience = currentYear - givenYear;

    return yearsOfExperience;
  }
}
