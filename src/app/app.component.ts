import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { EqualizerService } from 'ngx-equalizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('paragraph1', {read: ElementRef})
  paragraph1: ElementRef;

  @ViewChild('paragraph2', {read: ElementRef})
  paragraph2: ElementRef;

  @ViewChild('paragraph3', {read: ElementRef})
  paragraph3: ElementRef;

  snippets = {
    basic: {
      'app.module.ts': `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEqualizerModule } from 'ngx-equalizer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEqualizerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}`,
      'app.component.ts': `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}`,
      'app.component.html': `<div class="row equalizer" equalizer>
  <div class="col equalize" equalize>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare bibendum magna at consequat.
    Morbi ultrices, augue eget condimentum commodo, lacus odio sodales odio, non suscipit libero enim nec odio.
  </div>
  <div class="col equalize" equalize>
    Sed lorem elit, bibendum sed varius in, pretium vitae ipsum.<br/>Curabitur vulputate mi risus, vitae pulvinar est egestas quis.
    Phasellus porta lacus eget velit condimentum, ac iaculis lacus volutpat.
  </div>
  <div class="col equalize" equalize>
    Donec quam felis, vulputate non egestas facilisis, sagittis ac odio.
    Aliquam tincidunt, enim commodo congue volutpat, libero erat tempus massa, eu vehicula risus eros in metus.
    Etiam convallis, neque quis pellentesque sodales, metus leo gravida magna, dictum ullamcorper metus lectus eget erat.
    Vestibulum in leo a urna lacinia dapibus a at lacus.
  </div>
</div>`,
      'app.component.scss': `.equalizer {
  border: 2px solid #fffa00;

  .equalize {
    border: 1px solid #ff07ec;
  }
}`
    },
    service: {
      'app.module.ts': `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEqualizerModule } from 'ngx-equalizer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEqualizerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}`,
      'app.component.ts': `import { AfterViewInit, Component } from '@angular/core';
import { EqualizerService } from 'ngx-equalizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('paragraph1', {read: ElementRef})
  paragraph1: ElementRef;

  @ViewChild('paragraph2', {read: ElementRef})
  paragraph2: ElementRef;

  @ViewChild('paragraph3', {read: ElementRef})
  paragraph3: ElementRef;

  constructo(private readonly equalizerService: EqualizerService) {
  }

  ngAfterViewInit(): void {
    this.equalizerService.equalizeElements([
      this.paragraph1,
      this.paragraph2,
      this.paragraph3,
    ]);
  }
}`,
      'app.component.html': `<div class="row equalizer">
  <div #paragraph1 class="col equalize">
    Vivamus at orci sed nibh bibendum ultrices a a odio. Nullam pretium dolor massa, eu pretium enim ornare et.
    Sed et lorem eu massa iaculis sodales. Nulla gravida sapien ac ex mattis, sed accumsan ex egestas.
  </div>
  <div #paragraph2 class="col equalize">
    Duis nisl dui, dapibus quis volutpat eget, tincidunt quis augue. Maecenas vulputate vitae lorem nec rhoncus.
    Etiam aliquet, arcu eget tristique eleifend, augue magna pharetra nunc, a volutpat mi enim at velit.
    Etiam quis suscipit risus, vel gravida eros. Nam consequat vehicula lacus, ac tristique mi lacinia id.
  </div>
  <div #paragraph3 class="col equalize">
    Maecenas mollis hendrerit mi, facilisis consequat enim venenatis ac.
  </div>
</div>`,
      'app.component.scss': `.equalizer {
  border: 2px solid #fffa00;

  .equalize {
    border: 1px solid #ff07ec;
  }
}`
    }
  };

  constructor(
    private readonly equalizerService: EqualizerService
  ) {
  }

  ngAfterViewInit(): void {
    this.equalizerService.equalizeElements([
      this.paragraph1,
      this.paragraph2,
      this.paragraph3,
    ]);
  }
}
