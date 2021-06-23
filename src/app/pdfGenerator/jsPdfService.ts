export class jsPDFService{
    
  public static  priceTag(number: number) {
    if (!number) {
      return '0'
    }
    let text = number.toString()
    let a0 = text.split('.')
    let array = a0[0].split('').reverse()
    let temp = ''
    for (let i = 0; i < array.length; i++) {
      if ((i % 3 == 0) && i > 0) {
        temp += ',' + array[i]
      } else {
        temp += array[i]
      }
    }
    let temp2 = temp.split('').reverse()
    let result = ''
    for (let i of temp2) {
      result += i
    }

    if (a0.length > 1) {
      result += '.' + a0[1]
    }
    return result
  }



  public static  convertToDataURLviaCanvas(url, outputFormat) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        resolve(dataURL);
        canvas = null;
      };

      img.onerror = () => {
        console.log('error')
        resolve(null);
      }
      img.src = url;
    })
  }

 
  public textSplit(name, number) {
    let array = name.split(' ')
    let result = []
    let temp = ''
    console.log()
    if (array.length >= 1) {
      temp = array[0]
      for (let a = 1; a < array.length; a++) {
        let name = array[a]
        if ((temp.length + 1 + name.length) < number) {
          temp += ' ' + name
        } else {
          result.push(temp)
          temp = name
        }
      }
    }

    if (temp !== '') {
      result.push(temp)
    }
    console.log(name, result)
    return result
  }



}