import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HelperService {

  private sbStatus = new BehaviorSubject<boolean>(true);
  currentStatus$ = this.sbStatus.asObservable();
  
  constructor() { }

  toggleSidebar(status: boolean) {
    this.sbStatus.next(status);
  }

  

}
