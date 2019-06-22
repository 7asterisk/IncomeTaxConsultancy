import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private custCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private excelService: ExcelService) {
    this.custCollection = afs.collection('customers');
    this.getData();

  }


  searchText = { name: '' };
  option = ['name', 'panid', 'gstno'];
  customers;
  opt = 'name';
  stxt;

  getData() {
    this.custCollection.valueChanges().subscribe(c => {
      console.log(c);
      this.customers = c;


      let sortedArray = this.customers.sort((obj1, obj2) => {
        if (+obj1.fileid > +obj2.fileid) {
          return 1;
        }

        if (+obj1.fileid < +obj2.fileid) {
          return -1;
        }

        return 0;
      });
      this.customers = sortedArray;
    });
  }



  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.customers, 'customers');
  }

  search() {
    this.afs.collection('customers', ref => ref.where(this.opt, '==', this.stxt)).valueChanges().subscribe(c => {
      this.customers = c;
      console.log(c);
      this.stxt = '';
    });
  }

  ngOnInit() {
  }

}
