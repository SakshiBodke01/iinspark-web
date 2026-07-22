import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#002776] via-[#4169e1] to-[#5a7ce0] text-white shadow-lg hover:shadow-xl hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12",
        outline:
          "border-2 border-[#002776] bg-white text-[#002776] shadow-md hover:bg-gradient-to-r hover:from-[#002776] hover:to-[#4169e1] hover:text-white hover:border-transparent hover:shadow-lg hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#002776]/10 before:to-[#4169e1]/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        secondary:
          "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 shadow-md hover:shadow-lg hover:scale-[1.02] hover:from-slate-200 hover:to-slate-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12",
        ghost:
          "text-[#002776] hover:bg-gradient-to-r hover:from-[#002776]/10 hover:to-[#4169e1]/10 hover:text-[#002776] hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#002776]/5 before:to-[#4169e1]/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        link: "text-[#002776] underline-offset-4 hover:underline hover:text-[#4169e1] transition-colors duration-300",
        premium:
          "bg-gradient-to-r from-[#002776] via-[#4169e1] to-[#002776] text-white shadow-2xl hover:shadow-[0_20px_40px_rgba(0,39,118,0.4)] hover:scale-105 border border-white/20 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-800 before:skew-x-12 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500",
        elegant:
          "bg-white border-2 border-[#002776]/20 text-[#002776] shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-[#002776]/40 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#002776]/5 before:via-[#4169e1]/5 before:to-[#002776]/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-0 after:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.8)_50%,transparent_70%)] after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-600",
        professional:
          "bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:from-slate-700 hover:to-slate-800 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base",
        xl: "h-16 rounded-2xl px-12 text-lg",
        icon: "h-12 w-12",
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
