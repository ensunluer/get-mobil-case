import { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type Variant = 'primary' | 'secondary' | 'danger';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specifies the button's variant style.
   * @default "primary"
   * @example
   * <Button variant="secondary">Secondary Button</Button>
   */
  variant?: Variant;

  /**
   * Defines the button's size.
   * @default "medium"
   * @example
   * <Button size="large">Large Button</Button>
   */
  size?: Size;

  /**
   * Disables the button if true, preventing any interaction.
   * @default false
   * @example
   * <Button disabled>Disabled Button</Button>
   */
  disabled?: boolean;
}


/**
 * A reusable button component with customizable variant, size, and disabled state.
 * @param children
 * @param onClick
 * @param variant
 * @param size
 * @param disabled
 * @param props
 * @returns {JSX.Element} A styled button component.
 * @example // Primary button with default size
 <Button onClick={() => alert('Clicked!')}>Click Me</Button>

 // Secondary large button
 <Button variant="secondary" size="large">Large Button</Button>

 // Disabled danger button
 <Button variant="danger" disabled>Disabled</Button>
 */
const Button: FC<ButtonProps> =
  ({
     children,
     onClick,
     variant = 'primary',
     size = 'medium',
     disabled = false,
     ...props
   }): JSX.Element => {
    return (
      <StyledButton
        onClick={onClick}
        variant={variant}
        size={size}
        disabled={disabled}
        {...props}
      >
        {children}
      </StyledButton>
    );
  };

const StyledButton = styled.button<{ variant: Variant; size: Size }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${({ size }) => {
        switch (size) {
            case 'small':
                return '0.4rem 0.8rem';
            case 'large':
                return '0.8rem 1.6rem';
            default:
                return '0.6rem 1.2rem';
        }
    }};
    font-size: ${({ size }) => (size === 'large' ? '1.1rem' : size === 'small' ? '0.9rem' : '1rem')};
    font-weight: 600;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    background-color: ${({ variant }) => variant === 'secondary' ? '#6c757d' : variant === 'danger' ? '#dc3545' : '#007bff'};
    color: #fff;

    &:hover {
        background-color: ${({ variant }) =>
                variant === 'secondary' ? '#5a6268' : variant === 'danger' ? '#c82333' : '#0056b3'};
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        background-color: #d6d6d6;
        cursor: not-allowed;
    }
`;

export default Button;
