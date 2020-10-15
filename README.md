# Artie

Artie is a librarian program I wrote in NodeJS to learn GraphQL. Boy, oh, boy, isn't it amazing!

## Getting started
1. Clone the repo and run ```npm install``` (duh!)
2. Run ```npm run dev``` to start the server at port 5000.
3. Go to [localhost:5000/graphql](http://localhost:5000/graphql) to start playing around with GraphiQL (pronounced: graphical).
4. ```server.js``` contains all the server side code.

## Schema
1. Root query  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _book_ (to return a single book given an id as an argument)  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _books_ (to return the list of books)  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _author_ (to return a single author given an id as an argument)  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _authors_ (to return the list of authors)  

## Mutations
1. Root mutation  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _addBook_ (to add a book. Args to be passed are, name of the book and name of the author)  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _removeBook_ (to remove a book given an id as an argument)  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _addAuthor_ (to add an author. Name of the author has to be passed as an argument)  
&nbsp;&nbsp;&nbsp;&nbsp;|_ _removeAuthor_ (to remove a book given an id as an argument)  

## GraphQL Objects  
1. Author  
&nbsp;&nbsp;&nbsp;&nbsp;|_ fields  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ id (Type: Int): Author ID.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ name (Type: String): Author name.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ books (Type: List)  

1. Book  
&nbsp;&nbsp;&nbsp;&nbsp;|_ fields  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ id (Type: Int): Book ID.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ name (Type: String): Book name.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ authorId (Type: Int)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ author (Type: Author)  

## Lists
1. Authors - List of authors.
2. Books - List of books.

## Issues
* Need to return the result of the remove mutations in a better way. Currently, it gives an error message but it does the work.