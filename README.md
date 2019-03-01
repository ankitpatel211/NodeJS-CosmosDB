# NodeJS-CosmosDB

Steps to clone & run the application on local computer:
   1) Clone repository at any location on your computer.
   2) Run on either CMD or Node.JS command prompt terminal or if you are using VS code then open terminal.
   3) Go to the repository path & type npm install command to create node_modules folders for the required modules used in this application.
   4) Type npm start to run the application.
   5) SampleJSON.json file has task information in JSON format for reference to perform CRUD operations.
   5) Use postman to test the API calls. 
          1) GETALLDATA: This api call is used to retrieve all tasks information from AZURE cosmosdb.
               Method: GET
               URL: http://localhost:3000/
          2) ADDITEM: This api call is to add new item in tasks list in AZURE cosmosdb.
               Method: POST
               URL: http://localhost:3000/addtask/
               Request Body: RAW JSON data
                             {
                                "task":"get yogurt",
                                "who":"xyz",
                                "dueDate":"2019-05-15",
                                "done":true
                             }
          3) UPDATEITEM: This api call updates existing task in AZURE cosmosdb.
               Method: PUT
               URL: http://localhost:3000/updatetask/
               Reques Body: RAW JSON data
                           {
                              "task":"get veggies",
                              "who":"Andy",
                              "dueDate":"2013-04-15",
                              "done":false,
                              "id":"0c62a4d0-eed2-d49e-4c25-b8d1f68fffa4"
                           }
          4) GETITEMBYID: This api gives item based on the Id provided in request.
               Method: GET
               URL: http://localhost:3000/:Id
          5) DELETEITEM: This api deletes the specific item by Id during the incoming request.
               Method: DELETE
               URL: http://localhost:3000/deletetask/:Id
               
   Deploying application on AZURE:
      There three ways to deploy application on AZURE 1) AZURE Portal 2) AZURE Bash CLI 3) AZURE DevOps
       1) AZURE Bash CLI
          -> Well, create a new resource group and service plan through CLI commands.
          -> Create web api service
          -> Create git username & password
          -> Provide git URL for the source where do your code is.
          -> do execute this command git remote push master
          -> This will deploy on the AZURE
          -> Use AZURE portal to check the deployment URL and test it through POSTMAN.
       2) AZURE DevOps
          -> Click on build from the options will provide you different version control links like GitHub, BitBucket, etc., you can 
          also create a local git.
          -> Use the repository URL to build your branch from github.
          -> Click on release to release the build code to release Pipeline.
          
          
     
          
