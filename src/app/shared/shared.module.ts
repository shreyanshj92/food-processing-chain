import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';
import { QrCodeReaderComponent } from './components/qr-code-reader/qr-code-reader.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [  
    QrCodeGeneratorComponent, QrCodeReaderComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    ZXingScannerModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [],
  exports:[QrCodeGeneratorComponent, QrCodeReaderComponent]
})
export class SharedModule { }
