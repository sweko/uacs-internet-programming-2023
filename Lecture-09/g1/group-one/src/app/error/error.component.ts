import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {
    path: string = "";
  
    constructor(private router: Router) { }
    
    ngOnInit(): void {
      this.path = this.router.url;
    }
    

}
