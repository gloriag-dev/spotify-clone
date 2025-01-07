import { http, HttpResponse as Response } from "msw";

export const handlers = [
  
    http.post( "/login", async () => {
        return Response.json({})
    }),
    http.post("/signup", async () => {
        return Response.json({})
    }),
]   