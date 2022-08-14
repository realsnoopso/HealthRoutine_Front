import { Button } from '@src/components/atoms/Button';
import { css } from '@emotion/css';

interface ActionButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _onClick?: () => void;
  icon?: string;
}

export function ActionButton(props: ActionButton) {
  const { _onClick, icon } = props;

  return (
    <Button
      className={css`
        position: absolute;
        bottom: 56px;
      `}
      shape="round"
      icon={icon}
      _onClick={_onClick}
    />
  );
}
