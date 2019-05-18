# GameOfThrones--Angular 

Check out the following API documentation -
https://anapioficeandfire.com/

This API documentation contains all information about a popular TV Series Game of
Thrones and its related book series.

“An API of Ice And Fire is the world's greatest source for quantified and structured data
from the universe of Ice and Fire (and the HBO series Game of Thrones)”

As a solution to this problem, we are supposed to create an Angular
application with following views -

1) View 1 - A view to list all books, characters and houses in ​ same repeater
(ngFor)​ . 
The view should use bootstrap cards to display the information. 
One type of card (for example a card displaying a book) should look different from
another type of card(for example a card displaying a house). 
The view difference can be as simple as change of border color according to the category(red for
books, blue for characters and green for houses). The data should be sorted in
alphabetical order.

2) View 2 - On clicking the card, a view containing the detail of that
book/character/house should open containing all the information about it in
details

Here are some important points -

1. Used the API endpoints without the pagination. 
We must use all the data of each category(character, book and houses)

2. We have to get data using HTTP request. 
Please do not just download the JSON and use it. 
We must create proper services to fetch the data and give it necessary manipulations and then components to display it to the user.

3. Must Creat filters(dropdowns or textboxes) in View 1
