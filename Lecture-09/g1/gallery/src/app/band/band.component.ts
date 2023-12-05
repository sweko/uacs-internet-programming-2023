import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrl: './band.component.css'
})
export class BandComponent implements OnInit {
  band: number = 0;
  doShow: boolean = false;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.band = +this.route.snapshot.params['id'];
    this.doShow = this.route.snapshot.queryParams['show'] === 'full';
  }

}
