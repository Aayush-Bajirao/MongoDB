db.movies.find().limit(2)    //limit 2

db.movies.find().sort({runtime: 1})  //acsending
db.movies.find().sort({runtime: -1})  //decreasing 

db.movies.find().skip(1)     //skips first
db.movies.find().skip(2)    //skips first 2

//pagination
no = 8 //blogs in one page
pageno
db.blogs.find().skip((pageno-1)*no).limit(no)
pageno = 1 -- db.blogs.find().skip(0).limit(8)
pageno = 2 -- db.blogs.find().skip(8).limit(8)

