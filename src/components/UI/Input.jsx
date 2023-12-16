function Input({ name, label, ...props }) {
  return (
    <section className="flex flex-col gap-1 ">
      <label htmlFor={name} className="text-xl text-yellow-200 font-bold">
        {label} :
      </label>
      <input
        {...props}
        
        name={name}
        className="bg-yellow-100 bg-opacity-80 outline-none pl-1 focus:shadow-inner focus:shadow-yellow-950 duration-300 rounded-sm"
      />
    </section>
  );
}

export default Input;
