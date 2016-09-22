var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

function reverse(s) {
    return s.split('').reverse().join('');
}
//document.getElementById('test').innerHTML = 'test this';

document.getElementById('astro').innerHTML = reverse('Astro Weight Calculator')

function calculateWeight() {
  var myweight = document.getElementById('weight').value;
  var myplanets = document.getElementById('selectPlanet');

  var result = myweight * myplanets[myplanets.selectedIndex].value;
  document.getElementById('answer').innerHTML=result;

// for(var count=0; count<10; count++)
//  console.log(count);
}