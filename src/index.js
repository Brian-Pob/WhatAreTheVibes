import './styles.css';

function getData() {
  const vibes = [
    'Blissful',
    'Bold',
    'Captivating',
    'Carefree',
    'Courageous',
    'Cozy',
    'Curious',
    'Dreamy',
    'Dynamic',
    'Effervescent',
    'Empathetic',
    'Empowered',
    'Enchanting',
    'Enigmatic',
    'Ethereal',
    'Euphoric',
    'Exciting',
    'Graceful',
    'Grounded',
    'Harmonious',
    'Inspiring',
    'Intimate',
    'Intriguing',
    'Jubilant',
    'Lively',
    'Magical',
    'Majestic',
    'Melancholic',
    'Mystical',
    'Nostalgic',
    'Nurturing',
    'Optimistic',
    'Peaceful',
    'Playful',
    'Quirky',
    'Radiant',
    'Reflective',
    'Refreshing',
    'Resilient',
    'Rustic',
    'Sentimental',
    'Serendipitous',
    'Sultry',
    'Tranquil',
    'Vibrant',
    'Whimsical',
    'Wistful',
  ];
  return vibes[Math.floor(Math.random() * vibes.length)];
}
document.getElementById('app').innerHTML = `<pre>
${getData()}
</pre>
`;

// Get a reference to the <head> element
window.onload = () => {
  // Get a reference to the <head> element
  var head = document.getElementsByTagName('head')[0];

  // Create a new <meta> element for OpenGraph title
  var ogTitle = document.createElement('meta');

  // Set the attributes for the OpenGraph title
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', getData());

  // Append the OpenGraph title to the <head> element
  head.appendChild(ogTitle);
};
