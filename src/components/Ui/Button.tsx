import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactElement;
  variant?: 'default' | 'transparent' | 'submit' | 'proceed';
  defaultStyle?: string;
  size?: 'default' | 'small';
}

export const Button = (props : ButtonProps) => {
  const { variant } = props;

  const style = "rounded-full font-bold p-2"

  switch(variant) {
    case 'transparent':
      return <TransparentButton defaultStyle={style} {...props} size={props?.size ?? 'default'}/>
    case 'proceed':
      return <ProceedButton defaultStyle={style} {...props} size={props?.size ?? 'default'}/>
    case 'submit':
      return <SubmitButton defaultStyle={style} {...props} size={props?.size ?? 'default'}/>
    default: 
      return <DefaultButton defaultStyle={style} {...props} size={props?.size ?? 'default'}/>
  }
};

export const DefaultButton = (props: ButtonProps) => {
  let { children, icon, defaultStyle, size } = props;

  if(size === 'default') defaultStyle += ' w-44'

  return(
    <button {...props} className={`${defaultStyle} border border-white text-white hover:bg-white hover:text-black transition ease`}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className : 'fill-black w-7 h-7'})}
    </button>
  );
};

export const TransparentButton = (props : ButtonProps) => {
  let { children, icon, defaultStyle, size } = props;

  if(size === 'default') defaultStyle += ' w-44'

  return(
    <button {...props} className={`${defaultStyle} border border-black text-black `}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className : 'fill-black w-7 h-7'})}
    </button>
  );
}
export const ProceedButton = (props : ButtonProps) => {
  let { children, icon, defaultStyle, size } = props;

  if(size === 'default') defaultStyle += ' w-44'

  return(
    <button {...props} className={`${defaultStyle} border border-white text-white bg-black`}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className : 'fill-black w-7 h-7'})}
    </button>
  );
}
export const SubmitButton = (props : ButtonProps) => {
  let { children, icon, defaultStyle, size } = props;

  if(size === 'default') defaultStyle += ' w-44'

  return(
    <button {...props} className={`${defaultStyle} border border-white text-black bg-white flex justify-center items-center gap-2`}>
      <span className="text-center my-auto">
        {children}
      </span>
      {icon && cloneElement(icon, { className : 'fill-white'})}
    </button>
  );
}

export default Button;
