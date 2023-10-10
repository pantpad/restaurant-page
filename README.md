# restaurant-page

## Npm, webpack and .gitignore setup

## Hard-code html
Create a bare-bones homepage for a restaurant. 
Include an image, headline, and some copy about how wonderful the restaurant is. 
It’s okay to hard-code these into the HTML for now just to see how they look on the page.

## Replace html using JS and MODULES
Now remove those elements from the HTML.
Create them by using JavaScript only (by appending each new element to div#content once the page is first loaded) 
Since we’re all set up to write our code in multiple files -> write this initial page-load function inside of its own module and then import and call it inside of index.js.

## Add tabbed browsing feature

Put the contents of each ‘tab’ inside of its own module
Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

Write the tab-switching logic inside of index.js. 
You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.

## Set up github pages