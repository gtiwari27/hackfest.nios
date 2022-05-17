import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ZoneComponent } from '../../zone/zone.component';
import { MembersComponent } from '../../members/members.component';
import { TrafficControlComponent } from '../../traffic-control/traffic-control.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTable } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';




@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    MatButtonModule,
    DialogModule,
		ButtonModule,
    TabViewModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ZoneComponent,
    MembersComponent,
    TrafficControlComponent,
  ]
})

export class AdminLayoutModule {}
