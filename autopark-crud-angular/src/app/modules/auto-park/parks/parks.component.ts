import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Park } from '../../,,/../../models/park.model';
import { InitChangeParks } from '../../,,/../../reducers/parks/parks.actions';
import { JmcState, parksSelector } from '../../../reducers';
import { ParksState } from '../../../reducers/parks/parks.reducer';
import { CreateParkComponent } from '../create-park/create-park.component';

@Component({
  selector: 'jmc-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})
export class ParksComponent implements OnInit {

  public parks: Array<Park> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<JmcState>,
    private dialog: MatDialog
  ) {
    this.stores();
  }

  ngOnInit() {
    this.getParks();
  }

  private stores() {
    this.store.select(parksSelector).subscribe((parksState: ParksState) => {
      this.parks = parksState.parks;
    });
  }

  private getParks() {
    this.store.dispatch(new InitChangeParks(1, 100));
  }

  public goTo(park: Park) {
    this.router.navigate([`${park._id}`], { relativeTo: this.activatedRoute })
  }

  public modal() {
    const modal = this.dialog.open(CreateParkComponent, { width: '400px' });
    modal.afterClosed().subscribe(result => {
      if (result) {
        this.getParks();
      }
    });
  }

}
