import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ConclusionBuilderComponent } from './page/conclusion-builder/conclusion-builder.component';
import { ConclusionsJournalComponent } from './page/conclusions-journal/conclusions-journal.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/studio/conclusions-journal',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'conclusion-builder',
        component: ConclusionBuilderComponent,
      },
      {
        path: 'conclusions-journal',
        component: ConclusionsJournalComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudioRoutingModule {}
