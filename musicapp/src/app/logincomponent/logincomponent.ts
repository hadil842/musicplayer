import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-logincomponent',
  imports: [RouterLink],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.scss'
})
export class Logincomponent {
  constructor(private router: Router){}
  gotosign():void {
    this.router.navigate(['/sign']);
         
}

}
