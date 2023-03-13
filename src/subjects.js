import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

document.addEventListener('click', () => {
  // const stream$ = new Subject();
  // const stream$ = new BehaviorSubject('First!');
  const stream$ = new ReplaySubject(2);
  // stream$.subscribe(value => console.log('Value: ', value));

  stream$.next('Hello from next');
  stream$.next('Rx');
  stream$.next('JS');

  stream$.subscribe(value => console.log('Value: ', value));
})
