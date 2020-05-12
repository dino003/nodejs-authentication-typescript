mongo -- "$MONGO_INITDB_DATABASE" <<EOF
db.createUser({
    user: "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [
        {role: 'readWritte', db: "$MONGO_INITDB_DATABASE" }
    ]
})
EOF