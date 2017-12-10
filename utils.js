// require('./assets/main.css')
const FS = require('fs')

function sendJSON(response, status, object) {
  response.writeHead(status, {
    'Content-Type': 'application/json'
  })
  response.end(JSON.stringify(object))
}

function sendHTML(response, mainHTML) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  const HTML = `
    <!doctype html>
      <html>
      <head>
        <meta charset="utf-8"> 
        <title>My First Node.js Page</title>
        <link href="/assets/main.css" rel="stylesheet" type="text/css"/>
      </head>
        <body>
          ${mainHTML}
        </body>
      </html>
  `
  response.end(HTML)
}

function sendCSS (response, CSS) {
  response.writeHead(200, {
    "Content-Type": 'text/css'
  })
  response.end(CSS)
}


module.exports = {
  sendJSON, sendHTML, sendCSS
}