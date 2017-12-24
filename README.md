# mapc-tech-challenge
A mini web application for collecting and exploring simple voter geographic and polling data

## How to run this code locally
To run this code locally, you will need a Postgres database ready (with the PostGIS extension), node, npm, and nodemon installed.
1. Clone the repository on your local computer.
2. Run `npm install` to download dependencies.
3. Create a `settings.env` file with the following environment variables.
  - `PORT`: Port on which to launch the server
  - `DB_USER`: Username for database authentication
  - `DB_PASSWORD`: Password for database authentication
  - `DB_HOST`: Host server for the database
  - `DB_PORT`: Port on which the host is serving the database
  - `DB_NAME`: Name of the database on the host
  - `GOOGLE_API_KEY`: Google Maps API key
4. Run `npm run dev` to start the server in development. (Run `npm run build` followed by `npm start` to build the static files and run the server in production.)

## Stack
I decided to use the tech stack that I'm most familiar with lately.
- React (transpiled with Webpack)
- Redux (transpiled with Webpack)
- SASS (transpiled with Webpack)
- Express
- PostgreSQL and PostGIS (running in AWS)
- Node (running on Heroku)

## Assumptions
In order to attempt to create this application in 4 hours or so, I made several assumptions that might be unrealistic in a real production application.
- **No security:** I don't need user accounts, authentication, or HTTPS encryption.
- **No contact info:** I don't need any additional personal information from users that would allow my "campaign manager" to follow up with them.
- **No raw SQL:** I can completely rely on the Sequelize ORM, so I don't have to write raw SQL.
- **Prod only:** I don't need separate development or staging databases
- **No tracking:** I don't need to integrate analytics or tracking software.
- **No SEO:** I don't need to optimize for SEO with server-side rendering.
- **Few data points:** I can assume a relatively small number of data points (thousands, not millions). If I were actually handling millions of data points, I would have to aggregate them before sending them to the client.
- **NPM freedom:** I can use open source npm packages to abstract the Google Maps API into React components.
- **No compression:** I don't need to worry about gzip or compression for size-optimized production code.
- **No backwards compatibility:** I can design for modern browsers and do not have to account for old CSS incompatibilities.

## Design decisions
- **CSS naming scheme and SASS:** I chose to use SASS because it can abstract complex selector patterns and allow me to use variables. It also allows me to write the SASS file for a component with a similar structure to the component itself. For any decent-sized project, CSS class naming can become complicated quickly, so I've chosen to create a class naming scheme that mirrors the relevant React components.
- **PropTypes:** React PropTypes add structure and documentation to React's otherwise reform component "prop" pattern.
- **Constants:** Both the SASS and JavaScript client directories have a constants file to store global variables and application text. In a larger application this would help with internationalization if we wanted to be able to switch languages within the application.
- **Colors:** I borrowed some of the colors from the [US Web Design Standards](https://standards.usa.gov/components/colors/) which I've found to be helpful and well documented.
- **Multiple sources of truth:** Generally, it's good practice to have one source of truth for the data in an application. However, I decided to include duplicate information about a voter's location in the database to improve performance. For the purposes of this exercise, I consider the address to be the primary source of truth from which the latitude and longitude are derived. (Voters don't tend to memorize the latitude and longitude of their home.) In the future, the PostGIS encoding of the voter's location would be useful for querying, but I also included the JSON encoding of the location because the Google Maps API requires that encoding for markers. Since reformatting the PostGIS encoding for Google Maps would require an O(n) operation for every page load, I decided to cache that encoding as a secondary source of truth.

## Future work
- **Map recentering:** Unfortunately, the map does not recenter around an address if an user types in an address that is outside the bounds of the map. Naturally, this behavior would be confusing and would have to be fixed before launching to production.
- **Custom radio buttons:** Given the time constraints for this project, I decided to skip customizing the radio buttons, but it would be nice to make them graphically consistent with the rest of the application.
- **Security around results:** There's really no security anywhere around this application, so a proper user account system would have to be created to ensure that only the Campaign Manager could view the final results.
- **Clicking on pins:** Being able to click on the pins to read the address would be a helpful touch for the results page.
- **Pending indicators:** Usually, I would add indications when an asynchronous operation is pending (like a request for data or submission of a form), but I didn't have time to add those details.
- **Robust error handling:** Very few errors are elegantly handled in this application (particularly on the client side). I would especially like to be able to tell the user if an asynchronous operation had failed.
- **Form validation:** The application currently lacks form validation which would be particularly important for ensuring clean and complete data. It's also important to tell a user if their vote is missing an important piece of information.
