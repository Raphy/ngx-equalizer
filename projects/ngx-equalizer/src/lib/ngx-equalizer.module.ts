import { NgModule } from '@angular/core';
import { EqualizerDirective } from './equalizer.directive';
import { EqualizeDirective } from './equalize.directive';
import { EqualizerService } from './equalizer.service';

@NgModule({
  declarations: [
    EqualizerDirective,
    EqualizeDirective
  ],
  imports: [],
  exports: [
    EqualizerDirective,
    EqualizeDirective
  ],
  providers: [
    EqualizerService
  ]
})
export class NgxEqualizerModule {
}
