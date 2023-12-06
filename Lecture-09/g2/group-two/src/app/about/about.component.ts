import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router) { }

  goHome() {
    console.log("Screw you guys, I'm going home");
    this.router.navigate(['home']);
  }
}
