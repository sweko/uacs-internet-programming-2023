import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandService } from '../band.service';
import { Observable, Subscription, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrl: './band.component.css'
})
export class BandComponent implements OnInit, OnDestroy {
  // band: {id: number, name: string} = {id: 0, name: ''};
  doShow: boolean = false;

  band$?: Observable<{id: number, name: string}>;

  constructor(private route: ActivatedRoute, private bandService: BandService) { 
  }

  pmSubscription?: Subscription;
  bandSubscription?: Subscription;

  ngOnInit() {
    this.band$ = this.route.paramMap.pipe(
        map(params => +params.get('id')!),
        switchMap(bandId => this.bandService.getBand(bandId))
    )

    // this.pmSubscription = this.route.paramMap.pipe(
    //   map(params => +params.get('id')!),
    //   switchMap(bandId => this.bandService.getBand(bandId))
    // ).subscribe(band => {
    //   this.band = band
    // });


    // this.pmSubscription = this.route.paramMap.subscribe(params => {
    //   const bandId = +params.get('id')!;
    //   this.bandSubscription = this.bandService.getBand(bandId).subscribe(band => {
    //     this.band = band
    //   });
    // });


    // const bandId = +this.route.snapshot.paramMap.get('id')!;

    // this.bandService.getBand(bandId)
    //   .subscribe(band => {
    //     this.band = band
    //   });

    
    // this.band = +this.route.snapshot.params['id'];
    // this.doShow = this.route.snapshot.queryParams['show'] === 'full';
  }

  ngOnDestroy() {
    this.pmSubscription?.unsubscribe();
    this.bandSubscription?.unsubscribe();
  }

}
