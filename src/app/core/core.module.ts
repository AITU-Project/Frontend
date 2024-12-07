import { NgModule, Optional, SkipSelf } from '@angular/core';
import { APIService } from './services/api/api.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  providers: [APIService, AuthService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
