import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactElement;
  variant?: 'default' | 'transparent' | 'submit' | 'proceed';
  defaultstyle?: string;
  size?: 'default' | 'small';
}

export const Button = (props: ButtonProps) => {
  const { variant } = props;

  const style = "rounded-full font-bold p-2"

  switch (variant) {
    case 'transparent':
      return <TransparentButton defaultstyle={style} {...props} size={props?.size ?? 'default'} />
    case 'proceed':
      return <ProceedButton defaultstyle={style} {...props} size={props?.size ?? 'default'} />
    case 'submit':
      return <SubmitButton defaultstyle={style} {...props} size={props?.size ?? 'default'} />
    default:
      return <DefaultButton defaultstyle={style} {...props} size={props?.size ?? 'default'} />
  }
};

export const DefaultButton = (props: ButtonProps) => {
  let { children, icon, defaultstyle, size } = props;

  if (size === 'default') defaultstyle += ' w-44'

  return (
    <button {...props} className={`${defaultstyle} border border-white hover:text-white transition ease`}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className: 'fill-black w-7 h-7' })}
    </button>
  );
};

export const TransparentButton = (props: ButtonProps) => {
  let { children, icon, defaultstyle, size } = props;

  if (size === 'default') defaultstyle += ' w-44'

  return (
    <button {...props} className={`${defaultstyle} border border-black text-black `}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className: 'fill-black w-7 h-7' })}
    </button>
  );
}
export const ProceedButton = (props: ButtonProps) => {
  let { children, icon, defaultstyle, size } = props;

  if (size === 'default') defaultstyle += ' w-44'

  return (
    <button {...props} className={`${defaultstyle} border border-white text-white bg-black`}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className: 'fill-black w-7 h-7' })}
    </button>
  );
}
export const SubmitButton = (props: ButtonProps) => {
  let { children, icon, defaultstyle, size } = props;

  if (size === 'default') defaultstyle += ' w-44'

  return (
    <button {...props} className={`${defaultstyle} border border-white text-black bg-white flex justify-center items-center gap-2`}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className: 'fill-white' })}
    </button>
  );
}

export default Button;
