import { http, HttpResponse as Response } from "msw";

export const handlers = [
  
    http.post( "/login", async () => {
        return Response.json({
            //  user: {
            //   username: "inked_coder",
            //     authenticated: true,
            //     role: "user",
            //      premiumUser: true
            //  }
        })
    }),
    http.post("/signup", async () => {
        return Response.json({})
    }),
]   


