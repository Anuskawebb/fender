// import * as React from "react"

// import { cn } from "@/lib/utils"


// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
//   shadow?: "sm" | "md";
// }

// const Card = React.forwardRef<HTMLDivElement, CardProps>(
//   ({ className, shadow, ...props }, ref) => (
//     <div
//       ref={ref}
//       className={cn(
//         "rounded-lg border bg-card text-card-foreground",
//         shadow ? `shadow-${shadow}` : "",
//         className
//       )}
//       {...props}
//     />
//   )
// );
// Card.displayName = "Card";

// const CardHeader = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex flex-col space-y-1.5 p-4", className)}
//     {...props}
//   />
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, ...props }, ref) => (
//   <h3 ref={ref} className={cn("body-sm-semibold", className)} {...props} />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ));
// CardDescription.displayName = "CardDescription";

// interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
//   fullPadding?: boolean;
// }

// const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
//   ({ className, fullPadding, ...props }, ref) => (
//     <div
//       ref={ref}
//       className={cn("p-4", fullPadding ? "" : "pt-0", className)}
//       {...props}
//     />
//   )
// );
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex items-center p-4 pt-0", className)}
//     {...props}
//   />
// ));
// CardFooter.displayName = "CardFooter"

// export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }


import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm glass-surface',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
