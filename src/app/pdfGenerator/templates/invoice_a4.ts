import { jsPDFService } from "../jsPdfService";
import { font } from '../fonts/font'
// import { runInThisContext } from "vm";
//import { FORMERR } from "dns";
//import { title } from "process";

declare var require: any;
var { jsPDF } = require('jspdf');
require('jspdf-autotable');


export class invoiceA4 {




  comparisonBox(
    doc,
    style:
      {
        startX, startY, startX1, startY1, tLineHeight, lineHeight, maxWidth, maxHeight,
        align?: 'right' | 'left'
      },
    myFont: { t1?, t2?, t3?, b1?, b2?, b3?, userFont?},
    contents: { name: string, value: any }[], tSize?, cSize?,) {

      doc.setFileId(style.maxWidth, style.maxHeight);
    for (let text of contents) {
      doc.setFontSize(myFont.b3);
      this.font(doc, myFont, "bold")
      doc.text(style.startX, style.startY, text.name, { align: style.align });
      this.font(doc, myFont, "normal")
      doc.text(style.startX1, style.startY1, text.value, { align: style.align });
      style.startY += style.lineHeight
      style.startY1 += style.lineHeight
    }
  }
  descriptionBox(
    doc,
    style: {
      startX, startY, tLineHeight, lineHeight, maxWidth, maxHeight,
      align: 'right' | 'left', maxLine?
    },
    myFont: { t1?, t2?, t3?, b1?, b2?, b3?, userFont?},
    content: string,
    title?: string) {

    doc.setFileId(style.maxWidth, style.maxHeight);
    if (title) {
      doc.setFontSize(myFont.t1);
      this.font(doc, myFont, 'bold')
      doc.text(style.startX, style.startY, title, { align: style.align });
      style.startY += style.tLineHeight
    }
    for (let i = 0; i < content.length; i++){
      let text = content[i]
      if(style.maxLine && style.maxLine > i){
        doc.setFontSize(myFont.b1);
        this.font(doc, myFont, 'normal')
        doc.text(style.startX, style.startY, text, { align: style.align });
        style.startY += style.lineHeight
      }


    }
  }



