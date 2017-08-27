import {
  animate,
  state,
  style,
  transition,
  trigger,
  animation,
  AnimationTriggerMetadata,
  query,
  stagger,
  animateChild
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function listAnimation(params: {}): AnimationTriggerMetadata[] {
  return [
    trigger('listAnimation', [
      transition('void => false', []),
      transition('* => *', [
        // this hides everything right away
        query(':enter', style({ opacity: 0 })),
        // starts to animate things with a stagger in between
        query(
          ':enter',
          stagger('100ms', [animate('3s', style({ opacity: 1 }))])
        ),
        // this hides everything right away
        query(':leave', style({ opacity: 1 })),
        // starts to animate things with a stagger in between
        query(
          ':leave',
          stagger('100ms', [animate('3s', style({ opacity: 0 }))])
        )
      ])
    ])
  ];
}

export function fadeAnimation(params: {}): AnimationTriggerMetadata[] {
  return [
    trigger('fade', [
      transition(
        ':enter, :leave',
        animation([query('@fadeInOut', stagger(20, animateChild()))])
      )
    ]),
    trigger('fadeInOut', [
      transition('void => false', []),
      transition(
        'void => *',
        animation([style({ opacity: 0 }), animate('2s', style({ opacity: 1 }))])
      ),
      transition(
        '* => void',
        animation([style({ opacity: 0 }), animate('2s', style({ opacity: 1 }))])
      )
    ])
  ];
}

// export const fadeAnimation = animation(
//   [
//     style({ opacity: '{{from }}' }),
//     animate('{{duration}}', style({ opacity: '{{to}}' }))
//   ],
//   { params: { time: '1s', from: 0, to: 1 } }
// );
