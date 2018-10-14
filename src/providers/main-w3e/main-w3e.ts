import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MainW3eProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainW3eProvider {
   

  constructor(public http: HttpClient) {
    console.log('Hello MainW3eProvider Provider');
    
  }

  queryNews: string = 'https://rgcreativelab.com/W3MagData/news.json';
  queryLife: string = 'https://rgcreativelab.com/W3MagData/life.json';
  queryJobs: string = 'https://rgcreativelab.com/W3MagData/jobs.json';
  

  getNewsAccess() {
    return this.queryNews;
  }

  getJobsAccess() {
    return this.queryJobs;
  }

  getLifeAccess() {
    return this.queryLife;
  }

}
