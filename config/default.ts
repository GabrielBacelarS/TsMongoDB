import 'dotenv/config'
export default {
    port: process.env.DB_PORT,
    dbUri: process.env.DB_URI
}