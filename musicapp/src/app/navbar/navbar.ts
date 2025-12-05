import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
   constructor(private router: Router){}
     gotologin():void{
      this.router.navigate(['/login']);
     }
     gotohome():void{
      this.router.navigate(['/home']);
     }
    gotosearch():void{
      this.router.navigate(['/search']);
     }
     gotolibrary():void{
      this.router.navigate(['/library']);
     }
}
