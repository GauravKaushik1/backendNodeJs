Trying to learn backend 
<h1>Perquisites of setting up a professional grade backend</h1>
cmd executed:
node -v
npm init
git init
git add .
git branch -M main
git remote add origin git@github.com:GauravKaushik1/gklearn.git
git push -u origin main
git commands
…or create a new repository on the command line
echo "# setup_professional_backend_project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git checkout "v1.0.0"
git branch -m "v1.0.0"
git remote add origin git@github.com:GauravKaushik1/gklearn.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin git@github.com:GauravKaushik1/gklearn.git
git branch -M main
git push -u origin main

images storage and kept temporary in the file
make .gitkeep file to keep the temporary files in use currently

.gitignore generator may also be used for making sure some files are never uploaded to github

add "type": "module", to package.json for using the modular asynchronous code approach instead of common js


install dev dependency of node mon so that we do not have to start/stop the server for refresh or use --watch may be an alternative

env is not easily import using the module format 
<h2>Notes as per the chai with code channel help to learn backend</h2>
<h3>How to set up a professional backend project</h3>
<p></p>
<h4>Work of a backend dev</h4>
<p>The ui and frontend developers make the look and feel of the website signup buttons login text font from instructions of figma or xd files.
how much spacing font what images and what are assets that is work of front end developers / engineers.</p>
<p>Then the ui to linked to the backend by frontend dev using api calls and recieving the data.
The look and feel may seem too important but it is not the work of a backend developer/ engineer.
color is not important looks at the files to collect the data points that may be need and processed</p>
<h6>For example: making the models for the db of an online video playing site</h6>
<ul>userProfile
<li>_id -string -primary key</li>
<li>userName -string </li>
<li>email -string</li>
<li>fullName -string</li>
<li>avatar -string -cloudary</li>
<li>coverimage -string -cloudary</li>
<li>password -string -to be hashed</li>
<li>refreshToken -string</li>
<li>LikedVideos</li> -Some Model
<li>watchHistory -User must have an array to collect the video data - take the reference of the videos id</li>
<li>timestamps -containing the updated at date and created at date</li>
</ul>
<ul>videos
<li>_id -string -primary key</li>
<li>videoFile -string -cloudary or other hosting service</li>
<li>thubnail -string -cloudary or other hosting service</li>
<li>owner -objectId -reference to the userProfile _id</li>
<li>title -string</li>
<li>description -string</li>
<li>duration -number -cloudary or other service</li>
<li>views -number</li>
<li>isPublished -is it public or not</li>
<li>timestamps-containing the updated at date and created at date</li>
</ul>
<ul>likes
<li>_id - string -primary key</li>
<li>comment -ObjectId of comments</li>
<li>video -ObjectId of videos</li>
<li>likedBy -ObjectId of userProfile</li>
<li>tweet - Objectid of tweets</li>
<li>timestamps-containing the updated at date and created at date</li>
</ul>
<ul>comments
<li>_id - string -primary key</li>
<li>content -string</li>
<li>video -ObjectId videos</li>
<li>owner -ObjectId userProfile</li>
<li>timestamps-containing the updated at date and created at date</li>
</ul>
<ul>tweets
<li>_id - string -primary key</li>
<li>owner -ObjectId userProfile</li>
<li>content -string</li>
<li>timestamps-containing the updated at date and created at date</li>
</ul>
<ul>playlist
<li>_id - string -primary key</li>
<li>name -string</li>
<li>description -string</li>
<li>videos -ObjectId[] videos</li>
<li>owner -ObjectId users</li>
<li>timestamps-containing the updated at date and created at date</li>
</ul>
<ul>subscriptions
<li>_id - string -primary key</li>
<li>subscriber -ObjectId users</li>
<li>channel -ObjectId users</li>
<li>timestamps-containing the updated at date and created at date</li>
</ul>
<h4>Git Portion</h4>

<h1>steps to set up backend step by step<h1>
use setup commands:
node -v 
<!--to check the installation of node js should be 19-->

npm init
<!--to make it into a node js package empty app or initialize the repository
    enter the details such as the 
    *package name
    *version
    *description
    entry point
    *test command
    *git repository
    *keywords
    *author
    *license if any
-->

<h3>create a new repository on the command line</h3>
echo "# setup_professional_backend_project" >> README.md

git init
git add . 
<!-- this commands stages all the changes for the commit coz of . one may also use a single file name to add that for commit -->

