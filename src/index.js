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
document.getElementById('app').innerHTML = `The vibes are: <pre>
${getData()}
</pre>
`;
