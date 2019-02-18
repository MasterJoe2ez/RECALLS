import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';


import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {UserSetting} from "../user-setting";

@Injectable()
export class MapService {
  lists: FirebaseListObservable<any>;
  rows: UserSetting[] = [];
  _path: string = '/User';
  dbRef: any;

  hits = new BehaviorSubject([]);
  constructor(private db: AngularFireDatabase) {
    this.lists = db.list(this._path, {preserveSnapshot: true});

  }

}
