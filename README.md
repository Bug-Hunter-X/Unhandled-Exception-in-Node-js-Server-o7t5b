# Unhandled Exception in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions arising from file system operations. The `bug.js` file shows a server that attempts to read a non-existent file without any error handling. This leads to a server crash.

The `bugSolution.js` file provides a corrected version with proper error handling, preventing the crash and returning a meaningful error response to the client.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Try accessing `http://localhost:3000`. The server will crash.
5. Run `node bugSolution.js`.
6. Try accessing `http://localhost:3000`.  The server will respond with a 500 error.

## Solution

The solution involves using try...catch blocks to gracefully handle potential errors.  The corrected code ensures that exceptions are caught and handled appropriately, preventing the server from crashing.