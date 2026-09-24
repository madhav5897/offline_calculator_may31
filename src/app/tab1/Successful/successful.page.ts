import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsComponent } from '../Products/products.page';
import { QuoteService } from 'src/app/services/activehealth/quote.service';
import { StorageService } from 'src/app/services/storage.service';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Screenshot } from 'capacitor-screenshot';
import { ComponentService } from 'src/app/services/component.service';
// import { File } from '@ionic-native/file/ngx';


// import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

@Component({
  selector: 'app-successful',
  templateUrl: 'successful.page.html',
  styleUrls: ['successful.page.scss']
})
export class SuccessfulComponent implements OnInit {

  quote: any;
  quotedetail: any;
  test: any;

  content: any;
  order: any;
  coverarray: any;

  pdfpage: boolean = true;
  imagefile: any;
  sumarr:any;
  arraylength:number=0;

  constructor(private router: Router,
    // private pdfGenerator:PDFGenerator,
    private quoteService: QuoteService, private componentService: ComponentService, private storageService: StorageService) {
    this.setquote();

    this.componentService.isquoteschanged.subscribe((change: boolean) => {
      if (change) {
        this.setquote()
      }
    })
    // this.coverarray = this.quote.covers;
    // this.arraylength=this.coverarray.length;
    this.quotedetail = localStorage.getItem('details');
    this.test = this.storageService.get('array');
    // this.screenshot();

  }

  ngOnInit(): void {

  }

  setquote() {
    if (localStorage.getItem('quoteid') == 'Empty') {
      this.quote = this.quoteService.quoteObject;
      // this.sumarr=this.quote.sum
    
    }
    else {
      
      let id = localStorage.getItem('quoteid');
      let arr = JSON.parse(localStorage.getItem('quotearray'));
      console.log(arr);

      if (arr !== null) {
        this.quote = arr.filter((x: any) => {
          // return x.id == id;
        })
      }
      // this.quote = this.quote[0];
      // this.sumarr=(this.quote.sum);
    
      
    }
  }

  screenshot() {
    Screenshot.take().then((ret: { base64: string }) => {
      this.imagefile = ret.base64;
    });
    this.writeSecretFile();
  }

  writeSecretFile = async () => {
    // await Filesystem.requestPermissions;

    let permission = Filesystem.checkPermissions()
    console.log(await permission)
    if ((await permission).publicStorage !== 'granted') {
      await Filesystem.requestPermissions;
      this.writeSecretFile();
    } else {
      console.log('permission is granted')
    }

    console.log(Directory)
    await Filesystem.writeFile({
      path: 'secrets/imageoffline.png',
      data: this.imagefile,
      directory: Directory.Documents,
    });
    console.log('download complete ')
  }

  save = async () => {

    await Filesystem.writeFile({
      path: 'secrets/text.txt',
      data: this.imagefile,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

  }

  // async captureAndDownloadScreen() {
  //   const element = document.getElementById('PrintInvoice');
  //   if (element) {
  //   try {
  //   const canvas = await essay html2canvas: any(element);
  //   const screenshotURI = canvas.toDataURL(Image);
  //   const blob = this.dataURItoBlob(screenshotURI);

  //       await this.checkAndRequestStoragePermission();
  //       const fileName = 'screenshot.png';
  //       const base64Data = screenshotURI;

  //       const savedFile = await this.writeFileToDocumentsDirectory(fileName, base64Data) as { uri: string };
  //       console.log('Screenshot saved successfully:', savedFile.uri);
  //     } catch (error) {
  //       console.error('Error capturing screenshot:', error);
  //     }
  //   }

  // }

  // private async writeFileToDocumentsDirectory(fileName: string, base64Data: string) {
  //   return new Promise((resolve, reject) => {
  //   const blob = this.dataURItoBlob(base64Data);
  //   const reader = new FileReader();

  //     reader.onloadend = async () => {
  //       const data = reader.result as string;

  //       try {
  //         const savedFile = await Filesystem.writeFile({
  //           path: fileName,
  //           data,
  //           directory: Directory.Documents,
  //         });

  //         resolve(savedFile);
  //       } catch (error) {
  //         reject(error);
  //       }
  //     };

  //     reader.readAsDataURL(blob);
  //   });
  //   }

  // checkAndRequestStoragePermission(): Promise {
  //   return new Promise((resolve, reject) => {
  //   this.AndroidPermissions.hasPermission(this.AndroidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
  //   .then(status => {
  //   if (status.hasPermission) {
  //   resolve(‘Permission already granted for external storage’);
  //   } else {
  //   this.AndroidPermissions.requestPermission(this.AndroidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
  //   .then(status => {
  //   if (status.hasPermission) {
  //   resolve(‘Permission granted for external storage’);
  //   } else {
  //   reject(‘Permission denied for external storage’);
  //   }
  //   })
  //   .catch(error => {
  //   reject(Error requesting storage permission: ${error});
  //   });
  //   }
  //   })
  //   .catch(error => {
  //   reject(Error checking storage permission: ${error});
  //   });
  //   });
  //   }

  downloadInvoice() {
    // this.content = document.getElementById('PrintInvoice').innerHTML;
    // let options = {
    //   documentSize: 'A4',
    //   type: 'share',
    //   // landscape: 'portrait',
    //   fileName: 'Order-Invoice.pdf'
    // };
    // this.pdfGenerator.fromData(this.content, options)
    //   .then((base64) => {
    //     console.log('OK', base64);
    //   }).catch((error) => {
    //     console.log('error', error);
    //   });

  }

  pdf() {

  }

  home() {
    this.componentService.reset.next(true);
    this.componentService.isquoteschanged.next(true);
    localStorage.setItem('quoteid', 'Empty')
    this.router.navigateByUrl('tabs/tab1/quotes')
  }

}
