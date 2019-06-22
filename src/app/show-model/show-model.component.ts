import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-model',
  templateUrl: './show-model.component.html',
  styleUrls: ['./show-model.component.scss']
})
export class ShowModelComponent implements OnInit {

  panid = '';
  name = '';
  dob = '';
  gstno = '';
  gstid = '';
  mobileno = 0;
  email = '';
  addr = '';
  panpass = '';
  gstpass = '';
  fileid = '';
  tanid = '';
  tanno = '';
  tanpass = '';
  public customers: AngularFirestoreCollection;
  private itemDoc: AngularFirestoreDocument<any>;
  showof: any;
  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private router: Router) {

    this.customers = afs.collection('customers');
    // this.customers;
    this.route.params.subscribe(n => {
      this.dataToAdd.panid = n.panid;
      this.showof = n.showOf;
      // get all the item of particular cat
      console.log(this.showof);

      this.itemDoc = this.afs.doc('customers/' + n.panid);
      // this.item = this.itemDoc.valueChanges();
      this.itemDoc.valueChanges().subscribe(c => { this.dataToAdd = c; });
    });

  }



  dataToAdd = {
    panid: this.panid,
    panpass: this.panpass,
    name: this.name,
    dob: this.dob,
    gstno: this.gstno,
    gstpass: this.gstpass,
    mobileno: this.mobileno,
    email: this.email,
    addr: this.addr,
    fileid: this.fileid,
    gstid: this.gstid,
    tanno: this.tanno,
    tanid: this.tanid,
    tanpass: this.tanpass
  };

  ngOnInit() {
  }

}
