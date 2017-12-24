/**
 * Render the page and encode the initial state. The separate stylesheet is
 * unnecessary in development.
 */
export default function (initialState) {
  const styleSheet = `
    <link
      rel="stylesheet"
      type="text/css"
      href="/build/style.css"
    >
  `;
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>MAPC Tech Challenge</title>
        ${process.env.NODE_ENV === 'production' ? styleSheet : ''}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
        >
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places"></script>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          window.__GOOGLE_API_KEY__ = "${process.env.GOOGLE_API_KEY}";
        </script>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `;
}
