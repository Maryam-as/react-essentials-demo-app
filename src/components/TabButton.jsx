// object destructuring
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      {/* handleClick must not be executed, written without () */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
