import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styles: [' .whiteFont {color: white;} ']
})
export class ActivityComponent {
  showParagraph = false;
  logs: {id:number, timeStamp:string}[] = [];

  onLog() {
    this.showParagraph = !this.showParagraph;
    const date: Date = new Date();
    const timeStamp: string = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    this.logs.push({id: this.logs.length + 1, timeStamp});
    console.log(this.logs);
  }
}