git commit -m "add as initial files for backend"
<!--This command adds the comment of what is change and does the commit to changes for pushing-->
git branch -M main 
<!-- to rename the current branch of the local repository currently active to be called main -->
git remote add origin https://github.com/GauravKaushik1/gklearn.git
<!-- to link the local repository to a remote github branch -->
git push -u origin main
<!-- push the commited changes to the remote git repository stored at origin defined in the previous command -->

<h3>…or push an existing repository from the command line</h3>

git remote add origin git@github.com:GauravKaushik1/gklearn.git
git branch -M main
git push -u origin main
<!-- it sets upstream -->
<!-- to push this to git 
    create a github account if not already
    then 
    create a git repo and get the clone url for usage in git commands
-->
<h2>files needed:</h2>
.gitignore it contains the names of the files that are not tracked by git and are only for the development not production and can be regenerated like the files of the node module folder and the .env file make it using .gitignore generators

.env environment variable holder
<ul>Content of .env file
<li>PORT=80</li>
<li>MONGODB_URI=</li>
<li>CORS_ORIGIN=*</li>
<li>ACCESS_TOKEN_SECRET=</li>
<li>ACCESS_TOKEN_EXPIRY=1d</li>
<li>REFRESH_TOKEN_SECRET=</li>
<li>REFRESH_TOKEN_EXPIRY=10d</li>
<li># CLOUDINARY_CLOUD_NAME=</li>
<li># CLOUDINARY_API_KEY=</li>
<li># CLOUDINARY_API_SECRET=</li>

make src folder to contain the folders
mkdir src
cd src
ls
touch app.js constants.js index.js
<ul>Content of constants.js 
<li>export const DB_NAME = "db-to-Connect";</li>
</ul>
mkdir controllers db middlewares models routes utils
cd ..
mkdir public
cd public
mkdir temp
cd temp
.gitkeep to keep the files on the git for tracking even if the folder does not contain any files yet
<!-- the folders created are 
* controllersthe controllers to majorly functionality 
* db db connection logic
* middleware to set the checks before the server fulfils the request like if you possess the necessary tokens or not or are you authorized to get the processed data from the server
* models to contain the data models for the db
* routes majorly set here
* utilities contains the wrapper codes or functions for the repeated work
-->

<h4>additions to package.json</h4>
<p>Add this to your package.json file
    <ul>
        <li>"type": "module",<ins> -to keep consistency</ins> </li>-to use the import syntax of asynchronous modular js es5 instead of the synchronous common js syntax of require 
        <ul> in the "scripts":{}, - add these
            <li>"start": "node index.js",</li>
            <li>"dev": "nodemon index.js", <ins>-usually but to use the bycrpt or the experimental features use the next one</ins></li>
            <li>"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js",<ins> -for using the experimental features add this</ins></li>
        </ul>
    </ul>
</p>
<h3>installing dependencies</h3>
install dev-dependies(development only and not production)nodemon utility - to restart the server only and not refresh the page
prettier utility - to synchronize the format and the symbols used for the 
npm i -D nodemon prettier
install all the other dependencies you may need:
npm i bcrypt cloudinary cookie-parser cors dotenv express jsonwebtoken mongoose mongoose-aggregate-paginate-v2 multer

<h5>Prettier Setup</h5>
<p>prettier 
example:
the team
one used the ; 2 or 4 spaces for the files so that upon join the conflcits
<ul>The files
<li>.prettierrc -contains the setting for prettier to apply that</li>
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}
<li>.prettierignore -contains the files that prettier is not to touch like environment variables, vs code settings,etc.</li>
/.vscode
/node_modules
./dist

*.env
.env
.env.*
</ul>
</p>
<h2>DB connect</h2>
<p>
<ul>MongoDB
    <li>signup</li>
    <li>make clusters</li>
    <li>deploy using free and clusterName</li>
    <li>username :</li>
    <li>password :</li>
    <li>go to the network access</li>
    <ul>
        <li>allow acces to the database accessing server machine ip-address(public one is 0.0.0.0/0)</li>
    </ul>
    <li>add user and set password</li>
    <li>go to cluster then click connect then compass to gett the string to connect</li>
    <li>add in the password in your code(i.e., the .env file in the MONGODB_URI) also add the db name in the constants.js file</li>
