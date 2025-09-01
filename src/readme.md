Middleware

➡️ Middleware ek beech ka function hai jo request aur response ke darmiyan chal kar extra kaam karta hai (jaise logging, authentication, error handling).

Body-parser

➡️ Body-parser ek middleware hai jo client se aane wale raw data (JSON, form-data) ko samajhne laayak JavaScript object mai convert kar deta hai.

Code Meaning Use Case
200 OK Request successful GET data, everything fine
201 Created Resource created successfully POST request (new user, new blog etc.)
204 No Content Request done, no data to return DELETE success without body
400 Bad Request Client ne galat request bheji Missing fields, wrong format
401 Unauthorized Auth required but not given Token/login missing
403 Forbidden Access denied (token hai but rights nahi) User not allowed
404 Not Found Resource nahi mila Wrong URL / ID not exist
409 Conflict Duplicate resource Email already exists
500 Internal Server Error Server mai issue Code error, crash
503 Service Unavailable Server down/overloaded Maintenance

200 OK → sab sahi hai

201 Created → naya bana diya

400 Bad Request → tumhari galti

401/403 → login ya permission ka masla

404 → cheez hi nahi mili

500 → hamari (server) taraf se error

MONGODB CRUD FUNCTIONS:

insertOne()

insertMany()

findOne()

find()

updateOne()

updateMany()

deleteOne()

deleteMany()

Joi ka main kaam hai data validation ko easy aur clean banana. Instead of har jagah if-else likhne ke, hum ek schema bana dete hain aur usse validate function ke sath check kar lete hain. Yeh backend APIs ko secure aur bug-free banata hai.

{ timestamps: true } ka matlab hai ke MongoDB automatically do fields add karega:

createdAt

updatedAt
