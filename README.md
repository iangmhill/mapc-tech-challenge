# mapc-tech-challenge
A mini web application for collecting and exploring voter geographic and polling data

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
- I don't need user accounts, authentication, or HTTPS encryption.
- I don't need any additional personal information from users that would allow my "campaign manager" to follow up with them.
- I can completely rely on the Sequelize ORM, so I don't have to write raw SQL.
- I don't need separate development or staging databases
- I don't need to integrate analytics or tracking software.
- I don't need to optimize for SEO with server-side rendering.
- I can assume a relatively small number of data points (thousands, not millions). If I were actually handling millions of data points, I would have to aggregate them before sending them to the client.
- I can use open source npm packages to abstract the Google Maps API into React components.
- I don't need to worry about gzip or compression for size-optimized production code.
