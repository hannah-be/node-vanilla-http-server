// Require the node.js built-in HTTP module to create a server
// (capitalise modules)
const HTTP = require('http')
const FS = require('fs')
// const PATH = require('path')
// Import helper modules
const { sendJSON, sendHTML, sendCSS } = require('./utils', './assets/main')

// Returns a new instance of HTTP server
const server = HTTP.createServer((request, response) => {
  // configure the server
  const path = request.url
  console.log("Request received", path)
  // Create routes
  if (path === '/') {
    // Specify how the server will respond
    response.end('Home')
  } else if (path === '/opensesame' ){
    response.end('You found the secret!')
  } else if (path === '/assets/main.css' ){
    // Specify the content type with .writeHead
    // Add key-value pairs for header content
    FS.readFile('assets/main.css', 'utf8', (err, data) => {
      if (err) {
        response.writeHead(404)
        sendJSON(response, JSON.stringify({ 'error': 'Page not found' }))
      } else {
        sendCSS(response, data)
      }
    })
    response.writeHead(200, {
      'Content-Type': 'text/css'
    })
  } else if (path === '/about' ){
    // Respond in HTML using function in utils.js
    sendHTML(response,
      `<h1>About</h1>
      <p>This is a paragraph</p>`
    )
    // Alternative:
    // response.writeHead(200, { 'Content-Type': 'text/html`})
    // response.end(`<!doctype.html><html><body><h1>About</h1></body></html>`)
  } else if (path === '/vanilla.gif') {
    let filePath = './assets/vanilla.gif'
    let stat = FS.statSync(filePath)
    response.writeHead(200, {
      'Content-Type': 'image/gif',
      'Content-length': stat.size
    })
    FS.createReadStream(filePath).pipe(response)
  } else if (path === '/postcode/3000' ){
    // Respond in JSON
    sendJSON(response, 200, [
      { name: "Melbourne", postcode: 3000 }
    ])
  } else if (path === '/postcode/3020' ){
    sendJSON(response, 200, [
      { name: "Albion", postcode: 3020 },
      { name: "Sunshine", postcode: 3020 }
    ])
  } else if (path === '/postcode/3022' ){
    sendJSON(response, 200, [
      { name: "Deer Park East", postcode: 3022 },
      { name: "Ardeer", postcode: 3022 }
    ])
  } else if (path.startsWith('/postcode/')) {
    postCode = path.replace(new RegExp('/postcode/'), '')
    FS.readFile(`postcodes/${postCode}`, 'utf8', (err, data) => {
      if (err) {
        response.writeHead(404)
        sendJSON(response, JSON.stringify({ 'error': 'Page not found' }))
      }
      else {
        sendJSON(response, data)
      }
    });
  } else {
    // Must send back something to prevent infinite loop - browser is waiting for a response
    sendJSON(response, 404, 
    { error: "Page not found" }
    )}
  })

// Start the server
server.listen(7000, (error) => {
  // Once the server is running it will run this code
  console.log('Server has started at http://locahost:7000')
})
