"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
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
    Sparkles,
    GraduationCap,
    Rocket
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitCareerForm } from "@/app/actions/career-form"
import { useActionState } from "react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

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
    const formRef = useRef<HTMLFormElement>(null)

    // Force scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Handle success state
    useEffect(() => {
        if (state?.success) {
            setShowSuccess(true)
            if (formRef.current) {
                formRef.current.reset()
            }
            const timer = setTimeout(() => {
                setShowSuccess(false)
                setIsDialogOpen(false) // Close dialog on success
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [state?.success])

    // Animation on scroll functionality
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in")
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        )

        const hiddenElements = document.querySelectorAll(".animate-hidden")
        hiddenElements.forEach((el) => observer.observe(el))

        // Animate on load elements
        const animateElements = document.querySelectorAll(".animate-on-load")
        animateElements.forEach((el, index) => {
            setTimeout(
                () => {
                    el.classList.add("animate-in")
                },
                100 + index * 100,
            )
        })

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el))
        }
    }, [])

    const openApplicationForm = (jobTitle: string) => {
        setSelectedJob(jobTitle)
        setIsDialogOpen(true)
    }

    return (
        <>
            <div className="overflow-x-hidden w-full bg-slate-50 dot-grid">
                {/* Professional Hero Section */}
                <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-[#ffffff] to-orange-50">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 40px 40px, #061224 1px, transparent 0)`,
                                backgroundSize: "80px 80px",
                            }}
                        ></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#061224]/5 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F2A900]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

                    <div className="container relative px-4 md:px-6 z-20 py-12 sm:py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block animate-on-load opacity-0 translate-y-8">
                                We are hiring!
                            </span>

                            <h1
                                className="text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight text-[#061224] leading-[1.05] animate-on-load opacity-0 translate-y-8 mb-8"
                                style={{ animationDelay: "0.2s" }}
                            >
                                Join Our{" "}
                                <span className="bg-gradient-to-r from-[#061224] via-[#F2A900] to-[#061224] bg-clip-text text-transparent bg-300% animate-gradient">
                                    Mission
                                </span>
                            </h1>

                            <p
                                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light animate-on-load opacity-0 translate-y-8 mb-10"
                                style={{ animationDelay: "0.4s" }}
                            >
                                Be part of a pioneering education transformation movement redefining how children learn in India.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-load opacity-0 translate-y-8"
                                style={{ animationDelay: "0.6s" }}
                            >
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 h-12 text-lg bg-[#061224] hover:bg-[#030811] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                                    onClick={() => {
                                        document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                    <span className="relative z-10">View Openings</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 h-12 text-lg border-[#061224] text-[#061224] hover:bg-amber-50"
                                    onClick={() => {
                                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About / Mission Section */}
                <section id="about" className="py-24 relative overflow-hidden bg-white">
                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="animate-hidden space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#061224]/10 px-4 py-1.5 text-sm font-medium text-[#061224] mb-4">
                                        <Lightbulb className="h-4 w-4" />
                                        Who We Are
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#061224] leading-tight">
                                        Redefining Education with <span className="text-[#F2A900]">IINSPARK</span>
                                    </h2>
                                </div>

                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        IINSPARK is a pioneering education transformation movement. We design and deliver hands-on learning kits, flashcards, educational games, science & robotics labs, and innovative app-based learning programs.
                                    </p>

                                    <div className="flex gap-4 items-start p-4 bg-amber-50/50 rounded-xl border border-amber-100">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-[#061224]">
                                            <GraduationCap className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold font-heading text-[#061224] mb-1">Our Philosophy</h4>
                                            <p className="text-sm">We blend Indian Knowledge Systems (IKS) with 21st-century skills to ensure holistic development in every child.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start p-4 bg-amber-50/50 rounded-xl border border-amber-100">
                                        <div className="p-2 bg-white rounded-lg shadow-sm text-[#061224]">
                                            <Rocket className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold font-heading text-[#061224] mb-1">Our Impact</h4>
                                            <p className="text-sm">Our flagship initiative, "Lab of Curiosity", is creating meaningful change in schools, pre-schools, and learning spaces.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="animate-hidden animation-delay-200 lg:pl-10">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#061224] to-[#F2A900] rounded-2xl opacity-20 blur-xl"></div>
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 aspect-[4/3] group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                            <img
                                                src="/images/nation-building-v2.png"
                                                alt="Nation Building Through Education"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Stats Card */}
                                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-float" style={{ animationDelay: "1s" }}>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                                <CheckCircle className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Impact Created</p>
                                                <p className="text-xl font-bold font-heading text-[#061224]">1000+ Students</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Join Us Section */}
                <section className="py-24 bg-slate-50 dot-grid relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#061224]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F2A900]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="container px-4 md:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto mb-20"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#061224] mb-6">Why Join IINSPARK?</h2>
                            <p className="text-xl text-gray-600">We offer more than just a job; we offer a purpose.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Heart,
                                    title: "Culture",
                                    desc: "We offer a warm, supportive work culture with flexible work options.",
                                    color: "text-pink-600",
                                    bg: "bg-pink-50"
                                },
                                {
                                    icon: Users,
                                    title: "Support",
                                    desc: "We provide training and mentoring to ease your transition back into the workforce.",
                                    color: "text-amber-600",
                                    bg: "bg-amber-50"
                                },
                                {
                                    icon: Lightbulb,
                                    title: "Purpose",
                                    desc: "This is an opportunity to contribute to nation-building through education.",
                                    color: "text-amber-600",
                                    bg: "bg-amber-50"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 transition-shadow duration-500 cursor-default"
                                >
                                    <div className="p-10 text-center">
                                        <div className={`w-20 h-20 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-8 ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                            <item.icon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold font-heading text-[#061224] mb-4 group-hover:text-[#F2A900] transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Current Openings Section */}
                <section id="openings" className="py-24 relative overflow-hidden bg-white">
                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20 animate-hidden">
                            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
                                We're Hiring
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#061224] mb-6">Current Openings</h2>
                            <p className="text-xl text-gray-600">Explore opportunities to grow with us.</p>
                        </div>

                        <div className="grid gap-8 max-w-5xl mx-auto">
                            {jobs.map((job, idx) => (
                                <Card
                                    key={job.id}
                                    className="border border-gray-100 shadow-md hover:shadow-[0_8px_40px_rgba(242,169,0,0.18)] hover:border-brand-blue/30 hover:-translate-y-1 rounded-2xl transition-all duration-300 animate-hidden group overflow-hidden"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#061224] to-[#F2A900] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <CardHeader className="pb-4">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                            <div className="flex gap-4">
                                                <div className="hidden sm:flex h-14 w-14 rounded-xl bg-amber-50 items-center justify-center text-[#061224] group-hover:scale-110 transition-transform duration-300">
                                                    {job.icon ? <job.icon className="h-7 w-7" /> : <Briefcase className="h-7 w-7" />}
                                                </div>
                                                <div>
                                                    <CardTitle className="text-2xl font-bold font-heading text-[#061224] mb-3 group-hover:text-[#F2A900] transition-colors">{job.title}</CardTitle>
                                                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                                        <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-100 px-3 py-1">{job.type}</Badge>
                                                        {job.location && (
                                                            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full"><MapPin className="w-3.5 h-3.5" /> {job.location.split('-')[0]}</span>
                                                        )}
                                                        {job.salary && (
                                                            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full"><IndianRupee className="w-3.5 h-3.5" /> {job.salary}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <Button onClick={() => openApplicationForm(job.title)} className="bg-[#061224] hover:bg-[#030811] shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 relative overflow-hidden group">
                                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                                <span className="relative z-10 flex items-center">Apply Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-6 pt-2 pl-4 sm:pl-[5.5rem]">
                                        {job.headline && <p className="font-semibold text-[#F2A900] text-lg">{job.headline}</p>}
                                        <p className="text-gray-600 text-lg leading-relaxed">{job.description}</p>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {job.responsibilities && (
                                                <div className="bg-gray-50 p-5 rounded-xl">
                                                    <h4 className="font-bold font-heading text-[#061224] mb-3 flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4" /> Key Responsibilities
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {job.responsibilities.map((res, i) => (
                                                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F2A900] shrink-0"></span>
                                                                {res}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {job.requirements && (
                                                <div className="bg-gray-50 p-5 rounded-xl">
                                                    <h4 className="font-bold font-heading text-[#061224] mb-3 flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4" /> Requirements
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {job.requirements.map((req, i) => (
                                                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F2A900] shrink-0"></span>
                                                                {req}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {job.whoCanApply && (
                                                <div className="bg-gray-50 p-5 rounded-xl">
                                                    <h4 className="font-bold font-heading text-[#061224] mb-3 flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4" /> Who Can Apply
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {job.whoCanApply.map((who, i) => (
                                                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F2A900] shrink-0"></span>
                                                                {who}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Modal */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto border-none shadow-2xl">
                        <DialogHeader className="pb-4 border-b">
                            <DialogTitle className="text-2xl font-bold font-heading text-[#061224]">Apply for {selectedJob}</DialogTitle>
                            <DialogDescription className="text-base">
                                Fill out the form below to apply. We'll get back to you shortly.
                            </DialogDescription>
                        </DialogHeader>

                        {/* Success Alert */}
                        {showSuccess && (
                            <Alert className="mb-4 border-green-200 bg-green-50 animate-in fade-in zoom-in duration-300">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <AlertDescription className="text-green-800 font-medium">
                                    {state?.message || "Application submitted successfully!"}
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Error Alert */}
                        {state && !state.success && (
                            <Alert className="mb-4 border-red-200 bg-red-50 animate-in fade-in zoom-in duration-300">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertDescription className="text-red-800">
                                    {state.message}
                                    {state.error && (
                                        <span className="block mt-2 text-xs whitespace-pre-wrap">
                                            {state.error}
                                        </span>
                                    )}
                                    {state.errors && (
                                        <ul className="mt-2 list-disc list-inside space-y-1">
                                            {Object.entries(state.errors).map(([field, errors]) =>
                                                errors.map((err, idx) => (
                                                    <li key={field + idx}>{field}: {err}</li>
                                                ))
                                            )}
                                        </ul>
                                    )}
                                </AlertDescription>
                            </Alert>
                        )}

                        <form ref={formRef} action={formAction} className="space-y-5 py-4">
                            <input type="hidden" name="position" value={selectedJob} />

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="font-semibold text-gray-700">First Name <span className="text-red-500">*</span></Label>
                                    <Input id="firstName" name="firstName" required placeholder="Jane" className="h-11 focus-visible:ring-[#061224]" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></Label>
                                    <Input id="lastName" name="lastName" required placeholder="Doe" className="h-11 focus-visible:ring-[#061224]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-semibold text-gray-700">Email <span className="text-red-500">*</span></Label>
                                    <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="h-11 focus-visible:ring-[#061224]" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="font-semibold text-gray-700">Phone <span className="text-red-500">*</span></Label>
                                    <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className="h-11 focus-visible:ring-[#061224]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="resumeLink" className="font-semibold text-gray-700">Resume / Portfolio Link <span className="text-gray-400 font-normal">(Optional)</span></Label>
                                <Input id="resumeLink" name="resumeLink" type="url" placeholder="https://linkedin.com/in/jane-doe or Google Drive Link" className="h-11 focus-visible:ring-[#061224]" />
                                <p className="text-xs text-gray-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Please provide a link to your LinkedIn profile or a hosted resume.</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="font-semibold text-gray-700">Cover Letter / Message</Label>
                                <Textarea id="message" name="message" placeholder="Tell us why you're a good fit..." rows={4} className="resize-none focus-visible:ring-[#061224]" />
                            </div>

                            <Button type="submit" disabled={isPending} className="w-full h-12 text-base bg-[#061224] hover:bg-[#030811] shadow-lg transition-all duration-300">
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Submitting Application...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-5 w-5" />
                                        Submit Application
                                    </>
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>

            </div>

            {/* Enhanced Custom Styles */}
            <style jsx global>{`
        /* Animation Keyframes */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Animation Classes */
        .animate-on-load,
        .animate-hidden {
          opacity: 0;
          animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 300%;
          animation: gradient 8s ease infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .bg-300% {
          background-size: 300% auto;
        }
      `}</style>
        </>
    )
}

