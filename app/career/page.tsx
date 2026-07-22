import CareerPageClient from "./CareerPageClient"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export const metadata = {
    title: "Careers at IINSPARK - Join Our Mission",
    description:
        "Join IINSPARK and contribute to nation-building through education. Explore current openings for Pre-Sales Lead, Tutors, and Coordinators.",
    keywords: ["IINSPARK", "careers", "jobs", "education", "hiring", "pune"],
    alternates: {
        canonical: "https://www.iinspark.com/career",
    },
}

export default function CareerPage() {
    return (
        <>
            <ScrollToTopButton />
            <CareerPageClient />
        </>
    )
}
