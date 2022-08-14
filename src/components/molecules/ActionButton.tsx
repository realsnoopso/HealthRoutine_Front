import { Button } from '@src/components/atoms/Button';
import { css } from '@emotion/css';

interface ActionButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _onClick?: () => void;
  icon?: string;
  style?: any;
}

export function ActionButton(props: ActionButton) {
  const { _onClick, icon, style } = props;

  return <Button style={style} shape="round" icon={icon} _onClick={_onClick} />;
}
