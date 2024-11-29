import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StudioRoutingModule } from './studio.routing';
import { ConclusionBuilderComponent } from './page/conclusion-builder/conclusion-builder.component';
import { ConclusionsJournalComponent } from './page/conclusions-journal/conclusions-journal.component';
import { HelpComponent } from './page/help/help.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SettingsComponent } from './page/settings/settings.component';
import { SummonsSubpoenasComponent } from './page/summons-subpoenas/summons-subpoenas.component';

@NgModule({
  imports: [
    ConclusionBuilderComponent,
    ConclusionsJournalComponent,
    HelpComponent,
    ProfileComponent,
    SettingsComponent,
    SummonsSubpoenasComponent,
    StudioRoutingModule,
    SharedModule,
  ],
})
export class StudioModule {}
