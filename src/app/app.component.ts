import {Component} from '@angular/core';

class MarginModel {
  cost: number;
  markup: number;
  grossMargin: number;
  revenues: number;
  profit: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  margin: MarginModel = new MarginModel();
  make2Digits(number: number){
    var formatted = number.toFixed(2);
    var int = parseInt(formatted);
    return int;
  }
  calculateMargin = (model: MarginModel) => {
    if (!model.cost || !model.revenues){
      return;
    }else{
      this.margin.profit = this.make2Digits((model.revenues - model.cost));
      this.margin.grossMargin = (this.margin.profit / model.revenues)*100;
      let markup = (( model.revenues / model.cost ) / model.cost);
      let markupStr = markup.toFixed(2);
      this.margin.markup = parseInt(markupStr);
    }
  };
  reset(){
    this.margin = new MarginModel();
  }

}
