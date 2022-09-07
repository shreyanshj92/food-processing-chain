import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { QrCodeGeneratorComponent } from './shared/components/qr-code-generator/qr-code-generator.component';
import { QrCodeReaderComponent } from './shared/components/qr-code-reader/qr-code-reader.component';

const routes: Routes = [
  {
    path:"scanner",
    component:QrCodeReaderComponent
  },

  {
    path: "generator",
    component: QrCodeGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

exports: [RouterModule]
})
export class AppRoutingModule { }
