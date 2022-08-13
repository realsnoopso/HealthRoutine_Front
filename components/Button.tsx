interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  _onClick?: () => void;
}

export function Button(props: Button) {
  const { children, _onClick } = props;
  return (
    <button {...props} onClick={_onClick}>
      {children}
    </button>
  );
}