  public async template1(invoice?) {
    let doc = new (jsPDF as any)("p", "mm", "a5")

    let userSetting: {
      logo?: string,
      watermark?: string,
      formStyle?: {

      }
    } = {}

    let colour  = {c1:150,c2:150,c3:150}
    let myFont = { t1: 7, t2: 10, t3: 8, b1: 8, b2: 8, b3: 8, userFont: "helvetica" }
    this.font(doc, myFont, "normal")
    console.log(this.font(doc, myFont, "normal"))
    let section = [
      { name: 'address', sX: 100, sY: 14, zX: 130, zY: 30 },
      { name: 'baddress', sX: 10, sY: 35, zX: 40, zY: 65 },
      { name: 'service', sX: 10, sY: 150, zX: 40, zY: 180 },
    ]


    doc.setPage(1)
    doc.setFontSize(myFont.t2)
    this.font(doc, myFont, "normal")
    doc.text(10, 50, 'To Zachary');



    let subTotal = [
      { name: 'subTotal', value: '280.74' },
    ]


    let tCount = [
      { name: 'Total', value: '280.74' },
      { name: 'Total', value: '280.74' },
      { name: 'Total', value: '280.74' }
    ]

   

    let boxHeight = 15
    content1 = ['40sdfsdfdfdsgdfgsdgfsgsgsdfsfsdfsdf8', 'Mich', 'IN','408', 'Mich', 'IN']
    var content1 = doc.splitTextToSize(content1, 30);
    title1 = 'Templebsdbsddbs'
    var title1 = doc.splitTextToSize(title1, 30);
    content2 = ['G9', '136', 'wong','G9', ]
    var content2 = doc.splitTextToSize(content1, 30);
    title2 = 'Temhfple'
    var title2 = doc.splitTextToSize(title1, 30);
    content3 = ['G9', '136', 'wong','G9', '136', ]
    var content3 = doc.splitTextToSize(content1, 30);
    title3 = 'TempleTemple'
    var title3 = doc.splitTextToSize(title1, 30);
    content4 = ['G9', '136', 'wong','G9', '136', 'wong']
    var content4 = doc.splitTextToSize(content1, 30);
    title4 = 'TempleTempleTemple'
    var title4 = doc.splitTextToSize(title1, 30);

    let imgBase64: any;
    await jsPDFService.convertToDataURLviaCanvas('https://miro.medium.com/max/448/1*fPXAny_oflTPJmrOY7cDcQ.png', "image/jpg").then(
      base64 => {
        imgBase64 = base64
      }
    )


    let cellRows = []
    doc.theme = "plain"
    doc.setFontSize(myFont.b2)
    let products: any = [
      { name: 'A dCarpe Diem (Bopk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'B dCarpe Diem Diem (BopemDiem (BopemDiem (BopemDiem (BopemDiem (BopemDiem (BopemDiem (BopemDiem (BopemDiem (BopemDiem (BopemDiem (Bopem(Bopem (Bopk)em (Bopk)k)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 },
      { name: 'C dCarpe Diem (Bem (Bopk)opk)', qty: 5, price: 6.99, total: 34.9 }



    ]

    let tlh = 4
    let lh = 3.5
    let s1x = section[0].sX
    let s1y = section[0].sY
    let z1x = section[0].zX
    let z1y = section[0].zY
    let s3x = section[2].sX
    let s3y = section[2].sY
    let z3x = section[2].zX
    let z3y = section[2].zY
    let tableStyle = {
      ratio: [2, 1, 1, 1],
      lineHeight: 3,
      rowSpacingT: -4,
      rowSpacingB: 10,
      rowShiftTextY: 0,
      rowShiftTextX: 0,
      paddingX: 10,
      startingTop: 80,
      endingBottom: 165
    }

    let location = this.generateTable(doc, products, tableStyle)

    // let subTotal = [
    //   { name: 'subTotal', value: '280.74' },
    // ]


    // let tCount = [
    //   { name: 'Total', value: '280.74' },
    //   { name: 'Total', value: '280.74' },
    //   { name: 'Total', value: '280.74' }
    // ]
console.log(location.endAt , tableStyle.endingBottom)
    if (location.endAt > tableStyle.endingBottom) {
      doc.addPage()
      doc.setPage()
      location.pageBottoms.push(60)
      // console.log(doc.getNumberOfPages(), location.pageBottoms   )
      this.comparisonBox(doc, {
        startX: location.tableStartX + location.rowShiftTextX + location.columnsX[2],
        startY: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3,
        startX1: location.tableStartX + location.rowShiftTextX + location.columnsX[3],
        startY1: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3,
        tLineHeight: tlh, lineHeight: tlh,
        maxWidth: 70,
        maxHeight: 70,
        align: 'left'
      },
        myFont, tCount)
      this.descriptionBox(doc, { startX: s3x, maxLine: 4, startY: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3, tLineHeight: tlh, lineHeight: lh, maxWidth: z3x, maxHeight: location.pageBottoms[doc.getNumberOfPages()], align: 'left' }, myFont, content2, title2);
      this.descriptionBox(doc, { startX: s3x, maxLine: 4, startY: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3 + boxHeight * 1.5, tLineHeight: tlh, lineHeight: lh, maxWidth: z3x, maxHeight: location.pageBottoms[doc.getNumberOfPages()] + boxHeight * 1.5, align: 'left' }, myFont, content3, title3);
    }
    else {
      this.comparisonBox(doc, {
        startX: location.tableStartX + location.rowShiftTextX + location.columnsX[2],
        startY: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3,
        startX1: location.tableStartX + location.rowShiftTextX + location.columnsX[3],
        startY1: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3,
        tLineHeight: tlh, lineHeight: tlh,
        maxWidth: 70,
        maxHeight: 70,
        align: 'left'
      },
        myFont, tCount)
      this.descriptionBox(doc, { startX: s3x, maxLine: 4, startY: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3, tLineHeight: tlh, lineHeight: lh, maxWidth: z3x, maxHeight: location.pageBottoms[doc.getNumberOfPages()] + tlh * 1.5, align: 'left' }, myFont, content2, title2);
      this.descriptionBox(doc, { startX: s3x, maxLine: 4, startY: location.pageBottoms[doc.getNumberOfPages()-1] + tlh * 3 + boxHeight * 1.5, tLineHeight: tlh, lineHeight: lh, maxWidth: z3x, maxHeight: location.pageBottoms[doc.getNumberOfPages()] + tlh * 1.5 + boxHeight * 1.5, align: 'left' }, myFont, content3, title3);
    }


    for (let i = 0; i < doc.getNumberOfPages(); i++) {
      doc.setPage(i + 1)
      doc.addImage(imgBase64, 'JPEG', 10, 12, 70, 30);
      doc.setFontSize(myFont.t1)
      this.font(doc, myFont, "bold")
      doc.text(doc.getPageWidth() - 10, 53, 'INVOICE', { align: 'right' });
      doc.setFontSize(myFont.b1)
      this.font(doc, myFont, "normal")
      doc.text(doc.getPageWidth() - 10, 53 + lh, '76', { align: 'right' });
      this.descriptionBox(doc, {
        maxLine: 4,
        startX: doc.getPageWidth() - 10,
        startY: s1y, tLineHeight: tlh,
        lineHeight: lh, maxWidth: z1x,
        maxHeight: z1y, align: 'right'
      }, myFont, content1);
      doc.line(s3x, s3y + boxHeight * 2, doc.getPageWidth() - 10, s3y + boxHeight * 2)
      this.descriptionBox(doc, {
        maxLine: 4,
        startX: s3x, startY: s3y + boxHeight * 2.5,
        tLineHeight: tlh, lineHeight: lh,
        maxWidth: z3x, maxHeight: z3y + boxHeight * 2.5,
        align: 'left'
      }, myFont, content4, title4);
      this.comparisonBox(doc, {
        startX: location.tableStartX + location.rowShiftTextX + location.columnsX[2],
        startY: location.pageBottoms[i] + tlh * 1.5,
        startX1: location.tableStartX + location.rowShiftTextX + location.columnsX[3],
        startY1: location.pageBottoms[i] + tlh + 1.5,
        tLineHeight: tlh, lineHeight: tlh,
        maxWidth: 70,
        maxHeight: 70,
        align: 'left'
      },
        myFont, subTotal)
      for (let data of cellRows) {
        doc.setPage(data.cell.page)
      }
      doc.line(doc.getPageWidth() * (1 / 2), s3y + boxHeight * 2, doc.getPageWidth() * (1 / 2), doc.getPageHeight() - location.paddingX * 0.3)
      doc.setLineWidth(3.5)

      doc.setDrawColor(colour.c1,colour.c2,colour.c3);
      doc.rect(location.paddingX * 0.3, location.paddingX * 0.3, doc.getPageWidth() - location.paddingX * 0.6, doc.getPageHeight() - location.paddingX * 0.6)
      doc.setLineWidth(0.1)
      this.descriptionBox(doc, {
        maxLine: 4,
        startX: s3x + doc.getPageWidth() * (1 / 2), startY: s3y + boxHeight * 2.5,
        tLineHeight: tlh, lineHeight: lh,
        maxWidth: z3x, maxHeight: z3y + boxHeight * 2.5,
        align: 'left'
      }, myFont, content4, title4);
      for (let data of cellRows) {
        doc.setPage(data.cell.page)
      }
      let last = cellRows[cellRows.length - 1]
    }
    // console.log(location)
    // for (let p = 0; p < location.pageBottoms.length; p++) {
    //   doc.setPage(p + 1)
    //   let y = location.pageBottoms[p]
    //   doc.setDrawColor(150, 10, 0);
    //   doc.line(5, y, 100, y)
    // }
    var filename = "cosignment.pdf";
    // return filename
    return doc.save(filename)
  }



  generateTable(doc, products, styles:{
    ratio: number[],
    lineHeight,
    rowSpacingT,
    rowSpacingB,
    rowShiftTextY,
    rowShiftTextX,
    paddingX,
    startingTop,
    endingBottom
  }) {

    let ratio: any = styles.ratio
    let lineHeight = styles.lineHeight
    let rowSpacingT = styles.rowSpacingT
    let rowSpacingB = styles.rowSpacingB
    let rowShiftTextY = styles.rowShiftTextY
    let rowShiftTextX = styles.rowShiftTextX
    let paddingX = styles.paddingX
    let startingTop = styles.startingTop
    let endingBottom = styles.endingBottom

    

    let copyProducts = []
    let total = 0
    ratio.forEach(element => {
      total += element
    });

    let currentTop = startingTop
    let tableEndX = doc.getPageWidth() - paddingX
    let tableStartX = 0 + paddingX
    let page = 1
    let tableWidth = doc.getPageWidth() - paddingX * 2
    let row0 = tableStartX + rowShiftTextX
    let row1 = (ratio[0] / total) * tableWidth + tableStartX + rowShiftTextX
    let row2 = ((ratio[0] + ratio[1]) / total) * tableWidth + tableStartX + rowShiftTextX
    let row3 = ((ratio[0] + ratio[1] + ratio[2]) / total) * tableWidth + tableStartX + rowShiftTextX
    let row4 = ((ratio[0] + ratio[1] + ratio[2] + ratio[3]) / total) * tableWidth + tableStartX + rowShiftTextX

    let pageBottoms = []
    let product
    for (let i = 0; i < products.length; i++) {
      let copy = JSON.parse(JSON.stringify(products[i]))
      product = JSON.parse(JSON.stringify(products[i]))
      let cellMaxHeigh = 0
      let tableWidth = doc.getPageWidth() - paddingX * 2


      for (let y = 0; y < Object.keys(copy).length; y++) {
        let key = Object.keys(copy)[y]
        let value = product[key].toString()
        let coloumWidth = (ratio[y] / total) * tableWidth
        product[key] = doc.splitTextToSize(value, coloumWidth)
        let cellheight = lineHeight * product[key].length
        if (cellheight > cellMaxHeigh) {
          cellMaxHeigh = cellheight
        }
      }
      console.log(cellMaxHeigh)
      product.page = page
      // product.startX = 5
      console.log(1, currentTop)
      product.startY = currentTop
      // reset value for next product
      currentTop += cellMaxHeigh + rowSpacingB
      let tempY = product.startY
      let row0 = tableStartX + rowShiftTextX
      let row1 = (ratio[0] / total) * tableWidth + tableStartX + rowShiftTextX
      let row2 = ((ratio[0] + ratio[1]) / total) * tableWidth + tableStartX + rowShiftTextX
      let row3 = ((ratio[0] + ratio[1] + ratio[2]) / total) * tableWidth + tableStartX + rowShiftTextX
      let row4 = ((ratio[0] + ratio[1] + ratio[2] + ratio[3]) / total) * tableWidth + tableStartX + rowShiftTextX
      for (let name of product.name) {
        doc.text(rowShiftTextX + row0, tempY + rowShiftTextY, name);
        tempY += lineHeight
      }
      for (let qty of product.qty) {
        doc.text(tableStartX + rowShiftTextX + row1, tempY + rowShiftTextY - cellMaxHeigh * (2 / 3), qty);
      }
      for (let price of product.price) {
        doc.text(tableStartX + rowShiftTextX + row2, tempY + rowShiftTextY - cellMaxHeigh * (2 / 3), price);
      }
      for (let pTotal of product.total) {
        doc.text(tableStartX + rowShiftTextX + row3, tempY + rowShiftTextY - cellMaxHeigh * (2 / 3), pTotal);
      }


      doc.line(tableStartX, tempY + lineHeight, tableEndX, tempY + lineHeight);
      if (currentTop > endingBottom) {
        page += 1
        pageBottoms.push(tempY + lineHeight)

        currentTop = startingTop
        console.log(page, product)
        doc.addPage("p", "mm", "a5")
        doc.setPage(page)
      }

      if (i == products.length - 1) {

        
        if (tempY + lineHeight > styles.endingBottom) {
          pageBottoms.push(startingTop)

        }else{
          pageBottoms.push(tempY + lineHeight)

        }
      
      }

      console.log(pageBottoms)

      product.startY = currentTop
      cellMaxHeigh = 0
      copyProducts.push(product)

      let header = { name: 'ITEM', qty: 'QTY', price: 'PRICE', total: 'TOTAL' }
      for (let i = 0; i < page; i++) {

        doc.text(rowShiftTextX + row0, startingTop - paddingX, header.name);
        doc.text(tableStartX + rowShiftTextX + row1, startingTop - paddingX, header.qty);
        doc.text(tableStartX + rowShiftTextX + row2, startingTop - paddingX, header.price);
        doc.text(tableStartX + rowShiftTextX + row3, startingTop - paddingX, header.total);
        doc.line(tableStartX, startingTop + rowSpacingT * 1.4, tableEndX, startingTop + rowSpacingT * 1.4,);
        doc.line(tableStartX, startingTop + rowSpacingT * 4.1, tableEndX, startingTop + rowSpacingT * 4.1,);
      }

    }


    return { endAt: currentTop, page, columnsX: [row0, row1, row2, row3], rowShiftTextX, tableStartX, paddingX, pageBottoms }

  }

  font(doc, myFont, weight: 'bold' | 'normal') {
    console.log(myFont)
    doc.setFont(myFont.userFont, weight);
  }

  left() {
    throw new Error("Function not implemented.");
  }

  word(word: any) {
    throw new Error("Function not implemented.");
  }

}




