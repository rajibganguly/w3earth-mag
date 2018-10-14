import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { LifePage } from '../life/life';
import { ContactPage } from '../contact/contact';
import { JobsPage } from '../jobs/jobs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadNews() {
    this.navCtrl.push(NewsPage, {
      val: "One"
    });
  };

  loadJobs() {
    this.navCtrl.push(JobsPage, {
      val: "One"
    });
  };

  loadContact() {
    this.navCtrl.push(ContactPage, {
      val: "One"
    });
  };
  loadLife() {
    this.navCtrl.push(LifePage, {
      val: "One"
    });
  };

}
