// Require the node.js built-in HTTP module to create a server
const HTTP = require('http')
const { sendJSON, sendHTML, sendCSS } = require('./utils', './assets/main')



const server = HTTP.createServer((request, response) => {
  const path = request.url
  console.log("Request received", path)
  if (path === '/') {
    response.end('Home')
  } else if (path === '/opensesame' ){
    response.end('You found the secret')
  } else if (path === '/assets/main.css' ){
    response.writeHead(200, {
      'Content-Type': "text/css"
    })
    response.end(`
    h1 {
      font-family: "Sans Serif";
    }
    `)
    // sendCSS(FS.readFile('/assets/main.css'))
  } else if (path === '/about' ){
    sendHTML(response, 
      `<h1>About</h1>
      <p>This is a paragraph</p>`
    )
  } else if (path === '/postcode/3000' ){
    sendJSON(response, 200, [
      { name: "Melbourne", postcode: 3000 }
    ])
  } else if (path === '/postcode/3020' ){
    sendJSON(response, 200, [
      { name: "Albion", postcode: 3020 },
      { name: "Sunshine", postcode: 3020 }
    ])
  } else if (path === '/postcode/3021' ){
    sendJSON(response, 200, [
      { name: "Kings Park", postcode: 3021 },
      { name: "Kealba", postcode: 3021 },
      { name: "St. Albans", postcode: 3021 },
      { name: "Albanvale", postcode: 3021 }
    ])
  } else if (path === '/postcode/3022' ){
    sendJSON(response, 200, [
      { name: "Deer Park East", postcode: 3022 },
      { name: "Ardeer", postcode: 3022 }
    ])
  } else {
    sendJSON(response, 404, 
    { error: "Page not found" }
    )}
  })

// Start the server
server.listen(7000, (error) => {
  console.log('Server has started at http://locahost:7000')
})
