const uri = process.env.NODE_ENV === "production" 
  ? "https://gbemisola-backend.onrender.com" 
  : "http://localhost:7000";

export const API_URI = uri;
