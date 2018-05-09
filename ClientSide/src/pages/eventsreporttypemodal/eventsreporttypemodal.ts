import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LanguageService } from './../../app/services/LanguageService';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from './../../app/services/settingService';

@IonicPage()
  @Component({
    templateUrl: 'eventsreporttypemodal.html'
  })
export class EventsreporttypemodalPage {
  languageService: LanguageService;
  translate: TranslateService;

  myParam: string = this.navParams.get('selectedType');
  events: object[];
  selection: string;
  form: string;
  selectedType: any;
  settings: any;

  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public LanguageService: LanguageService,
    public translateService: TranslateService,
    public settingService: SettingService,  
    params: NavParams

  ) {
    this.events = [];
    this.languageService = LanguageService;
    this.translate = translateService;
    this.settings = settingService.getSettings('report');

    if (this.myParam != 'Select type') {
      this.selectedType = this.myParam;
    }
  }


  isSelected(item){
    if(item == this.myParam){
      return true
    }
    else{
      return false
    }
  }

  onSelectType(item) {
    this.selectedType = item;
  }

  dismiss() {
    this.viewCtrl.dismiss(this.selectedType);
  }
}

