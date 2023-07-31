Introduction:
I've decided to build the project using React.js, for no other reason than to practice.
The website has been built from the ground up, not using any templates, with the exception of the sidebar/menu that i got from another project of mine, because i like the way it works.

Step by step:
//navbar
When you enter the site, the first thing you see is the Navbar at the top part of the page. Said navbar was built using a div that contains a logo and a couple of links, that change what items are being shown in the PLP.
In mobile view the navbar consists only of the logo and a hamburger menu.
When the menu is clicked a window slides in from the right, containing the links to all the other product pages.

//filters
The filter box is fixed in the left side of the page.
It consists of a form, which includes a dynamic number of checkboxes, which correspond to every color found in the array of product data, and a slider, to adjust the max price that the customer is willing to pay.
The data from the form is recieved through Form Data, which is then being set into an array of the uniqe colors that were picked, and the price is set into a state.
After checking if the array of colors includes any of the selected colors the data, that is currently being displayed gets filtered by color, then by pice.

//Title and sorting
The title is displayed at the top left part of the page, right next to the sorting menu.
the title contains information such as number of products and the amount of products currently displayed.
The sorting select menu is made up of 4 options (A-Z,Z-A,price up,price down)
The way i've managed to make the sorting work is by changing the current state that holds the array of item, every time the select menu registers a chane ( onChange )
And here is where i met my first problem. After updating the state that holds the data,
the product list remained unfazed. After a couple of hours of looking through stack overflow and a bunch of Indian dudes' videos, i managed find a fix, which is even recommended by the react team in the documentation. By setting up a useReducer hook and calling it after every time we sort the products, I managed to force react to update.
//mobile view filters
In mobile view, or overall any narrow screen, the original filter position remains blank. In this view you can access the filters by clicking a button situated right next to the sorting option. I built this the same way i built the sidebar, by hiding the filter box outside the screen, and moving it in place when the button is clicked.

//Product Container
The product container is a simple div, aligned using flexbox, and flex-flow.
Each item is a product card, which is the product of a map.
each product card features the following structure:

1. image
2. heading
3. rating
4.description
5.price
6.add to card button

The rating is displayed using 5 stars, which dynamically change colors based on the rating recieved from the data array.
some of the products have their price discounted, which i managed to do by adding the old price, colored in red and crossed, next to the new price.
and finally, the add to cart button sends an alert that says {product.name} was added to cart.
the product data is passed dynamicly, based on the location, through props, from App.js

//Load more button
By far the hardest thing i had to do for this page. The solution turned out sort of simple in the end, but the proccess is what was really problematic for me. Since I chose React.js, I ran into numerous problems(all caused by me missing a detail or two), such as multiple renderings, product list being rendered twice, getting empty product cards and so on. In the end i managed to fix up a solution that only cost me a couple of hours and my soul.

//Footer
The footer is a super simple container, colored by the theme color of the website,
which includes the logo, a couple of socialmedia links(that lead to the home pages of said social media platflorms), cntacts and some links that lead you to different product pages.

//data
I've used a simple array of objects that i've stored in the src folder as data.
each object has the needed data stored inside.
An array for every category is imported in App.js where, depending on the route, it's being passed through the product component.