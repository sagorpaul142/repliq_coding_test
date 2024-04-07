import * as z from "zod"
export const productSchema = z.object({
  name: z
    .string({
      required_error: "Please type an name.",
    }).min(1),
  category: z
    .string({
      required_error: "Please select an audit type.",
    }).min(1),
  price: z
    .string({
      required_error: "Please select an audit type.",
    }).min(1),
  description: z
    .string({
      required_error: "Please select an audit type.",
    }).min(1),
  image: z
    .string({
      required_error: "Please select an audit type.",
    }).min(1),
})