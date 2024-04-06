import * as z from "zod"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)
export const userAuthLoginSchema = z.object({
  phone: z.string().min(9).regex(phoneRegex, 'Please enter a valid phone number'),
  password: z.string().min(1, {message: 'Password is required'})
})

export const userAuthSignupSchema = z.object({
  firstName: z.string()
    .refine(value => !/^\s/.test(value), {
      message: 'The first character must not be a space',
    })
    .refine(value => value.trim().length > 0, {
      message: 'First name is required',
    })
    .refine(value => value.trim().length >= 3, {
      message: 'First Name must be at least 3 characters',
    }),
  lastName: z.string()
    .refine(value => !/^\s/.test(value), {
      message: 'The first character must not be a space',
    })
    .refine(value => value.trim().length > 0, {
      message: 'Last name is required',
    })
    .refine(value => value.trim().length >= 3, {
      message: 'Last Name must be at least 3 characters',
    }),
  phone: z.string().min(9).regex(phoneRegex, 'Please enter a valid phone number'),
  password: z.string().min(1, {message: 'Password is required'})
    .min(6, {message: 'Password must be at least 6 character\'s'})
    .max(100, {message: 'Password must be at least 100 character\'s'}),
})

export const userAuthRestPasswordSchema = z.object({
  phone: z.string().min(9).regex(phoneRegex, 'Please enter a valid phone number'),
})