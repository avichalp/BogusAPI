# BogusAPI
Quick and easy way to create stubs.

#### Usage

1. `git clone git@github.com:avichalp/BogusAPI.git`
2. `npm install pacakage.json`
3. `node server.js`

#### Using MongoDB

1. Create a database by the name of `dev`
2. Create a collection called `Response`
3. set environment variable by issuing following command <br>`export MONGO_LOCAL_URI=<your mongo url>` for exmaple:<br> `export MONGO_LOCAL_URI=mongodb://localhost:27017/dev`
4. Insert your dummy response like :<br>
    ```
    db.Response.insert({
     url: '/document',
     method: 'GET',
     response: {'message': 'OK'}
})
    ```
  
#### Using Stub

Hit `localhost:8080/document`
Response that you should get :<br> `{'message': 'OK'}` 
  
Create any number of stubs by simply inserting approriate data in MongoDB
