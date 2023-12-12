import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // props
  date = new Date();
  progressBarPercentage: number = 0;
  progressMode: ProgressBarMode = 'determinate';
  color: ThemePalette;

  constructor() { }


  ngOnInit() {
    this.loadProgressBar();
  }

  loadProgressBar() {
    setInterval(() => {
      this.progressBarPercentage++;
      if (this.progressBarPercentage === 100) {
        clearInterval(0);
      }
    }, 100)
  }

}
