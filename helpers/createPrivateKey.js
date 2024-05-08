const crypto = require("crypto")
const secret = crypto.randomBytes(32).toString("hex")
console.log(secret) // 7efe3a4d343d91bf1125cf69ba58c97b8abc3f8281dbed450c3ae0b5d4ad03f72

