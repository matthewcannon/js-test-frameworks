# js-test-frameworks
A sandbox for evaluating JS test frameworks, including support for React.
## Getting started
1. Install the latest version of [Node.js](http://nodejs.org)
2. `npm install`
3.  npm install -g gulp-cli`
4. `gulp`
## Unit testing
The top-level directory contains a very basic use of Mocha and is the simplest example in this repo. Gulp is used to get things moving.
## Headless browser testing
The `./headless` directory contains a skeleton React app which can be deployed locally and hit with headless browser tests. The tests are written in Mocha and driven by Puppeteer.
## TDD
`gulp tdd` watches for changes to the application code and test code and runs all the tests.
