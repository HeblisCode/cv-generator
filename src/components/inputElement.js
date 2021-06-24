export const InputElement = ({ changeHandler, name }) => {
  return (
    <input
      type="text"
      name={name}
      onChange={changeHandler}
      placeholder={name}
    />
  );
};
