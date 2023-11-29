"use client";
import Link from "next/link";

export function ActionButton({
  href = "",
  text,
  type = undefined,
  backgroundColour = "customDarkGreen",
  borderColour = "customDarkGreen",
  hoverColour = "customBlue",
  textColour = "customWhite",
  ...props
}: {
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  backgroundColour?: string;
  borderColour?: string;
  hoverColour?: string;
  textColour?: string;
}) {
  return (
    <Link href={href}>
      <button
        type={type}
        className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-${textColour} rounded-lg border-[1.5px] hover:text-customDarkGreen hover:border-customDarkGreen bg-${backgroundColour} border-${borderColour} hover:bg-${hoverColour}`}
        {...props}
      >
        {text}
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns=""
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </Link>
  );
}
