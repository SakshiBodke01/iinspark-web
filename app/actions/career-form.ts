"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const careerFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(1, "Phone number is required"),
    position: z.string().min(1, "Position is required"),
    resumeLink: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
    message: z
        .string()
        .optional()
        .transform((val) =>
            val === null || val === undefined || val === "" ? undefined : (val as string),
        ),
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
export async function submitCareerForm(prevState: FormState | null, formData: FormData): Promise<FormState> {
    try {
        // Extract form data
        const rawData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            position: formData.get("position"),
            resumeLink: formData.get("resumeLink"),
            message: formData.get("message"),
        }

        // Validate form data
        const validationResult = careerFormSchema.safeParse(rawData)

        if (!validationResult.success) {
            // Return validation errors
            return {
                success: false,
                message: "Please correct the errors in the form.",
                errors: validationResult.error.flatten().fieldErrors,
            }
        }

        const validData = validationResult.data
        const emailMessage = validData.message || "No cover letter provided"
        const resumeLinkDisplay = validData.resumeLink || "Not provided"

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
        const adminEmail = "connect@iinspark.com"
        // const adminEmail = "admin@iinspark.com" // Backup

        // Prepare email content
        const adminMailOptions = {
            from: `"IINSPARK Careers" <${senderEmail}>`,
            to: adminEmail,
            subject: `New Job Application: ${validData.position} - ${validData.firstName} ${validData.lastName}`,
            text: `
    New job application received:
    
    Position: ${validData.position}
    Name: ${validData.firstName} ${validData.lastName}
    Email: ${validData.email}
    Phone: ${validData.phone}
    Resume/Portfolio Link: ${resumeLinkDisplay}
    
    Cover Letter / Message:
    ${emailMessage}
  `,
            html: `
    <h2>New Job Application</h2>
    <p><strong>Position:</strong> ${validData.position}</p>
    <p><strong>Name:</strong> ${validData.firstName} ${validData.lastName}</p>
    <p><strong>Email:</strong> ${validData.email}</p>
    <p><strong>Phone:</strong> ${validData.phone}</p>
    <p><strong>Resume/Portfolio Link:</strong> ${validData.resumeLink
                    ? `<a href="${validData.resumeLink}" target="_blank">${validData.resumeLink}</a>`
                    : "Not provided"
                }</p>
    <p><strong>Cover Letter / Message:</strong></p>
    <p>${emailMessage.replace(/\n/g, "<br>")}</p>
  `,
        }

        const userMailOptions = {
            from: `"IINSPARK Careers" <${senderEmail}>`,
            to: validData.email,
            subject: `Application Received: ${validData.position} at IINSPARK`,
            text: `
    Dear ${validData.firstName},
    
    Thank you for applying for the position of ${validData.position} at IINSPARK. We have received your application and will review it shortly.
    
    If your profile matches our requirements, our team will get in touch with you.
    
    Best regards,
    The IINSPARK Team
  `,
            html: `
    <h2>Application Received</h2>
    <p>Dear ${validData.firstName},</p>
    <p>Thank you for applying for the position of <strong>${validData.position}</strong> at IINSPARK. We have received your application and will review it shortly.</p>
    <p>If your profile matches our requirements, our team will get in touch with you.</p>
    <p>Best regards,<br>The IINSPARK Team</p>
  `,
        }

        // In test mode, log emails instead of sending
        if (isTestMode) {
            console.log("TEST MODE: Bypassing email sending")
            console.log("Admin Email:", JSON.stringify(adminMailOptions, null, 2))
            return {
                success: true,
                message: "Application submitted successfully! (Test Mode)",
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
                message: "Thank you for your application. We'll be in touch soon!",
            }
        } catch (emailError) {
            console.error("Email sending error:", emailError)
            return {
                success: false,
                message: "There was an error sending your application. Please try again later.",
                error: String(emailError),
            }
        }
    } catch (error) {
        console.error("Career form submission error:", error)
        return {
            success: false,
            message: "There was an error processing your application. Please try again later.",
            error: String(error),
        }
    }
}
