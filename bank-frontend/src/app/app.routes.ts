// import { Routes } from '@angular/router';
// import { LoginComponent } from './component/login/login.component';
// import { ManagerDashboardComponent } from './component/manager-dashboard/manager-dashboard.component';
// import { ClerkDashboardComponent } from './component/clerk-dashboard/clerk-dashboard.component';
// import { AccountsComponent } from './component/accounts/accounts.component';
// import { ManagersComponent } from './component/managers/managers.component';
// import { ClerksComponent } from './component/clerks/clerks.component';
// import { authGuard } from './guard/auth.guard';


// export const routes: Routes = [
//   { path: '', component: LoginComponent },

//   { path: 'manager-dashboard', component: ManagerDashboardComponent, canActivate: [authGuard] },
//   { path: 'clerk-dashboard', component: ClerkDashboardComponent, canActivate: [authGuard] },

//   { path: 'accounts', component: AccountsComponent, canActivate: [authGuard] },
//   { path: 'managers', component: ManagersComponent, canActivate: [authGuard] },
//   { path: 'clerks', component: ClerksComponent, canActivate: [authGuard] },

//   { path: '**', redirectTo: '' }
// ];

import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AccountsComponent } from './component/accounts/accounts.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PendingTransactionsComponent } from './pending-transactions/pending-transactions.component';
import { ManagerDashboardComponent } from './component/manager-dashboard/manager-dashboard.component';
import { ClerkDashboardComponent } from './component/clerk-dashboard/clerk-dashboard.component';

// export const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'accounts', component: AccountsComponent },
//   { path: 'manager', component: ManagerDashboardComponent },
//   { path: 'clerk', component: ClerkDashboardComponent }
// ];
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'accounts', component: AccountsComponent },
  { path: 'transactions', component: TransactionsComponent },
  // { path: 'add-clerk', component: AddClerkComponent },
  { path: 'managers', component: PendingTransactionsComponent },
];

export const appRouting = provideRouter(routes);