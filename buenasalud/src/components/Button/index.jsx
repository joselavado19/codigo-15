export default function Button({
    text,
    type = "button",
    className,
    variant = "primary",
  }) {
    const colors = {
      primary: "bg-primary-900 border-primary-900 text-white",
      secondary: "bg-secondary-900 border-secodary-900 text-white",
    };
  
    return (
      <>
        <button
          type={type}
          className={`px-2 py-3 rounded-r border ${colors[variant]} ${className}`}
        >
          {text}
        </button>
      </>
    );
  }