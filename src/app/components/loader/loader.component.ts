<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
>>>>>>> a80c031ac0218eb4e69d7487b722423ecad6a4a4

@Component({
  selector: 'app-loader',
  standalone: true,
<<<<<<< HEAD
  imports: [],
=======
  imports: [MatProgressSpinnerModule, AsyncPipe, NgIf, NgTemplateOutlet],

>>>>>>> a80c031ac0218eb4e69d7487b722423ecad6a4a4
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

<<<<<<< HEAD
  isLoading = false;

  showLoading(loading: boolean): void {
    this.isLoading = loading;
=======

  loading$: Observable<boolean>;

  @Input()
  detectRouteTransitions = false;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(
  private loadingService: LoadingService,
  private router: Router) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.loadingOn();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.loadingOff();
            }
          })
        )
        .subscribe();
    }
>>>>>>> a80c031ac0218eb4e69d7487b722423ecad6a4a4
  }

}
