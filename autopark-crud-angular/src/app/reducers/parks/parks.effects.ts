import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ParksService } from '../../services/parks/parks.service';
import { ParksActionsType, SuccessChangeParks } from './parks.actions';

@Injectable()
export class ParksEffects {

  constructor (
    private actions: Actions,
    private parksService: ParksService
  ) { }

  @Effect()
  parks = this.actions.pipe(
    ofType(ParksActionsType.INIT_CHANGE),
    mergeMap((action: any) => this.parksService.parks(action.page, action.limit)
      .pipe(
        map((response: any) => new SuccessChangeParks(response, action.page, action.limit)),
        catchError((error: any) => {
          return of({ type: ParksActionsType.CHANGE_FAILED });
        })
      )
    )
  );
}
