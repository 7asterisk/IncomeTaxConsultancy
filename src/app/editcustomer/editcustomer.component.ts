import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss']
})
export class EditcustomerComponent implements OnInit {

  panid = '';
  name = '';
  dob = '';
  gstno = '';
  mobileno = 0;
  email = '';
  addr = '';
  panpass = '';
  gstpass = '';
  gstid = '';
  tanno = '';
  tanid = '';
  tanpass = '';
  fileid = '';

  public customers: AngularFirestoreCollection;
  private itemDoc: AngularFirestoreDocument<any>;
  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private router: Router, private snackBar: MatSnackBar, ) {

    this.customers = afs.collection('customers');
    // this.customers;
    this.route.params.subscribe(n => {
      this.dataToAdd.panid = n.panid;

      // get all the item of particular cat

      this.itemDoc = this.afs.doc('customers/' + n.panid);
      // this.item = this.itemDoc.valueChanges();
      this.itemDoc.valueChanges().subscribe(c => { this.dataToAdd = c });
    });

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

  addItem() {
    // this.customers.add(dataToAdd);
    this.customers.doc(this.dataToAdd.panid).set(this.dataToAdd);
    this.resetData();
  }
  deleteItem() {
    const y = confirm('Do you want to delete ?');
    console.log(y);
    if (y) {
      this.itemDoc = this.afs.doc('customers' + '/' + this.dataToAdd.panid);
      this.itemDoc.delete();
      this.resetData();
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {
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

}


