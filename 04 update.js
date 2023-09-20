db.movies.find({ title: "Tag" })
db.movies.updateOne({ title: "Tag" }, { $set: { year: 2019 }, $currentDate: { lastUpdated: true }} )     //Finds First ({ title: "Tag" }) and udates ({ year: 2019 })
// $currentDate: { lastUpdated: true } -- to get to know about changes done

db.movies.find({ runtime: { $lt: 125 } })
db.movies.updateMany(
    { runtime: { $lt : 125 } },                                    //update every doc where runtime is lessthan 125
    { $set: {rated: "H"}, $currentDate: {lastUpdated: true} }
)

db.accounts.replaceOne(
    { account_id: 371138 },
    { account_id: 893421, limit: 5000, products: [ "Investment", "Brokerage" ] }
  )