import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class FeedService {

  constructor(private _http:Http) {
  console.log("Feed service init..");
}
gfeed(){
  return this._http.get('https://www.juicer.io/api/feeds/juicer').map(res => res.json());
}

}
