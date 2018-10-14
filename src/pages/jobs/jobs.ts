import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MainW3eProvider } from '../../providers/main-w3e/main-w3e'


@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {
  jobsall: any[] = [];
  httpOptions: any = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': ' * ',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private mainservice: MainW3eProvider) {
  }

  ionViewDidLoad() {
    this.http.get(this.mainservice.getJobsAccess(), this.httpOptions).subscribe(data => {
      this.jobsall = data['Jobs'];  
    });
  }

}





