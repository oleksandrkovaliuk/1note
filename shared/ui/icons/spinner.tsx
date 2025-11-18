export function Spinner(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g className="origin-center animate-spin">
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          strokeWidth="3"
          className="[stroke-linecap:round] animate-spinner-stroke "
        ></circle>
      </g>
    </svg>
  );
}
