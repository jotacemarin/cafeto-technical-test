import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

const routes: Array<any> = [
  { path: '/auto-park', label: 'auto parks', icon: 'near_me' }
];

@Component({
  selector: 'jmc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public appName: string = environment.appName;
  @ViewChild('snav') public snav: MatSidenav;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  public routes: Array<any> = routes;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.snav.open();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
