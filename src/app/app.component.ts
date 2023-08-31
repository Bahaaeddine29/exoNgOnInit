import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent {
  title = 'activite2-app';
  varTs : string = "Vous n'êtes pas polie"; 
  num1 : number = 2; 
  num2 : number = 3; 

  ngOnInit (): void {

    alert ("bonjour");
    console.log (this.varTs); 
    console.log (this.num1 + this.num2);
     
  }
  
}
