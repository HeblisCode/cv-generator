import "./inputElement.css";

export const InputElement = ({ changeHandler, name, id }) => {
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="inputElement">
      <label htmlFor={name}>{nameUppercase}</label>
      <input
        type="text"
        name={name}
        onChange={changeHandler}
        placeholder={nameUppercase}
        data-id={id}
      />
    </div>
  );
};
