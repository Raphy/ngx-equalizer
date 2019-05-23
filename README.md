# NgxEqualizerDemo

This library is inspired from [equalizer](https://github.com/skrajewski/Equalizer) jQuery library to keep HTML elements with equal height.  
The library is compatible with Angular 4+ because of its low peer dependencies.

Demo: [https://raphy.github.io/ngx-equalizer](https://raphy.github.io/ngx-equalizer)

## Install

Using YARN or NPM :
```bash
yarn add ngx-equalizer
# or
npm install ngx-equalizer --save
```

## Setup

Just import the `NgxEqualizerModule` when you need it in a module :

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEqualizerModule } from '../../projects/ngx-equalizer/src/lib/ngx-equalizer.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEqualizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

### Using the directives

The common usage is using the `equalizer` and `equalize` directives:

```html
<div equalizer>
  <div equalize>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare bibendum magna at consequat. Morbi ultrices, augue eget condimentum commodo, lacus odio sodales odio, non suscipit libero enim nec odio.
  </div>
  <div equalize>
    Sed lorem elit, bibendum sed varius in, pretium vitae ipsum.<br/>Curabitur vulputate mi risus, vitae pulvinar est egestas quis. Phasellus porta lacus eget velit condimentum, ac iaculis lacus volutpat.
  </div>
  <div equalize>
    Donec quam felis, vulputate non egestas facilisis, sagittis ac odio. Aliquam tincidunt, enim commodo congue volutpat, libero erat tempus massa, eu vehicula risus eros in metus. Etiam convallis, neque quis pellentesque sodales, metus leo gravida magna, dictum ullamcorper metus lectus eget erat. Vestibulum in leo a urna lacinia dapibus a at lacus.
  </div>
</div>
```

The `equalizer` directive is the parent and aims to "listen" the `equalize` children directives.

This way of using the library will automatically update the height of the elements event if the window is resized. 

### Using the service

A service is provided to equalize an array of `ElementRef`:

```typescript
import { ngAfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { EqualizerService } from '../../projects/ngx-equalizer/src/lib/equalizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ngAfterViewInit {
  @ViewChild('paragraph1', {read: ElementRef})
  paragraph1: ElementRef;

  @ViewChild('paragraph2', {read: ElementRef})
  paragraph2: ElementRef;

  @ViewChild('paragraph3', {read: ElementRef})
  paragraph3: ElementRef;

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
```

```
<div>
  <div #paragraph1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare bibendum magna at consequat. Morbi ultrices, augue eget condimentum commodo, lacus odio sodales odio, non suscipit libero enim nec odio.
  </div>
  <div #paragraph2>
    Sed lorem elit, bibendum sed varius in, pretium vitae ipsum.<br/>Curabitur vulputate mi risus, vitae pulvinar est egestas quis. Phasellus porta lacus eget velit condimentum, ac iaculis lacus volutpat.
  </div>
  <div #paragraph3>
    Donec quam felis, vulputate non egestas facilisis, sagittis ac odio. Aliquam tincidunt, enim commodo congue volutpat, libero erat tempus massa, eu vehicula risus eros in metus. Etiam convallis, neque quis pellentesque sodales, metus leo gravida magna, dictum ullamcorper metus lectus eget erat. Vestibulum in leo a urna lacinia dapibus a at lacus.
  </div>
</div>
```

This way of using the library will not update the height of the elements event if the window is resized. You have to handle by adding for example:

```typescript
  @HostListener('window:resize')
  private onWindowResize() {
    this.equalizerService.equalizeElements([
      this.paragraph1,
      this.paragraph2,
      this.paragraph3,
    ]);
  }
```

## License

The project is under MIT License.
