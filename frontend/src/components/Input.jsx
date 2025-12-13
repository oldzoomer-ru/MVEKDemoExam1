function Input({ id, placeholder, type, text }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input id={id} placeholder={placeholder} type={type} required={true} />
    </>
  );
}

export default Input;
