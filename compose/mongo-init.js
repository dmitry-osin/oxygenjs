db = db.getSiblingDB('admin')
db.auth('root', 'root')
db = db.getSiblingDB('oxygen')
db.createUser({
    'user': "root",
    'pwd': "root",
    'roles': [{
        'role': 'dbOwner',
        'db': 'oxygen'
    }]
})
db.createCollection('drop_me')