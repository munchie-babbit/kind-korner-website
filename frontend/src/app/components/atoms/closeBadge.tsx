"use client";
export default function CloseBadge({
  onClickClose,
}: {
  onClickClose: () => void;
}) {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-customDarkGreen border border-customDarkGreen rounded-full">
      <button type="button" onClick={onClickClose}>
        <svg
          className="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
      <span className="sr-only">Remove search text</span>
    </span>
  );
}
