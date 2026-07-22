"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  userType: z.enum(["student", "parent", "teacher", "school", "other"], {
    message: "Please select a valid user type"
  }),
  subject: z
    .string()
    .optional()
    .transform((val) =>
      val === null || val === undefined || val === "" ? undefined : (val as string),
    ),
  message: z
    .string()
    .optional()
    .transform((val) =>
      val === null || val === undefined || val === "" ? undefined : (val as string),
    ),
  newsletter: z.boolean().optional(),
})

// Initial state type
export type FormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  error?: string
}

// Configure email transport
function getTransporterConfig() {
  return {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number.parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    connectionTimeout: 60000, // 60 seconds
  }
}

// Test mode for development
const isTestMode = process.env.TEST_MODE === "true"

// Server action to handle form submission
export async function submitContactForm(prevState: FormState | null, formData: FormData): Promise<FormState> {
  try {
    // Extract form data
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      userType: formData.get("userType"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      newsletter: formData.get("newsletter") === "on",
    }

    // Validate form data
    const validationResult = contactFormSchema.safeParse(rawData)

    if (!validationResult.success) {
      // Return validation errors
      return {
        success: false,
        message: "Please correct the errors in the form.",
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validData = validationResult.data

    const emailSubject = validData.subject || "No subject provided"
    const emailMessage = validData.message || "No message provided"

    // Check if required environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("Missing required environment variables for email sending")
      return {
        success: false,
        message: "Email configuration is incomplete. Please contact the administrator.",
      }
    }

    // Use a fixed sender email and deliver all enquiries to the admin inbox
    const senderEmail = "teamiinspark@gmail.com"
    const adminEmail = "admin@iinspark.com"

    // Prepare email content
    const adminMailOptions = {
      from: `"IINSPARK Website" <${senderEmail}>`,
      to: adminEmail,
      subject: `New Contact Form: ${emailSubject}`,
      text: `
    New contact form submission:
    
    Name: ${validData.firstName} ${validData.lastName}
    Email: ${validData.email}
    Phone: ${validData.phone || "Not provided"}
    User Type: ${validData.userType}
    Subject: ${emailSubject}
    
    Message:
    ${emailMessage}
    
    Newsletter: ${validData.newsletter ? "Yes" : "No"}
  `,
      html: `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${validData.firstName} ${validData.lastName}</p>
    <p><strong>Email:</strong> ${validData.email}</p>
    <p><strong>Phone:</strong> ${validData.phone || "Not provided"}</p>
    <p><strong>User Type:</strong> ${validData.userType}</p>
    <p><strong>Subject:</strong> ${emailSubject}</p>
    <p><strong>Message:</strong></p>
    <p>${emailMessage.replace(/\n/g, "<br>")}</p>
    <p><strong>Newsletter:</strong> ${validData.newsletter ? "Yes" : "No"}</p>
  `,
    }

    const userMailOptions = {
      from: `"IINSPARK" <${senderEmail}>`,
      to: validData.email,
      subject: `Thank you for contacting IINSPARK`,
      text: `
    Dear ${validData.firstName},
    
    Thank you for contacting IINSPARK. We have received your message and will get back to you as soon as possible.
    
    Here's a copy of your message:
    
    Subject: ${emailSubject}
    Message: ${emailMessage}
    
    Best regards,
    The IINSPARK Team
  `,
      html: `
    <h2>Thank you for contacting IINSPARK</h2>
    <p>Dear ${validData.firstName},</p>
    <p>Thank you for contacting IINSPARK. We have received your message and will get back to you as soon as possible.</p>
    <p>Here's a copy of your message:</p>
    <p><strong>Subject:</strong> ${emailSubject}</p>
    <p><strong>Message:</strong></p>
    <p>${emailMessage.replace(/\n/g, "<br>")}</p>
    <p>Best regards,<br>The IINSPARK Team</p>
  `,
    }

    // In test mode, log emails instead of sending
    if (isTestMode) {
      console.log("TEST MODE: Bypassing email sending")
      return {
        success: true,
        message: "Form submitted successfully! In test mode, emails are logged instead of sent.",
      }
    }

    // Send emails
    try {
      const transporter = nodemailer.createTransport(getTransporterConfig())

      // Send admin email
      try {
        await transporter.sendMail(adminMailOptions)
      } catch (emailError) {
        console.error("Admin email sending error:", emailError)
        throw emailError
      }

      // Send confirmation to user
      await transporter.sendMail(userMailOptions)

      return {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return {
        success: false,
        message: "There was an error sending your message. Please try again later.",
        error: String(emailError),
      }
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "There was an error processing your form. Please try again later.",
      error: String(error),
    }
  }
}
