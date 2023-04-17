# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:
Super is a method used for the subclass (child class) and you have to use the less than (<) symbol to establish a relationship with the super class (parent class). Calling super in a Ruby class allows us to call on the parent class, which is the class that holds all of the attributes that gets passed down to the subclass (child class). Whatever is in the super class (parent class) initialize parameters needs to be in the super initialize parameters of the child class. However, you are not limited to just those parameters, you can add new parameters in the subclass (child class). In return for adding new parameters in the subclass, the super class (parent class) will inherit the parameters of the subclass (child class) and be able to pass those attributes down as well when another new subclass is created. It becomes a cycle and will build on the super class. 

For example: 
super class parent = 
  class MovieApp
    attr_accessor :title, :category, :liked
    def initialize (title, category) <!--parent initialize parameters-->
  ...........etc
  end

subclass child = 
  class Netflix < MovieApp <!--less than symbol ( < )-->
    def initialize (title, category) <!--same initialize parameters as parent class-->
  ...........etc
  end

Researched answer:
Super is a method used in the subclass (a child class). Variables are not automatically inherited from the super class (a parent class) because they are only local to that specific instance of a class and they must be invoked thru a super method in order for a subclass (child) to have access. When using a "super" method in a subclass, you are essentially borrowing variables from the parent class and you can still add more variables to the subclass to make more specific code for what you want.   

2. What is a gem?

Your answer:
A gem is code snippets that are used for a particular function in Ruby. A gem is also a hash symbol used in Ruby when coding. 
     
Researched answer:
A gem is a snippet of code or library of code functions. Gems make it easier to code and share code functions with others. Gems are packaged in a way to make the most common code functions be easily used in an application. They are run by the Ruby manager and so they are called Ruby Gems. 

3. What is a relational database? Are there other kinds of databases?

Your answer:
 A relational database stores information that allows us to search for many different values within our local computer system. It will show us a list of our computer database and it cannot be shared. Using Postgres is a relational database. There are many other kinds of databases that are used by large companies. 

Researched answer:
Relational databases have rows and clolumns and stores and organizes information in tables. The database is like a spreadsheet that has columns and rows and information contained in those sets of rows and columns, which equal to a table. There are many databases that are used by organizations to manage large amounts of data.  

4. What are primary keys? Why are they important?

Your answer:
Primary keys are key identifiers used to assign a number value to a particular instance within Ruby. They are important because they cannot be altered and they are dedicated strictly for what is meant for it. Primary keys can be used to filter out information that we need to make locating things faster and more efficient. 

Researched answer:
Primary keys (PK) are named with an "id" and the "id" is a unique identifier. They are important because these unique identifiers are used to seperate instances apart from one another so that they are not confused with another instance with the same name when calling on them. They are guaranteed to belong to only one instance variable. Every row that is created has a primary key ID that is automatically assigned by rails.     

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
HTTP verbs are Hyper Text Transfer Protocols (distributed and collaborative information systems). Whenever we click ENTER on the compter, a request is sent out to the server, the server then looks to find that information and responds back to the computer with the results/answer. It's called a request and response cycle. The verbs are: post, get, put & patch, and delete. Each verb corresponds to CRUD (Create, Read, Update, Delete) actions. When a user posts something, they are sending out a request to add new content or "Create". When a user gets to see content displayed on a website, they are requesting to display content or "Read". When a user inputs or patches something, they are sending out a request to edit or modify contents or "Update". When a user removes content, they are requesting to remove content or "Delete.  

Researched answer:
The HTTP verbs are post, get, put/patch and delete. These verbs corresponds to CRUD actions into HTTP requests. The action to create corresponds with the request to post. The action to read corresponds with the request to get. The action to update corresponds with the request to put/patch. The action to delete corresponds with the request to delete. These are all needed when creating tasks and a structure for items in a web application, thereby they are controller methods. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Model validations are useful and meaningful information that is stored into databases. They must be cleaned and validated before they are saved into the database. If there are any errors, the information will not be saved. This ensures that they are working as they were designed to do and that the data is protected. Rails runs validations before any content is added to the database.  

2. RESTful routes: RESTful routes are operations that can be applied to objects in HTTP requests. It is a structure of routes between the server and the user, which shows a pattern or pathway of links. These patterns/pathways of links are used to implement CRUD and controller actions by mapping between HTTP verbs. 

3. ERB: ERB (Embedded Ruby) is a powerful template language/system that is easy to use in Ruby. Code can be added to any text document to generate information details or control using ERB. It recognizes certain tags in a code and can convert them while other text is just filtered thru ERB.  

4. Params: Params updates and sets restrictions on controller methods. They assist in controlling what information is allowed to be stored in a database. Params have two methods that are "require" or "permit". The require method does exactly as required of the attributes that are passed in to the create or update methods. The permit method has only certain items that may be present in the methods. They are meant to be used as arguments in the methods and are the last methods inside of the controller methods.

5. API: API is short for Application Programming Interface. It passes or sends data in the form of JavaScript Object Notation (JSON), a data structure. The data that is stored, retrieved, created, updated, deleted or accessed are all communications that is passed to an API. Combined with the model and controller is an API working on the server side of what you can see on a website.
