# nanos
This application was generated using JHipster 5.1.0, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v5.1.0](https://www.jhipster.tech/documentation-archive/v5.1.0).

## Decisions

I decided to use JHipster to create a base project since it offers a state of the art backend and frontend solution out of the box. 

### Backend

I used Spring Boot for the server since it's the framework I'm used to using and would fit this project well. I had the option to choose a single module solution or a micro-services approach. 
Since a micro-services approach would be overkill for a simple app like this one, I opted for the single module solution.
Additionally, the server supports *JWT authentication* with Spring Security.

For the database I opted to use [MongoDB] for mainly two reasons:
   1. The nature of the data provided perfectly matched a document-based approach
   2. A NoSQL database would allow me to save time, since I don't need to build a complete data model that matched the domain we are using
   
The database is initiated using [MongoBee], a MongoDB data migration tool for Java. 
I added a changeset that loads the *data.json* file and deserializes it to the Campaign class, before submitting it to the MongoDB database. For more details, please check InitialSetupMigration.java

The data set is available in a standard REST API, which you can test using [Swagger] by starting the server with the `swagger` profile.

### Frontend

For the client I opted to use Angular since it's one of the best Javascript frameworks available and also the one I have the most experience with. 

The navigation is fairly simple: the user needs to login first before seeing any of the campaigns data. 
The campaigns list is displayed in a table with some basic info about it and about the platforms it contains.

![home-list-image]
    
Clicking the campaign title will direct you to the campaign's detail page. There we can see each of the campaign's platforms and it's details.
Each platform column is one component (campaign-platform) which adapts to its particularities, such as having `Keywords` data instead of `Interests`.
The layout also adapts to the number of platforms available in a campaign.

![campaign-detail]

    
## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    docker-compose -f src/main/docker/mongodb.yml up -d    # starts a docker container with a MongoDB instance
    ./mvnw                                                 # starts server
    yarn start                                             # starts client app

[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

## Building for production

To optimize the nanos application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    yarn test



For more information, refer to the [Running tests page][].

## Using Docker

You can use Docker to improve your development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw verify -Pprod dockerfile:build dockerfile:tag@version dockerfile:tag@commit

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[JHipster Homepage and latest documentation]: https://www.jhipster.tech
[JHipster 5.1.0 archive]: https://www.jhipster.tech/documentation-archive/v5.1.0

[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v5.1.0/development/
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v5.1.0/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v5.1.0/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v5.1.0/running-tests/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v5.1.0/setting-up-ci/


[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
[Angular CLI]: https://cli.angular.io/
[BrowserSync]: http://www.browsersync.io/
[Jest]: https://facebook.github.io/jest/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/
[MongoDB]: https://www.mongodb.com/
[MongoBee]: https://github.com/mongobee/mongobee
[Swagger]: https://swagger.io/
[home-list-image]: https://i.imgur.com/WPLYXi8.jpg
[campaign-detail]: https://i.imgur.com/6Y5p7HW.jpg
