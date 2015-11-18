# MyShelterManager

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

MyShelterManager is a web application inspired by ShelterManager built using Ruby on Rails
and React.js. MyShelterManager helps animal shelters manage the people and animals at their shelter

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->


- [ ] Create an account
- [ ] Log in / Log out
- [ ] Holds records for animals and owners.
- [ ] CRUD for animal records, medical regiments, medical tests, and vaccinations.
- [ ] Search by animal attributes (microchip number, id, owner, location)


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Cat, Medication, Test, Vaccine, and Person model and JSON API (2 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for cats and people.

Add picture to cat show page and file upload for it
Add new attributes for cat using enums
Make a news summary / shelter summary the default indexroute instead of index.

[Details][phase-one]

### Phase 2: Flux Architecture and Cat and Person Create (2 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Cat and Person store will be implemented and a set of actions corresponding to the needed CRUD functionality created.


[Details][phase-two]

### Phase 3: Add views for medications, tests, and vaccines (1 day)

I will set up the React component for the Individual Record Page and the children components. At this point, I should be able to add new cats and new people to the database.


[Details][phase-three]

### Phase 4: Search, displaying results, and RUD (2 days)

Phase 4 adds search function for cats and people. A cat has one owner, and a person can have many cats. Cats can have many vaccines, medications, and medical tests. A vaccine, medication, or medical test belongs to one cat. I will set up links to update and destroy cats, people, medications, vaccines, tests from the individual record page and the homepage.

[Details][phase-four]


### Phase 5: Advanced Search and User Info (1 day)

Phase 5 implements search by attributes. Create a component for advanced search by attributes and the associated flux needed for it. Create user info component.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

I will style with CSS and possibly bootstrap. Add seed data

### Bonus Features (TBD)
- [ ] Can associate media and owners with animals
- [ ] Role-based permissions management
- [ ] Can take database info and insert into templates
- [ ] Can sort animals by their location and display them (shelter view)
- [ ] full word processor and online application form
- [ ] standard adoption contracts, invoices, cage cards included and fully editable
- [ ] automatic daily publishing to petfinder.com, adoptapet.com, rescuegroups.org and other partner adoption sites
- [ ] staff and volunteer rota management
- [ ] document and contract generation, mailing labels, bulk emailing/fundraising
- [ ] post adoptable animals straight to your shelter's Facebook page, Twitter, Pinterest or Google+ feeds
- [ ] importing data

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
