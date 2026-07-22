"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const summerCampSchema = z.object({
  parentName: z.string().min(1, "Parent/Guardian name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid contact number").max(15, "Contact number is too long"),
  location: z.string().min(1, "Location of residence is required"),
  centre: z.string().min(1, "Please select a camp centre"),
  batch: z.string().min(1, "Please select a batch"),
  numberOfChildren: z.string().min(1, "Please select the number of children"),
  childrenDetails: z.array(z.object({
    name: z.string().min(1, "Child's name is required"),
    age: z.string().min(1, "Child's age is required"),
  })).min(1, "At least one child must be listed"),
})

export type FormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  error?: string
}

function getTransporterConfig() {
  return {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number.parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    connectionTimeout: 60000,
  }
}

const isTestMode = process.env.TEST_MODE === "true"

const centreNames: Record<string, string> = {
  "kalmadi-kothrud": "Kalmadi High School, Kothrud",
  "kalmadi-baner": "Kalmadi High School, Baner",
  "dpes-kharadi": "Dhole Patil Education Society (DPES), Kharadi",
  "jagadguru-lohegaon": "Jagadguru International School, Lohegaon",
  "pune-international": "Pune International School",
}

export async function submitSummerCampForm(prevState: FormState | null, formData: FormData): Promise<FormState> {
  try {
    const rawData = {
      parentName: formData.get("parentName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      centre: formData.get("centre"),
      batch: formData.get("batch"),
      numberOfChildren: formData.get("numberOfChildren"),
      childrenDetails: JSON.parse(formData.get("childrenDetails") as string || "[]"),
    }

    const validationResult = summerCampSchema.safeParse(rawData)

    if (!validationResult.success) {
      return {
        success: false,
        message: "Please correct the errors in the form.",
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validData = validationResult.data

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("Missing required environment variables for email sending")
      return {
        success: false,
        message: "Email configuration is incomplete. Please contact the administrator.",
      }
    }

    const senderEmail = "teamiinspark@gmail.com"
    const adminEmail = "admin@iinspark.com"

    const formattedChildren = validData.childrenDetails.map((child, index) => 
      `Child ${index + 1}: ${child.name} (Age: ${child.age})`
    ).join("\n    ")
    
    const htmlFormattedChildren = validData.childrenDetails.map((child, index) => 
      `<li><strong>Child ${index + 1}:</strong> ${child.name} (Age: ${child.age})</li>`
    ).join("")

    const emailSubject = `New Summer Camp Registration: ${validData.parentName}`
    const centreName = centreNames[validData.centre] || validData.centre

    const adminMailOptions = {
      from: `"IINSPARK Summer Camp" <${senderEmail}>`,
      to: adminEmail,
      subject: emailSubject,
      text: `
    New Summer Camp Registration:
    
    Parent/Guardian Name: ${validData.parentName}
    Email: ${validData.email}
    Contact Details: ${validData.phone}
    Location of Residence: ${validData.location}
    
    Preferred Centre: ${centreName}
    Preferred Batch: ${validData.batch}
    
    Number of Children: ${validData.numberOfChildren}
    
    Children Details:
    ${formattedChildren}
  `,
      html: `
    <h2>New Summer Camp Registration</h2>
    <p><strong>Parent/Guardian Name:</strong> ${validData.parentName}</p>
    <p><strong>Email:</strong> ${validData.email}</p>
    <p><strong>Contact Details:</strong> ${validData.phone}</p>
    <p><strong>Location of Residence:</strong> ${validData.location}</p>
    
    <h3>Camp Details:</h3>
    <p><strong>Centre:</strong> ${centreName}</p>
    <p><strong>Batch:</strong> ${validData.batch}</p>
    
    <p><strong>Number of Children:</strong> ${validData.numberOfChildren}</p>
    <h3>Children Details:</h3>
    <ul>
      ${htmlFormattedChildren}
    </ul>
  `,
    }

    const userMailOptions = {
      from: `"IINSPARK" <${senderEmail}>`,
      to: validData.email,
      subject: `Registration Successful: IINSPARK Summer Camp`,
      text: `
    Dear ${validData.parentName},
    
    Thank you for registering for the IINSPARK Summer Camp! We are excited to welcome your child(ren) to an incredible learning adventure.
    
    We have received your registration details. Our team will contact you shortly with the next steps and camp schedules.
    
    If you have any questions in the meantime, feel free to reply to this email or call us at our support number.
    
    Best regards,
    The IINSPARK Team
  `,
      html: `
    <h2>Welcome to IINSPARK Summer Camp!</h2>
    <p>Dear ${validData.parentName},</p>
    <p>Thank you for registering for the IINSPARK Summer Camp! We are excited to welcome your child(ren) to an incredible learning adventure.</p>
    <p>We have received your registration details. Our team will contact you shortly with the next steps and camp schedules.</p>
    <p>If you have any questions in the meantime, feel free to reply to this email or call us at our support number.</p>
    <br>
    <p>Best regards,<br><strong>The IINSPARK Team</strong></p>
  `,
    }

    if (isTestMode) {
      console.log("TEST MODE: Bypassing email sending")
      return {
        success: true,
        message: "Registration completed successfully! (Test Mode)",
      }
    }

    try {
      const transporter = nodemailer.createTransport(getTransporterConfig())
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(userMailOptions)

      return {
        success: true,
        message: "Registration successful! Check your email for confirmation.",
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return {
        success: false,
        message: "Registration submitted, but there was an error sending the confirmation email.",
        error: String(emailError),
      }
    }
  } catch (error) {
    console.error("Summer Camp form submission error:", error)
    return {
      success: false,
      message: "There was an error processing your registration. Please try again later.",
      error: String(error),
    }
  }
}
