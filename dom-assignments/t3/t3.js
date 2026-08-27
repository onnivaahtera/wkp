const target = document.querySelector('#target');

const browser = navigator.appCodeName;
const version = navigator.appVersion;

const arr = [
  `Browser: ${browser}, ${version}`,
  `OS: ${navigator.platform}`,
  `Screen: ${screen.width} x ${screen.height}`,
  `Available screen: ${screen.availWidth} x ${screen.availHeight}`,
  `Date: ${new Date().toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })}`,
  `Time: ${new Date().toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    minute: '2-digit',
  })}`,
];

arr.map(text => {
  const p = document.createElement('p');
  p.textContent = text;
  target.appendChild(p);
});
