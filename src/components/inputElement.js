import "./inputElement.css";

export const InputElement = ({ changeHandler, name }) => {
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="inputElement">
      <label for={name}>{nameUppercase}</label>
      <input
        type="text"
        name={name}
        onChange={changeHandler}
        placeholder={nameUppercase}
        id={name}
      />
    </div>
  );
};
