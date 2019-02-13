import { Component } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public timer = "00:00:00";
  public startButton = "START";
  public seconds;
  public minutes;
  public hours;
  public start;
  public default;
  public timer_id;
 
  constructor() {
  }
 
  startStop() {
    if (this.startButton === "START") {
      this.start = new Date();
      this.timer_id = setInterval(() => {
        this.seconds = Math.floor((new Date().getTime() - this.start.getTime()) / 1000);
        this.minutes = Math.floor(this.seconds / 60);
        this.hours = Math.floor(this.minutes / 60);
 
        this.seconds = this.seconds - this.minutes * 60;
        this.minutes = this.minutes - this.hours * 60;
 
        // 1桁の場合は0を補完
        this.hours = this.addZero(this.hours);
        this.minutes = this.addZero(this.minutes);
        this.seconds = this.addZero(this.seconds);
 
        this.timer = this.hours + ':' + this.minutes + ':' + this.seconds;
      }, 10);
 
      // STOPボタンにする
      this.startButton = "STOP";
      this.default = "danger";
    } else {
      clearInterval(this.timer_id);
 
      // STARTボタンにする
      this.startButton = "START";
      this.default = "primary";
    }
  }
 
  //private date = new Date('2000/1/1 0:00:00');
  // ゼロを追加する
  addZero(value) {
    if (value < 10) {
      value = '0' + value;
    }
    return value;
  };
}
