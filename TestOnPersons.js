db.persons.aggregate([
    { $match: { eyeColor: {$ne: 'green'} } },
    { $count: 'name' }
])

db.persons.aggregate([
    { $match: { age: {$gte: 25, $lt: 30} } },
    { $count: 'name' }
])

db.persons.find({ name: { $gt: 'N' } }).sort({ age: 1 })

db.persons.find({ "company.location.country": "USA" })

db.persons.find({ 'tags.0': 'ad' })

db.persons.aggregate([
    { $match: {tags: { $all: ["id", "veniam"]}}},
    { $count: 'name' }
])

db.persons.aggregate([
    { $match: {tags: { $size: 4 }}},
    { $count: 'name' }
])

db.first.insertOne({
    "name": "Mike",
    "friends": [
        {
            "name": "Lora",
            "age": NumberInt(23),
            "registered": true
        },
        {
            "name": "Lora",
            "age": NumberInt(25),
            "registered": false
        },
        {
            "name": "Steve",
            "age": NumberInt(27),
            
        },
    ]
})


db.first.find({ "friends.name": "Lora" })
db.first.aggregate([
    { $match: { 'friends.name': 'Lora' }},
    { $count: 'name'}
])

db.first.find({ friends: {$elemMatch: { "name": "Lora", "age": 25 }} })

db.persons.find({ index: {$type: "int", $eq: 5 } })
db.persons.aggregate([
    { $match: { surname: {$exists: true} }},
    { $count: "name" }
])

db.persons.find({}, { name: 1, age: 1, eyeColor:1, "company.location":1 })