import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { IconRegistryService } from './services/icon-registry.service';
import { LoaderComponent } from "./components/loader/loader.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, LoaderComponent]
})
export class AppComponent {
  title = 'atokang';

  constructor(
    private iconService: IconRegistryService,
  ) {
    this.iconService.setIcons();
  }
}
