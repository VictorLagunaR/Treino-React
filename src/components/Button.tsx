
interface Props{
  children: string;
  color: string
  onClick: () => void;
}

function Button({children, onClick}: Props) {
  return (
    <button
      className={children === "Clicado" ? "btn btn-success" : "btn btn-primary"}
      onClick={(onClick)}
    >
      {children}
    </button>
  );
}

export default Button;
