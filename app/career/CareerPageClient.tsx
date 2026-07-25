"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Briefcase,
    MapPin,
    IndianRupee,
    Code,
    CheckCircle,
    AlertCircle,
    Loader2,
    Send,
    ArrowRight,
    Users,
    Lightbulb,
    Heart,
    GraduationCap,
    Rocket
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitCareerForm } from "@/app/actions/career-form"
import { useActionState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Job Data
const jobs = [
    {
        id: "pre-sales-lead",
        title: "Pre-Sales Lead",
        type: "Full-Time",
        location: "Pune",
        salary: "2.5 LPA – 4.0 LPA (Negotiable)",
        description: "We are seeking a dynamic, confident, and empathetic woman professional who has taken a career break and is looking to re-enter the workforce.",
        responsibilities: [
            "Act as the first point of contact for schools, educators, and parents.",
            "Build rapport and explain offerings through demos and presentations.",
            "Represent IINSPARK at local events and exhibitions.",
        ],
        requirements: [
            "Female candidate with 2–5 years of experience in education, sales, or customer service.",
            "Excellent English and regional language communication skills.",
        ],
        icon: Users
    },
    {
        id: "part-time-tutor",
        title: "Part-Time Tutor",
        type: "Part-Time",
        headline: "Your Talent Deserves More – Earn Like a Full Timer.",
        location: "Pune",
        hours: "Evening: 4 PM – 7 PM",
        description: "Join us as a tutor and help shape the future of education.",
        whoCanApply: [
            "Teachers in Pre-Schools and Schools.",
            "Women/Girls with experience in activities for kids.",
            "Graduate and Post-Graduate students looking for part-time opportunities.",
        ],
        icon: GraduationCap
    },
    {
        id: "activity-centre-coordinator",
        title: "Activity Centre Coordinator",
        type: "Part-Time Internship",
        location: "Pune",
        description: "We are looking for individuals with the necessary skills to join our growing team.",
        whoCanApply: [
            "Graduate or Post-Graduate students.",
            "Teachers.",
            "Anyone who can conduct activities like brain games, personality development sessions, and art & craft sessions.",
        ],
        icon: Rocket
    },
    {
        id: "internship-opportunity",
        title: "Internship Opportunity",
        type: "Paid Internship",
        location: "Pune",
        description: "We are interested in hiring interns who are keen on skill development and practical exposure in the following areas.",
        responsibilities: [
            "React Native (App development)",
            "React.js (Website Development)",
            "Game Development",
            "Related development technologies",
        ],
        icon: Code
    },
]

export default function CareerPageClient() {
    const [state, formAction, isPending] = useActionState(submitCareerForm, null)
    const [showSuccess, setShowSuccess] = useState(false)
    const [selectedJob, setSelectedJob] = useState<string>("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [jobFilter, setJobFilter] = useState<string>("All")
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (state?.success) {
            setShowSuccess(true)
            if (formRef.current) {
                formRef.current.reset()
            }
            const timer = setTimeout(() => {
                setShowSuccess(false)
                setIsDialogOpen(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [state?.success])

    const openApplicationForm = (jobTitle: string) => {
        setSelectedJob(jobTitle)
        setIsDialogOpen(true)
    }

    const filteredJobs = jobFilter === "All"
        ? jobs
        : jobs.filter(j => j.type.toLowerCase().includes(jobFilter.toLowerCase()))

    return (
        <div className="overflow-x-hidden w-full bg-white text-slate-900">
            
            {/* 1. Hero Section */}
            <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                        We Are Hiring
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#061224] mb-6 tracking-tight">
                        Join Our Mission
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
                        Be part of a pioneering education transformation movement redefining how children learn, create, and innovate across India.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => {
                                document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#061224] hover:bg-slate-900 rounded-full transition-colors cursor-pointer"
                        >
                            <span>View Openings</span>
                            <ArrowRight className="w-4 h-4 text-[#F2A900]" />
                        </button>
                        <button
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors cursor-pointer"
                        >
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Redefining Education Split Section */}
            <section id="about" className="py-20 md:py-24 border-b border-slate-200">
                <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                                    Who We Are
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#061224] tracking-tight">
                                    Redefining Education with IINSPARK
                                </h2>
                            </div>

                            <p className="text-base text-slate-600 font-normal leading-relaxed">
                                IINSPARK is a pioneering education transformation movement. We design and deliver hands-on learning kits, flashcards, educational games, science & robotics labs, and innovative app-based learning programs.
                            </p>

                            <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-xl border border-slate-200">
                                <div className="p-2.5 bg-white border border-slate-200 text-[#061224] rounded-lg shrink-0">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#061224] mb-1 text-sm">Our Philosophy</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed font-normal">We blend Indian Knowledge Systems (IKS) with 21st-century skills to ensure holistic development in every child.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-xl border border-slate-200">
                                <div className="p-2.5 bg-white border border-slate-200 text-[#061224] rounded-lg shrink-0">
                                    <Rocket className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#061224] mb-1 text-sm">Our Impact</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed font-normal">Our flagship initiative, "Lab of Curiosity", is creating meaningful change in schools, pre-schools, and learning spaces.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div>
                            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100">
                                <img
                                    src="/images/nation-building-v2.png"
                                    alt="Nation Building Through Education"
                                    className="w-full aspect-[4/3] object-cover"
                                    onError={(e) => { e.currentTarget.src = "/images/default_product.png"; }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Why Join IINSPARK? Section */}
            <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                    
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                            Life at IINSPARK
                        </span>
                        <h2 className="text-3xl font-bold font-heading text-[#061224]">
                            Why Join IINSPARK?
                        </h2>
                        <p className="text-slate-600 text-sm mt-2">
                            We offer more than just a job; we offer a supportive culture, professional growth, and a meaningful purpose.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Heart,
                                title: "Culture",
                                desc: "We offer a warm, supportive work culture with flexible options that respect your personal journey.",
                            },
                            {
                                icon: Users,
                                title: "Support",
                                desc: "We provide mentorship, continuous training, and resources to ease your transition and accelerate your career.",
                            },
                            {
                                icon: Lightbulb,
                                title: "Purpose",
                                desc: "This is a unique opportunity to contribute directly to nation-building through practical, high-impact education.",
                            }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl bg-white border border-slate-200 p-6 text-center"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-[#061224] flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold font-heading text-[#061224] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-xs leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 4. Current Openings Job Listings */}
            <section id="openings" className="py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-8 max-w-5xl">
                    
                    <div className="text-center max-w-xl mx-auto mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                            Career Opportunities
                        </span>
                        <h2 className="text-3xl font-bold font-heading text-[#061224]">
                            Current Openings
                        </h2>
                        
                        {/* Filter Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                            {["All", "Full-Time", "Part-Time", "Internship"].map((filterName) => (
                                <button
                                    key={filterName}
                                    onClick={() => setJobFilter(filterName)}
                                    className={cn(
                                        "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors border cursor-pointer",
                                        jobFilter === filterName
                                            ? "bg-[#061224] text-white border-[#061224]"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                                    )}
                                >
                                    {filterName === "All" ? "All Openings" : filterName}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Job Cards */}
                    <div className="space-y-6">
                        {filteredJobs.map((job) => {
                            const JobIcon = job.icon || Briefcase;
                            return (
                                <div
                                    key={job.id}
                                    className="rounded-xl bg-white border border-slate-200 border-l-4 border-l-[#061224] p-6"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-[#061224] flex items-center justify-center shrink-0">
                                                <JobIcon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold font-heading text-[#061224] mb-1">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2 text-xs font-medium">
                                                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                                                        {job.type}
                                                    </span>
                                                    {job.location && (
                                                        <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 flex items-center gap-1">
                                                            <MapPin className="w-3 h-3" /> {job.location.split('-')[0]}
                                                        </span>
                                                    )}
                                                    {job.salary && (
                                                        <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 flex items-center gap-1">
                                                            <IndianRupee className="w-3 h-3" /> {job.salary}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => openApplicationForm(job.title)}
                                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#061224] hover:bg-slate-900 rounded-full transition-colors shrink-0 cursor-pointer"
                                        >
                                            <span>Apply Now</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-[#F2A900]" />
                                        </button>
                                    </div>

                                    <div className="space-y-4 pt-4 text-sm text-slate-600">
                                        {job.headline && (
                                            <p className="font-bold text-[#061224]">
                                                {job.headline}
                                            </p>
                                        )}
                                        <p>{job.description}</p>

                                        <div className="grid md:grid-cols-2 gap-4 pt-2">
                                            {job.responsibilities && (
                                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                    <h4 className="font-bold text-[#061224] mb-2 text-xs uppercase tracking-wider">Key Responsibilities</h4>
                                                    <ul className="space-y-1.5 text-xs text-slate-600">
                                                        {job.responsibilities.map((res, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#061224] shrink-0" />
                                                                {res}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {job.requirements && (
                                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                    <h4 className="font-bold text-[#061224] mb-2 text-xs uppercase tracking-wider">Requirements</h4>
                                                    <ul className="space-y-1.5 text-xs text-slate-600">
                                                        {job.requirements.map((req, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#061224] shrink-0" />
                                                                {req}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {job.whoCanApply && (
                                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                    <h4 className="font-bold text-[#061224] mb-2 text-xs uppercase tracking-wider">Who Can Apply</h4>
                                                    <ul className="space-y-1.5 text-xs text-slate-600">
                                                        {job.whoCanApply.map((who, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#061224] shrink-0" />
                                                                {who}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Application Modal */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto border border-slate-200">
                    <DialogHeader className="pb-4 border-b border-slate-100">
                        <DialogTitle className="text-xl font-bold font-heading text-[#061224]">Apply for {selectedJob}</DialogTitle>
                        <DialogDescription className="text-xs text-slate-500">
                            Fill out the form below to apply. We'll get back to you shortly.
                        </DialogDescription>
                    </DialogHeader>

                    {showSuccess && (
                        <Alert className="mb-4 border-emerald-200 bg-emerald-50">
                            <CheckCircle className="h-4 w-4 text-[#10B981]" />
                            <AlertDescription className="text-emerald-800 text-xs font-medium">
                                {state?.message || "Application submitted successfully!"}
                            </AlertDescription>
                        </Alert>
                    )}

                    {state && !state.success && (
                        <Alert className="mb-4 border-rose-200 bg-rose-50">
                            <AlertCircle className="h-4 w-4 text-rose-600" />
                            <AlertDescription className="text-rose-800 text-xs font-medium">
                                {state.message}
                            </AlertDescription>
                        </Alert>
                    )}

                    <form ref={formRef} action={formAction} className="space-y-4 py-3 text-sm">
                        <input type="hidden" name="position" value={selectedJob} />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="firstName" className="font-semibold text-xs text-slate-700">First Name *</Label>
                                <Input id="firstName" name="firstName" required placeholder="Jane" className="h-10 border-slate-200 focus:border-[#061224]" />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="lastName" className="font-semibold text-xs text-slate-700">Last Name *</Label>
                                <Input id="lastName" name="lastName" required placeholder="Doe" className="h-10 border-slate-200 focus:border-[#061224]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="font-semibold text-xs text-slate-700">Email *</Label>
                                <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="h-10 border-slate-200 focus:border-[#061224]" />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="phone" className="font-semibold text-xs text-slate-700">Phone *</Label>
                                <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className="h-10 border-slate-200 focus:border-[#061224]" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="resumeLink" className="font-semibold text-xs text-slate-700">Resume / Portfolio Link (Optional)</Label>
                            <Input id="resumeLink" name="resumeLink" type="url" placeholder="https://linkedin.com/in/jane-doe" className="h-10 border-slate-200 focus:border-[#061224]" />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="message" className="font-semibold text-xs text-slate-700">Cover Letter / Message</Label>
                            <Textarea id="message" name="message" placeholder="Tell us why you're a good fit..." rows={4} className="resize-none border-slate-200 focus:border-[#061224]" />
                        </div>

                        <Button type="submit" disabled={isPending} className="w-full h-11 text-sm bg-[#061224] hover:bg-slate-900 transition-colors">
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting Application...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4 text-[#F2A900]" />
                                    Submit Application
                                </>
                            )}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

        </div>
    )
}
