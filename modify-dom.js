/* https://stackoverflow.com/questions/1484506/random-color-generator */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/* Changing CSS from JavaScript:
 * https://alvarotrigo.com/blog/change-css-javascript/ 
 */

function rollTheDice() {
	// Getting the stylesheet
	const stylesheet = document.styleSheets[0];
	let evenRules;
	let oddRules;

	// looping through all its rules and getting your rule
	for(let i = 0; i < stylesheet.cssRules.length; i++) {
	  if(stylesheet.cssRules[i].selectorText === '.tabledesign:nth-child(2n)' ) {
	    evenRules = stylesheet.cssRules[i];
	  }
	  if(stylesheet.cssRules[i].selectorText === '.tabledesign:nth-child(2n+1)' ) {
	    oddRules = stylesheet.cssRules[i];
	  }
	}

	// modifying the rule in the stylesheet
	oddRules.style.setProperty('background-color', getRandomColor());
	evenRules.style.setProperty('background-color', getRandomColor());
}
