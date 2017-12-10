# Node Vanilla HTTP Server

## Setup
- start server with ``node server.js``
- run ``yarn init`` to create package.json (ok to accept defaults)
- run ``yarn add nodemon --dev`` ('Node Monitor' package or 'gem') to automatically detect file changes and reboot the server when required. Will only be used in development. Also creates the ``yarn.lock`` file to pin-down versions of each dependency being used and installs all the packages in the ``node_modules`` folder.
- add a script to package.json: ``"scripts": { "dev": "nodemone server.js"}``
- now run server with ``yarn dev``

#### Use the REST Client extension for VS Code to test routes and view the raw data returned by the server: ``test/1.http``.

### Hints
- use `JSON.stringify` to turn javascript (e.g. an array or object) into JSON formatted text 

## Challenges

1. Add /postcode/3021 json response
2. Add sendHTML(response, mainHTML) function to utils.js
```sendHTML(response, 
<h1>About</h1>
<p>This is a paragraph</p>
`)
```
3. Change the not found route to send back JSON instead of plain text, while still keeping the 404 status code — e.g. { "error": "Page not found" }
4. Add /assets/main.css route with some simple CSS
5. Change sendHTML() to add a <link> to the main.css URL 
6. Add a assets directory with an gif file inside. Serve that file at /assets/example.gif with the correct content type. 
7. (Advanced) Add a catch-all /postcode/(number) route, which reads a matching file in a postcodes directory. e.g. /postcode/3040 will read the file at /postcodes/3040.json in the project directory, and send it back. Otherwise, if no matching file is found, it will 404
