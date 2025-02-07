import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OnboardComponent } from './onboard/onboard.component';
import { DistributionComponent } from './distribution/distribution.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { OffboardComponent } from './offboard/offboard.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { FormsModule } from '@angular/forms';
import { OffboardingReportComponent } from './offboarding-report/offboarding-report.component';
import { OnboardingReportComponent } from './onboarding-report/onboarding-report.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OnboardComponent,
    DistributionComponent,
    NavbarComponent,
    OffboardComponent,  
    EmployeeInfoComponent,
    OffboardingReportComponent,
    OnboardingReportComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
