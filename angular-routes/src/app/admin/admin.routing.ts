import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'asset', component: AssetManagementComponent },
  { path: 'user', component: UserManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
