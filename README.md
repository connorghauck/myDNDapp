The idea of this application is to create user-friendly Dungeons & Dragons (5th Edition) Character Sheets which will be accessible on any computer. It will first take in a Username and Password which you will register, then you will be able to create and save Character Sheets onto your personal account you have created.

Once the User logs in, they will be taken to a Home section with a dropdown menu. In this dropdown menu, they will be able to select past characters they have created, or they will be able to create a new character.

Selecting any of the options in the dropdown menu will lead them into the Character Sheet page. This will be a page where they can edit anything on a Character Sheet. There will be a save button at the bottom, and a delete button in the bottom corner, slightly out of the way so there are minimal accidental deletes. The delete button will have a confirmation prompt the User will have to select to actually delete a Character sheet.


Day 2 Update:

I've added many form/text inputs to what's going to be the character sheet page.
Some bootstrap work has been done to change the layout, but I plan on changing the form text before finishing the bootstrap layout.

Over the next few days, I'll be finishing up the layout of the Character Sheet page and the layout of the Character Select/Home page.



Day 7 Morning Overdue Update:

The Character database is now being properly filled out when the Character Sheet is submitted in sheet.html.

I still need to create a working drop down menu in the Home page so the User may update an already created character. I'll need to create a new HTML page for that which will basically be the same as the sheet.html, but with some values input into the form/textarea fields.



Day 7 Update:

I will also be completing the Home page and the update pages shortly. These will just require taking in the user id and putting links to their characters in a dropdown menu on the home page so the user may select which character they wish to update/alter.

The skills table is currently being made. Character sheet is initially complete apart from this last section, then onto CSS/Bootstrap for the sheet.html.

To do:
1. Finish the skills dropdown and database additions.
2. Create the update/alter page.
3. Link the update/alter pages to the Home page dropdown menu.
4. CSS the entire thing to make it look cleaner.
5. Add logout button.




Current state of project (Day 10):

Since last readme update, I have created a functioning select and update page/feature. At this point, however, the users are able to see other users characters, which was not the original intent. I might scrap this idea to just have universal characters for everyone.

I had originally planned to have this project be half online, half offline. The Character Sheet was going to be a helper for our character sheets we typically have printed off from other PDFs and this would just add them to a database for us to fetch from at future points. However, the more I'm working with it, the more functionality I want to add to make it a almost completely online project.

A random number generator has been added to simulate a 6 sided dice roll. I plan on next adding modifiers to skills based on attributes.
