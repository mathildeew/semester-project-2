# Semester Project 2- Gavel
<img width="1510" alt="gavel" src="https://github.com/mathildeew/semester-project-2/assets/94295012/6616d1d1-4947-487d-a1be-085dca76cd1a">

Gavel is an online auction site. The API functionality is managed by an existing application, and the project covers the front-end application for the API. It features user authentication, listing auctions and bidding. The project integrates Prettier for code formatting, ESLint for linting and Cypress for E2E testing.

## Brief
The goal for this project was to take the skills learned over the past three semesters and create an auction website. The technical restrictions was to use an CSS framework, the site must be hosted on an approved static host and use an approved design application.

**User stories includes**
- A user with a stud.noroff.no email may register
- A registered user may login
- A registered user may logout
- A registered user may update their avatar
- A registered user may view their total credit
- A registered user may create a Listing with a title, deadline date, media gallery and description
- A registered user may add a Bid to another user’s Listing
- A registered user may view Bids made on a Listing
- An unregistered user may search through Listings


[Visit demo site](https://gavel-sp2.netlify.app/]

## Built with

- HTML
- Bootstrap
- Javascript
- [Noroff Auction House API](https://docs.noroff.dev/auctionhouse-endpoints/authentication)

## Instructions

### Installation

- Clone the repo
  `git clone git@github.com:mathildeew/semester-project-2.git`
- Install the dependencies
  `npm i`
- Run the project
  `npm run build`
  `npm run watch`

### Formatting & linting
- Run Prettier for formatting
  `npm run format`
- Run ESLint to check for programmatic errors
  `npm run lint`
  
### Testing
- Run Jest for unit-testing
  `npm run test-unit`
- Run Cypress for end-to-end testing
  `npm run test-e2e`
- For testing with Cypress in command line run 
  `test-e2e-cli`
- Run Jest and Cypress toghether
  `npm run test`
