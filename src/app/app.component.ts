import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){}
  title = 'ephraimTlhako';
  // timeElements:any;
  // countdownValue:any = new Date();  
  // // Time Variables  
  // second:any;
  // minute:any;
  // hour:any;
  // day:any;

    
  //   now :any;
  //   distance:any;
   
  //   days:any;
  //   hours:any;
  //   minutes:any;
  //   seconds:any;
  //   countdownDate:any;
  ngOnInit(): void {
   
  //  this.timeElements = document.querySelectorAll('span');  
  //   this.countdownValue = new Date();  
  //   // Time Variables  
  //   this.second = 1000;  
  //   this.minute = this.second * 60;  
  //   this.hour = this.minute * 60;  
  //   this.day = this.hour * 24;  
  //   this.countdownDate=new Date("2022/05/14");
  //   setInterval(()=>{this.populate()},1000); //this.populate();
  }

  // populate(){
  //     // Get the time between Jan 1, 1970 to the entered date, returned in milliseconds.
  //   this.countdownValue = new Date(this.countdownDate).getTime()  
  //   this.now = new Date().getTime();
  //   this.distance = this.countdownValue - this.now;  
  //    // Split up the time held in distance into days, hours, minutes, and seconds.  
  //   this.days = Math.floor(this.distance / this.day);  
  //   this.hours = Math.floor((this.distance % this.day) / this.hour);  
  //   this.minutes = Math.floor((this.distance % this.hour) / this.minute);  
  //   this.seconds = Math.floor((this.distance % this.minute) / this.second);  
  //   this.timeElements[0].textContent= `${ this.days}`
  //   this.timeElements[1].textContent = `${this.hours}`;  
  //   this.timeElements[2].textContent = `${this.minutes}`;  
  //   this.timeElements[3].textContent = `${this.seconds}`;  
  // }

}
