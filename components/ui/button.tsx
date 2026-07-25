import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a192f] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#0a192f] text-white hover:bg-[#112240] shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200",
        destructive:
          "bg-[#8c4a32] text-white hover:bg-[#703b28] shadow-[0_4px_20px_rgba(10,25,47,0.04)] hover:-translate-y-0.5 transition-all duration-200",
        outline:
          "border border-[#0a192f] bg-transparent text-[#0a192f] hover:bg-[#0a192f]/5 transition-colors duration-200",
        secondary:
          "bg-[#e2ece9] text-[#2d5a52] hover:bg-[#d0e0db] transition-colors duration-200",
        ghost:
          "text-[#0a192f] hover:bg-[#0a192f]/5 hover:text-[#0a192f] transition-colors duration-200",
        link: "text-[#0a192f] underline-offset-4 hover:underline hover:text-[#c5a059] transition-colors duration-200",
        premium:
          "bg-[#0a192f] text-white border border-[#c5a059]/40 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200",
        elegant:
          "bg-white border border-[#0a192f]/20 text-[#0a192f] hover:border-[#0a192f]/40 hover:bg-[#faf9f5] transition-all duration-200",
        professional:
          "bg-[#112240] text-white hover:bg-[#0a192f] transition-all duration-200",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-lg",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-lg px-7 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

