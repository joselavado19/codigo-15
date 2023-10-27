export default function TextField({
  value,
  onChange,
  placeholder = "Ingrese Usuario",
  className,
  type = "text",
  name,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className={`border w-full px-2 py-3 rounded-l outline-none ${className}`}
      placeholder={placeholder}
    />
  );
}
