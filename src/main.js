// import _ from 'lodash';
// import './style.css';
// // import Icon from  './icon.png';
// import printMe from './print.js';

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   // lodash, now imported by this script 
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//   btn.innerHTML = 'Click Me';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   // Add the image to our existing div.
//   // var myIcon = new Image();
//   // myIcon.src = Icon;

//   // element.appendChild(myIcon);

//   if (module.hot) {
//     module.hot.accept('./print.js', function() {
//       console.log('Accepting the updated printMe module!');
//       printMe();
//     })
//   }

//   return element;
// }

// document.body.appendChild(component());

var sum = (a, b) => {
  return a + b;
}

sum(1,2);