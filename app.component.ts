import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels }
		from '@techiediaries/ngx-qrcode';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'QR1';

// We can have Canvas/Img/Url as elementType
elementType = NgxQrcodeElementTypes.URL;

// We can have High/Low/Medium/Quartile
correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

// Need to specify the valid website address
value = ' ';
}

