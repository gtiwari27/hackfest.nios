import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ZoneComponent } from '../../zone/zone.component';
import { MembersComponent } from '../../members/members.component';
import { TrafficControlComponent } from '../../traffic-control/traffic-control.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent},
    { path: 'table-list',     component: TableListComponent},
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent,
        children:[
            {path: 'zone', component: ZoneComponent},
            {path: 'memebrs', component: MembersComponent},
            {path: 'traffic-control', component: TrafficControlComponent}
        ]},
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
