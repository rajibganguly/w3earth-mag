import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  objValue: Object;
  msg: string;
  smsMsg: boolean = true;
  confirmMsg: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS) {
  }

  ionViewDidLoad() {
  }

  senSMS(x, y) {
    var options: {
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }    
    this.msg = "MESSAGE RGCREATIVELAB - Client mail ID - " + x.value + " Client message - " + y.value;
    this.sms.send('918806688030', this.msg, options);
    this.confirmMsg = true;
    this.smsMsg = false;
  }


}



