const styleSheet = `
  <link
    rel="stylesheet"
    type="text/css"
    href="/build/style.css"
  >
`;

export default function (initialState) {
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
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `;
}
