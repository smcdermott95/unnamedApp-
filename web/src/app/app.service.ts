import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import * as moment from 'moment';

export interface IDateChangeEvent {
  newDateTime: moment.Moment;
  is24HourClock;
}

export interface ILocationChangeEvent {
  lat: number;
  lon: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private dateChangedSource: Subject<IDateChangeEvent> = new ReplaySubject<IDateChangeEvent>();
  private locationPanelChangedSource: Subject<ILocationChangeEvent> = new ReplaySubject<ILocationChangeEvent>();
  private mapLocationChangedSource: Subject<ILocationChangeEvent> = new ReplaySubject<ILocationChangeEvent>();

  public dateChanged$ = this.dateChangedSource.asObservable();
  public locationPanelChanged$ = this.locationPanelChangedSource.asObservable();
  public mapLocationChanged$ = this.mapLocationChangedSource.asObservable();

  public changeDate(e: IDateChangeEvent) {
    this.dateChangedSource.next(e);
  }

  public changeLocation(e: ILocationChangeEvent) {
    this.locationPanelChangedSource.next(e);
  }

  constructor() { 
    console.log(this);
  }
}
