import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedData: any;

  setSharedData(data: any){
    this.sharedData = data
    console.log('this', this.sharedData);
    
  }

  getSharedData() {
    return this.sharedData;
  }
}
