import { trigger, state, style, animate, transition } from '@angular/animations';

export function triggerOptions(delay) {
  return [
    state(
      'inactive',
      style({
        opacity: 0,
      })
    ),
    state(
      'active',
      style({
        opacity: 1,
      })
    ),
    transition('inactive => active', animate(`500ms ${delay}ms ease-in`)),
  ];
}
