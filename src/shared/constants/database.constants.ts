export const MONGODB_HOST = String(process.env.MONGODB_HOST);
export const MONGODB_USER = String(process.env.MONGODB_USER);
export const MONGODB_PASS = String(process.env.MONGODB_PASS);
export const MONGODB_DATABASE = String(process.env.MONGODB_DATABASE);
export const DEFAULT_MONGO_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:27017/admin`;
