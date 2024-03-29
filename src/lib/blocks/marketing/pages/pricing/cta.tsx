import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classes";

interface CallToActionProps {
  headline: string;
  subheadline: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
}

export const CallToAction = (props: CallToActionProps) => {
  const { headline, subheadline, cta, className } = props;
  return (
    <section className={cn("mx-auto max-w-xl text-center", className)}>
      <h2 className="font-display text-4xl font-semibold tracking-tighter sm:text-5xl">
        {headline}
      </h2>
      <p className="mt-4 text-muted-foreground">{subheadline}</p>
      <Button asChild size="lg" className="mt-8">
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </section>
  );
};