</p>
now make the db/index.js file and the index.js file to connect with the db using the db connection of db/index file
then we will make the app.js file
configure the cors()
put the origin of cors in the .env file
 make user and video model schema

 aggregation querries

 import the jwt and bcrypt or bcryptjs in to the schema model file of user.model.js
 as direct encryption is not possible so the usage of hooks of mongodb for example pre hook used
 after adding encryption to hooks now make methods to confirm if the password is correct or not as per the entered value being converted in encryped password custom methods to schema adding
 JWT is bearer token so like a key so security risks there
 for usin jwt add Access token secret , access token expiry default vaulue is 1d or less usually , refresh token secret, refresh token expiry is more than the access token expiry upto 10 d
 access token not in db only refresh token is in db 
 as we are using both sessions and cookies 
 setup file upload
 frontend role is :
 form creation, browse the file, provide the link, and submission
 rest is backend:
 express does not have direct file uploading file handling not in its own server depending on the project 

 how to handle in some api points it will come usually in middleware or the utility
 install cloudinary if not installed already "npm install cloudinary" and "multer".
 strategy through multer upload file to aws tempararily store to self server then upload to cloudinary
 make the utility cloudinary.js
 put the cloudinary details in .env file
 CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
create multer middleware also configure it

Learn about HTTP headers 
metadata -> key -value sent along with request and response 

used for : caching, authentication-- bearer token/ session cookies or session values or refresh tokens, manage state -- user state or guest or logged in or has something in the cart 
http header can also be made by us and some are also built in 
before 2012 the x must prefix the headers but it is depricated now
Request Headers- from client
Response Headers- from server
Representation Headers- encoding/ compression
Payload Headers- data
Sequirity Headers

Accept: application/json
Users-Agent: Which app gave request
Authorization: Bearer JWT----
Content-Type: 
Cookies:
Cache-Control:
<!--as per company policies what is allowed and not allowed Twitter and now x has represents scraping -->
CORS
Access-Control-Allow-Origin
Access-Control-Allow-Credentials
Access-Control-Allow-Method
Security
Cross-Origin-Embedder-Policy
Cross-Origin-Openes-Policy
Content-Security-Policy
X-XSS-Protection
HTTP Methods
Basic set of operations that can be used to interact with server
GET: retrieve a resource
HEAD: No message body (response headers only)
OPTIONS: What operations are available on endpoints
TRACE: loopback test (get same data)
DELETE: remove a resource
PUT: replace a resource
POST: interact with resource (mostly add)
PATCH: change part of a resource

basic overview of status codes:
1xx Information
2xx Success
3xx Redirection
4xx Client errors
5xx Server errors

101 Continue
102 Processing
200 OK
201 Created
202 Accepted
307 Temporary redirect
308 Permanent redirect
400 Bad request
401 Unauthorized
402 Payment required
404 Not Found
500 Internal Server Error
504 Gateway time Out
some enginnering to learn : network lag, how to optimize the data structure, os concepts

make controllers for the learing logic building to make apps and how to register
make a register function
//steps of registering a user 
1 get user details- which details and when which of them can be taken laterOn from frontend 
2 validation -- just in case frontend missed it
    *if username and email values are empty
    *email format is correct or not (some companies even detect disposable emails)
3 check if user already exists
    * via email
    * via username
    * also provide the messages relevant
4 required files are provided or not if 
    * check for avtar as it is set to compulsory
    *coverimage
    *upload them to cloudnary if it exists
5 create user object as mongodb has object so 
    *create entry in db
    *as it is response via preview so how
    *remove password and refresh token field from the response
    *check if awaited response of user creation if created sucessfull only then output the response else give him the response.
6 return the results along with http status codes

Use PostMan to test the app
    *use the

Login- To Dos
1 take input data from user using the req.body
2 allow the user to login using the username or email
3 check if user is registered user's data is in db or not via email or username to search
4 check the password if it does not match then give to the user error
5 if sucessful found generate access and refresh tokens saving refresh tokens in the db
6 send tokens through cookies or secured cookies
make the user controller and router as well
make the subscription controller and router
aggregate pipeline
    [{$match},{$lookup},{}]
    match for criteria works like a where clause 
    lookup 
    [
        {
            $lookup: {
                from:"authors",
                localField: "author_id",
                foreignField: "_id",
                as: "author_details"
            }
        },
        $addFields{//calculate and add new fields
        author_details:{
            $arrayElementAt: ""
        }

        }
    ]
    [
        {},//first pipeline
        {},//second pipeline
        {}
    ]