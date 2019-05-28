import {storiesOf, moduleMetadata} from '@storybook/angular';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import {Welcome, Button} from '@storybook/angular/demo';

import {NextMenuItemComponent, NextMenuPartComponent} from '../../projects/next-menu/src/public_api';

const styles = `
  <style>
    .menu \{
      display: block;
      width: 200px;
    \}
  </style>
`;

// background-color: #c6c6c6;
//       border: 1px solid #000;
//       border-radius: 10px;

// storiesOf('Welcome', module).add('to Storybook', () => ({
//   component: Welcome,
//   props: {},
// }));

export const exp = [
  {
    title: 'first',
    routerLink: 'first link',
  },
  {
    title: 'second',
    routerLink: 'second link',
  },
];

storiesOf('NEXT Menu', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextMenuItemComponent, NextMenuPartComponent],
    }),
  )
  .add('Install', () => ({
    template: `
      ${styles}
      <div class="menu">
        <next-menu-part [partTitle]="exp" [isFull]=true (newRouterLink)="test($event)"></next-menu-part>
        <next-menu-part [partTitle]="exp" (newRouterLink)="test($event)"></next-menu-part>
      </div>
    `,
    props: {
      exp,
      test(link) {
        console.log(link);
      }
    },
  }));
// .add(
//   'with some emoji',
//   () => ({
//     component: Button,
//     props: {
//       text: '😀 😎 👍 💯',
//     },
//   }),
//   {notes: 'My notes on a button with emojis'},
// )

// .add(
//   'with some emoji and action',
//   () => ({
//     component: Button,
//     props: {
//       text: '😀 😎 👍 💯',
//       // onClick: action('This was clicked OMG'),
//     },
//   }),
//   {notes: 'My notes on a button with emojis'},
// )

// storiesOf('Another Button', module).add('button with link to another story', () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     // onClick: linkTo('Welcome'),
//   },
// }));
