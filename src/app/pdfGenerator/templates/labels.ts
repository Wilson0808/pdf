import { jsPDFService } from "../jsPdfService";
import { font } from '../fonts/font'

 declare var require: any;
 var { jsPDF } = require('jspdf');
 require('jspdf-autotable');
 

 export class labels{

    public static async generateProductLabel() {

        let pD = { h: 25, w: 75 }
        let doc = new (jsPDF as any)("p", "mm", [pD.h, pD.w])
        doc.theme = "plain"
        doc.setFillColor(0, 0, 0);
    
        //doc.rect(cD.w + p * 0.5, p + adjust, tD.w, tD.h, 'F');
        // outline
    
        //doc.line(5,5, 70,20);
    
        doc.setFontSize(8);
        doc.text('$700', 3 + 1, 20, 'left');
    
        doc.setFontSize(8);
        doc.text('Mrs cooky', 3 + 1, 23, 'left');
    
    
        var filename = 'infoLabel' + ".pdf";
        doc.save(filename)
      }

 }