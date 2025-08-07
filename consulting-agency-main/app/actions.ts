'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Ism kamida 2 ta belgidan iborat bo\'lishi kerak'),
  phone: z.string().min(9, 'Telefon raqami noto\'g\'ri'),
  email: z.string().email('Email manzili noto\'g\'ri'),
  message: z.string().min(10, 'Xabar kamida 10 ta belgidan iborat bo\'lishi kerak')
})

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse({
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message')
    })

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Here you would typically save to database
    console.log('Contact form submission:', validatedData)

    // You could also send email notification here
    // await sendEmailNotification(validatedData)

    return { success: true, message: 'Xabar muvaffaqiyatli yuborildi!' }
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: error.errors[0].message 
      }
    }
    
    return { 
      success: false, 
      error: 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.' 
    }
  }
}
