import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SummonsSubpoenasComponent } from './page/summons-subpoenas/summons-subpoenas.component';
import { ConclusionBuilderComponent } from './page/conclusion-builder/conclusion-builder.component';
import { ConclusionsJournalComponent } from './page/conclusions-journal/conclusions-journal.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SettingsComponent } from './page/settings/settings.component';
import { HelpComponent } from './page/help/help.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/studio/summons-subpoenas',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'summons-subpoenas',
        component: SummonsSubpoenasComponent,
      },
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
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudioRoutingModule {}
