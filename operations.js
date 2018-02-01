exports.insertDocuments = (coll, document) => {
    return coll.insert(document);
};

exports.findDocuments = (coll) => {
    return coll.find({}).toArray();
};

exports.deleteDocument = (coll, document) => {
    return coll.deleteOne(document);
};

exports.updateDocument = (coll, document, update) => {
    return coll.updateOne(document, {$set: update}, null);
};