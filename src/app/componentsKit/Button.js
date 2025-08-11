import React from "react";
const LoadingButton = React.forwardRef(
  ({ loading, children, disabled, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={loading || disabled}
        className={`bg-amber-600 hover:bg-amber-700 transition text-stone-900 font-semibold rounded-md py-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-stone-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

// 加上这行
LoadingButton.displayName = "LoadingButton";

export default LoadingButton;
