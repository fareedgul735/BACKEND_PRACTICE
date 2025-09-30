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

loop back ip ("127.0.0.1")

Joi Schema request level pe data validate karta hai (API security & correctness).
Mongoose Schema database level pe data validate karta hai (DB consistency & rules).

Joi Schema = Gatekeeper 🛑

Gate pe hi check karega: "Naam kam se kam 3 letters ka ho, email sahi format ka ho."

Agar galat hai → andar hi nahi aane dega.

Mongoose Schema = Principal’s Register 📖

Agar student gate se pass karke andar aa gaya, tab Principal register me uska record enter karne se pehle check karega ke rules follow ho rahe hain ya nahi (jaise age limit 5–18 years).

🔑 Nodemailer Authentication Flows me kaise help karta hai?

Signup / Email Verification

User signup karta hai → Database me record save hota hai.

Usko ek verification link ya OTP email se bhejna hota hai.

Ye kaam Nodemailer karta hai.

Login with OTP (2FA)

User login karta hai → Server ek random OTP generate karta hai (e.g. 6-digit).

OTP user ke email pe bhejna hota hai.

Nodemailer ke through user ke inbox me OTP chala jata hai.

Forgot Password Flow

User "Forgot Password" click karta hai.

Server ek unique reset link / OTP generate karta hai.

Ye email me send hota hai using Nodemailer.

User link pe click karke new password set kar leta hai.

Notifications

Jaise "Aapka password change ho gaya hai" → security purpose ke liye email bhejna.

Ye bhi Nodemailer se hota hai.

Stateful API: Server tumhari history/state yaad rakhta hai → zyada heavy hota hai aur scaling mushkil.

Stateless API: Server kuch yaad nahi rakhta → har request independent hoti hai → light aur scalable,
