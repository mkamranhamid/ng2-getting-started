import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [require('./app.component.css')]
})
export class AppComponent { }
