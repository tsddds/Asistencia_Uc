import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGeneratePageRoutingModule } from './qr-generate-routing.module';

import { QrGeneratePage } from './qr-generate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGeneratePageRoutingModule
  ],
  declarations: [QrGeneratePage]
})
export class QrGeneratePageModule {}
