const Option = ({ name, isActive, setIsActive, setLastActivated, color }) => {
  return (
    <div
      className={`option ${color}`}
      onClick={() => {
        setIsActive(!isActive);
        setLastActivated(name);
      }}
    >
      <div className="switch">
        <div className={`button-switch ${isActive && "active"}`}></div>
      </div>
      <div className="option-name">{name}</div>
    </div>
  );
};
export default Option;
