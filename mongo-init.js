db.createUser({
    user: "admin",
    pwd: "secret",
    roles: [
        {role: 'readWritte', db: "auth" }
    ]
})
