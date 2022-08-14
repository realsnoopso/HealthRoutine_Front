import styled from '@emotion/styled';
import theme from '@src/styles/theme';

interface NumberInput {
  label?: string;
  placeholder?: string;
  value?: string;
}

export function NumberInput(props: NumberInput) {
  const { label, placeholder, value } = props;

  return (
    <StyledRoot>
      <label>{label}</label>
      <div className="container">
        <button>-</button>
        <input placeholder="0" value={value} type="number" />
        <button>+</button>
      </div>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  color: ${theme.colors.text};

  label {
    display: block;
  }

  .container {
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;

    & > button {
      padding: 4px;
      background-color: transparent;

      &:first-child {
        border-right: 1px solid ${theme.colors.border};
      }

      &:last-child {
        border-left: 1px solid ${theme.colors.border};
      }
    }
  }

  .material-icons {
    font-size: 56px;
  }
`;
