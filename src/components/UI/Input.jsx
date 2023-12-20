function Input({ name, label, className, textarea, ...props }) {
  const inputStyle = `bg-yellow-100 bg-opacity-80 outline-none pl-1 focus:shadow-inner focus:shadow-yellow-950 rounded-sm  ${className}`;
  let input = (
    <input {...props} name={name} className={inputStyle + ' duration-300'} />
  );

  if (textarea) {
    input = (
      <textarea
        {...props}
        name={name}
        className={inputStyle + ' duration-75'}
      />
    );
  }

  return (
    <section className="flex flex-col gap-1 ">
      {label && (
        <label htmlFor={name} className="text-xl text-yellow-200 font-bold">
          {label} :
        </label>
      )}
      {input}
    </section>
  );
}

export default Input;
