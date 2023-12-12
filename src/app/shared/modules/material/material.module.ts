import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
  ]
})
export class MaterialModule { }
