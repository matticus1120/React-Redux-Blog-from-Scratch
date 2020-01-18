/**
 * Store Helpers
 */

// libs

// https://www.npmjs.com/package/slugify
import slugify from 'slugify';

// components
import { getRandomId } from './helpers.js';


/**
 * Format a blog post object prior to saving in the store
 *
 * TODO: slug output is keeping a capital first character
 */
export function formatPost(initialPost) {

	let post = { 
		...initialPost, 
		id: initialPost.hasOwnProperty('id') ? initialPost.id : getRandomId(), 
		slug: slugify(initialPost.postTitle, {lower: true} )
	};
	
	return post;

}

/**
 * Format a category object prior to saving in the store
 *
 * TODO: slug output is keeping a capital first character
 */
export function formatCategory(initialCategory) {
	
	let category = { 
		...initialCategory, 
		id: initialCategory.hasOwnProperty('id') ? initialCategory.id : getRandomId(), 
		slug: slugify(initialCategory.categoryTitle, {lower: true} )
	};
	
	return category;

}

