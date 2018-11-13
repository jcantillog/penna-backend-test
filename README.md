# Overview

This test project is focused on showing in a general way 
the knowledge about the management of NodeJs and MongoDB 
technologies. The context in which the project is applied 
consists of a setting where parents can be managed, 
who have projects which can be supported with "likes" 
and can receive donations. The scope of the project is 
limited to presenting the way in which the design of the 
backend structure, the design of the database and the use 
of the GIT tool as a version controller were addressed. 
Any questions or for more details, please get in touch 
with me. Thank you.

# Running the project
- Clone the repo
- By using the terminal, go to the project folder
- Make sure you're on master branch
- Run 'npm install' for installing all the project dependencies
- Run 'npm start' or 'nodemon ./bin/www' to get the app running on localhost

# Endpoints

  ## PARENTS

  ### POST: /parents
  
    Create a new parent.
  
  ### GET: /parents
  
    Return the entire list of parents.
  
  ### GET /parents/{id}
  
    Return a parent with the given ID.
  
  ### PUT /parents
  
    Update basic info regarding to a parent.
  
  ### DELETE /parents
    
    Remove a parent.
  
  
  ## PARENTS
  
   ### POST: /projects
    
    Create a new parent project.
    
   ### GET: /projects/{parent_id}
    
    Return the entire list of parent's projects.
    
   ### GET /projects/{parent_id}/filter
    
    Return the entire list of parent's projects filtered by title or description.
    
   ### PUT /projects
    
    Update title and/or description regarding to a project.
    
   ### DELETE /projects
      
    Remove a project.
    
   ### PUT /projects/balance
       
    Update a project balance saving a transfer history.
    
   ### PUT /projects/likes/add
    
    Increase project likes number.
    
   ### PUT /projects/likes/remove 
    
    Decrease project likes number.

# Collections
  
  The models folder contains the structures used for each collection 
  which is stored in and retrieved from the database. Database is already
  set up in MLAB, that's why it's no required to do anything else.
  
# Postman requests

  By using the link https://www.getpostman.com/collections/2590239851df3eee348b, 
  you can download the set of requests needed to test 
  this project. Keep in mind that Postman needs to be 
  installed or accessed from the web.
  