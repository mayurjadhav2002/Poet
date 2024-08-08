// pages/api/authenticate.js
import { z } from "zod";
import { signIn } from "@/utils/SignIn"; // Your signIn function

const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = req.body;
      userSchema.parse(formData);

      // Perform authentication
      const result = await signIn("credentials", formData);
      
      // Send a success response with a token or session info
      res.status(200).json({ message: "Success", token: result.token });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
