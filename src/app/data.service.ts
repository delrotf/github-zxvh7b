import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  years: number;

  constructor() {
    let since = 1998;
    let currentYear = new Date().getFullYear();
    this.years = currentYear - since;
  }

  get yearsOfExperience() {
    return this.years;
  }
}
