
/**
 * Generate a random ID
 * http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
 * https://gist.github.com/6174/6062387#file-random-string
 */
export function getRandomId() {
	
 	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

}