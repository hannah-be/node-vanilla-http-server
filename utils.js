// require('./assets/main.css')
// const FS = require('fs')

// Need to pass along 'response' to keep track of the response for each user 
function sendJSON(response, status, object) {
  response.writeHead(status, {
    'Content-Type': 'application/json'
  })
  response.end(JSON.stringify(object))
}

function sendHTML(response, html) {
  response.writeHead(response.statusCode, {
    'Content-Type': 'text/html'
  })
  // console.log(html)

  response.end(`
  <!doctype html>
  <head>
  <link rel="stylesheet" type="text/css" href="/assets/main.css">
  </head>
  <body>
  ${html}
  </body>
  </html>`)
}

function sendCSS(response, css) {
  response.writeHead(response.statusCode, {
    'Content-Type': 'text/css'
  })
  response.end(css)
}

// Export helper modules
module.exports = {
  sendJSON, sendHTML, sendCSS
}