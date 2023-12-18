export default function Button({ children, textOnly, className, ...props }) {
  let style =
    'text-black text-lg py-2 px-4 rounded-md ' + className;

  if (textOnly) {
    style = 'text-xl font-sans font-medium outline-none ' + className;
  }

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
