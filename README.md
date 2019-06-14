# Restful-Service

[![License](https://img.shields.io/github/license/Faizan-Shiraz/restful-service.svg)](https://opensource.org/licenses/MIT)

Restful service is HTTP adapter for the front-end using native window fetch for making network calls

## Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install restful-service
or
$ yarn add restful-service
```

## Usage
```javascript
import { basicGet, basicPost } from 'restful-service';

const promise = basicGet(urlString)();
promise.then(result => console.log(result));
    
const res = basicPost(urlString)(payloadObject)();
res.then(r => console.log(r))
```
## Examples

##### Get Request: 
```javascript
import { basicGet, basicPost } from 'restful-service';

const promise = basicGet('https://jsonplaceholder.typicode.com/users')()
promise.then(result => console.log(result))
```
##### Post Request: 
```javascript
const p = basicPost('https://jsonplaceholder.typicode.com/posts')({
  title: 'foo',
  body: 'bar',
  userId: 1
})();
res.then(r => console.log(r))
```