import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { font } from '../pdfGenerator/fonts/font'
import { Invoice } from '../pdfGenerator/template';
import { invoiceA4 } from '../pdfGenerator/templates/invoice_a4';
declare var System: any;
declare var require: any;
var { jsPDF } = require('jspdf');
require('jspdf-autotable');
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  invoice = Invoice

  constructor() {

  }




  downloadPDF(){
    new invoiceA4().template1()
  }





}

