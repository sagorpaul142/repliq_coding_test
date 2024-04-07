import * as z from "zod"
export const userSchema = z.object({
  name: z
    .string({
      required_error: "Please type an name.",
    }).min(1),
  title: z
    .string({
      required_error: "Please select an audit type.",
    }).min(1),
  email: z
    .string({
      required_error: "Please select an audit type.",
    }).min(1),
  role: z
    .string({
      required_error: "Please select an audit type.",
    }).min(1),
})