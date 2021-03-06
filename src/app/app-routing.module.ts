import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmissionReportsComponent } from './emission-reports/emission-reports.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { CompaniesListComponent } from './layouts/companies-list/companies-list.component';
import { CompanyDetailsComponent } from './layouts/companies-list/company-details/company-details.component';
import { CompanyReportDetailsComponent } from './layouts/company-report-details/company-report-details.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './layouts/home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { RepositoryViewComponent } from './repository-view/repository-view.component';

const routes: Routes = [
  {
    path: '',
    component : LayoutsComponent,
    children : [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'company/list',
        component: CompaniesListComponent
      },
      {
        path: 'company/details/:id',
        component: CompanyDetailsComponent
      },
      {
        path: 'company/report/details/:comId',
        component: CompanyReportDetailsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'repository/view',
        component: RepositoryViewComponent
      },
      {
        path: 'emission/reports',
        component: EmissionReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
