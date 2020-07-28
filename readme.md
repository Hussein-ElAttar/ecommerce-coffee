## Running the project with docker:

1- clone the repo and cd into project root

2- Add ```.env``` file with "MONGO_DB_URI" for the docker service, for example:

   ```MONGO_DB_URI=mongodb://mongo/ecommerce```

3- Start the app:
``` docker-compose up ```

4- Run seeders:
``` docker exec -it ecommerce-app node seeders/index.js ```

## Running the project with local dependancies:
1- cd into project root

2- ``` cd app ```

3- ``` npm install ```

4- Add mongodb uri for config file in ```app/config/db.js```

5- ``` node index.js ```


## Test case scenarios:
* Get all products => "/api/v1/products"
* Get water line compatible proucts => "/api/v1/products?filters[water_line_compatible]=1"
* Get Espresso-Machines products only => "/api/v1/products?categoryName=Espresso-Machines"
* Get Espresso-Pods only with flavor vanilla => "/api/v1/products?categoryName=Espresso-Pods&filters[flavor]=vanilla"
... etc

Note: 
    Not all task seeds are included but they are handled with two parameters
    - "cateogryName" string
    - "filters" object
