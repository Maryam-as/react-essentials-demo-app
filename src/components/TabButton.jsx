// object destructuring
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* handleClick must not be executed, written without () */}
      {/* add the active class if the button is selected */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
