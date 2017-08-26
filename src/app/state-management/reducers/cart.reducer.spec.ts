// import { TestBed, async, inject } from '@angular/core/testing';
// import { StoreModule, Store } from '@ngrx/store';

// import { saldoReducer } from './saldo.reducer';
// import { Saldo, intitialState } from '../state/saldo.state';
// import { SALDO_UPDATE_VALUE } from '../actions/saldo.actions';

// describe('Saldo Reducer', () => {

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         imports: [
//           StoreModule.provideStore({ saldoReducer })
//         ]
//       })
//       .compileComponents();
//   }));

//   it('should have the initial value be empty',
//     inject([Store], (store: Store<Saldo>) => {
//       expect(store).toBeTruthy();

//       store.select('saldoReducer')
//         .subscribe((state: Saldo) => {
//           expect(state.value).toEqual('1000.00');
//         });
//     })
//   );

//   it('should have the value be dispatched value after handling the UPDATE_VALUE action',
//     inject([Store], (store: Store<Saldo>) => {
//       expect(store).toBeTruthy();
//       intitialState.value = '123.00';
//       const valueToDispatch = '123.00';

//       store.dispatch({ type: SALDO_UPDATE_VALUE, payload: { value: valueToDispatch } });

//       store.select('saldoReducer')
//         .subscribe((state: Saldo) => {
//           expect(state.value).toEqual('0');
//         });
//     })
//   );
// });
