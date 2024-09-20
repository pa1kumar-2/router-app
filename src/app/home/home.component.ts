import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sumValue: string='';
  expectedValue: string = '4';

  constructor(private router:Router){}

  sumValidate() {
    sessionStorage.setItem('answer', this.sumValue);

    let sessionStorageValue = sessionStorage.getItem('answer');

    if (sessionStorageValue === this.expectedValue) {
      this.router.navigate(['/success']);
      this.sumValue = '';  
    }else{
      this.router.navigate(['/error'])
      this.sumValue = '';  
    }
  }
}
