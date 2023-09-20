//like aggregate functions in sql

db.orders.aggregate( [

    // Stage 1: Filter pizza order documents by pizza size
    {
       $match: { size: "medium" }
    },
 
    // Stage 2: Group remaining documents by pizza name and calculate total quantity
    {
       $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }  //$name--refers to name of document (column of the document)
    }
 
 ] )