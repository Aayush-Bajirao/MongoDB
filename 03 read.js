db.movies.find()          //fetch all docs--select * from inventory

db.movies.find({rated: "PG-13"})           //fetch only docs with rated "PG-13"

db.movies.find({ rated: { $in: [ "PG", "PG-13" ] }})            // SELECT * FROM movies WHERE rated in ("PG", "PG-13")
db.movies.findOne({ rated: { $in: [ "PG", "PG-13" ] }})         //or operator

db.movies.find({ rated: "PG-13", directors: "J. A. Bayona", runtime: { $gt : 100 } })   //AND operator || $gt greater than

db.movies.find({ $or: [ {rated: "R"}, {runtime: { $lt : 10 }}, {genre: "Drama"} ] })   //OR operator || less than operator

db.products.find( { sku: { $regex: /^ABC/ } } )   //regex operator is like % sign in sql