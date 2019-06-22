import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {

  panid = '';
  name = '';
  dob = '';
  gstno = '';
  mobileno = 0;
  email = '';
  addr = '';
  public customers: AngularFirestoreCollection;
  panpass = '';
  gstpass = '';
  gstid = '';
  tanno = '';
  tanid = '';
  tanpass = '';
  fileid  = '';

  constructor(public dataService: DataService, private snackBar: MatSnackBar, private afs: AngularFirestore) {

    this.customers = afs.collection('customers');
    this.custCollection = afs.collection('customers');
    this.getData();
  }





  dataToAdd = {

    panid: this.panid,
    panpass: this.panpass,
    name: this.name,
    dob: this.dob,
    gstno: this.gstno,
    gstid: this.gstid,
    gstpass: this.gstpass,
    mobileno: this.mobileno,
    email: this.email,
    addr: this.addr,
    tanno: this.tanno,
    tanid: this.tanid,
    tanpass: this.tanpass,
    fileid: this.fileid
  };
   v ;
  private custCollection: AngularFirestoreCollection;


  getData() {
    this.custCollection.valueChanges().subscribe(c  => {
       this.v = c.length;
       this.dataToAdd.fileid  = this.v + 1;
    });
  }


  addItem() {
    // this.customers.add(dataToAdd);
    this.customers.doc(this.dataToAdd.panid).set(this.dataToAdd);
    this.resetData();
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  resetData() {

    this.dataToAdd.panid = '';
    this.dataToAdd.name = '';
    this.dataToAdd.dob = '';
    this.dataToAdd.gstno = '';
    this.dataToAdd.mobileno = 0;
    this.dataToAdd.email = '';
    this.dataToAdd.addr = '';
    this.dataToAdd.panpass = '';
    this.dataToAdd.gstpass = '';
    this.dataToAdd.fileid = '';
    this.dataToAdd.gstid = '';
    this.dataToAdd.tanno = '';
    this.dataToAdd.tanid = '';
    this.dataToAdd.tanpass = '';
  }

  ngOnInit() {
  }

}
