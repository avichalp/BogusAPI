# BogusAPI
Quick and easy way to create stubs.

#### Usage

1. `git clone <>`
2. `npm install pacakage.json`
3. `node server.js`

#### Using MongoDB

1. Create a database by the name of `dev`
2. Create a collection called `Response`
3. Insert your dummy response like :<br>
    ```
    db.Response.insert({
     url: '/docment',
     method: 'GET',
     response: {'message': 'OK'}
})
    ```
  
#### Using Stub

Hit `<some-ip>:<some-port>`/document
Response that you should get :<br> `{'message': 'OK'}` 
  
Crete any number of stubs by simply inserting approriate data in MongoDB
