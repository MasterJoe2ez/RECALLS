import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatFormFieldModule, MatSnackBar} from '@angular/material';
import {GalleryConfig, /*GalleryService*/} from 'ng-gallery';
import {Upload} from '../../../shared/model/upload';
import {UploadService} from '../../../services/upload.service';
import {Language} from 'angular-l10n';
import {TdLoadingService , TdMediaService} from '@covalent/core';
import {UserSetting} from '../user-setting';
import * as _ from 'lodash';
import {LogsService} from '../../../dialog/logs-dialog/logs.service';
import {Page} from '../../../shared/model/page';
import {MapService} from './map.service';
import {UserSettingService} from '../user-setting.service';



@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss'],

})
export class MapDialogComponent  {


}
