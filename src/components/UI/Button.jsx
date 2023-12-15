export default function Button({ children, textOnly, className, ...props }) {
  return (
    <button
      className={`${
        textOnly
          ? 'text-xl font-sans font-medium outline-none'
          : 'bg-yellow-500 text-black text-lg py-2 px-4 rounded-md '
      }+${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
