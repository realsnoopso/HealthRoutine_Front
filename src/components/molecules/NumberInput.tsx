import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { css } from '@emotion/css';

interface NumberInput {
  label?: string;
  placeholder?: string;
  value?: string;
  style?: any;
}

export function NumberInput(props: NumberInput) {
  const { label, placeholder, value, style } = props;

  return (
    <StyledRoot
      className={css`
        ${style}
      `}
    >
      <label>{label}</label>
      <div className="container">
        <button>
          <span className="material-icons">remove</span>
        </button>
        <input placeholder="0" value={value} type="number" />
        <button>
          <span className="material-icons">add</span>
        </button>
      </div>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  color: ${theme.colors.text};

  label {
    display: block;
    text-align: center;
  }

  .container {
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    height: 100px;
    display: flex;

    & > input {
      text-align: center;
      font-weight: bold;
      width: 160px;
      height: 100px;
    }

    & > button {
      padding: 0 32px;
      background-color: transparent;
      height: 100px;

      &:first-child {
        border-right: 1px solid ${theme.colors.border};
      }

      &:last-child {
        border-left: 1px solid ${theme.colors.border};
      }
    }
  }

  .material-icons {
  }
`;
