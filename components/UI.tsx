import cn from "classnames";

const SPACING = '6';

export const H1 = ({ children, className }: React.HTMLProps<HTMLHeadingElement>) => {
  const style = cn(`first:mt-0 mt-${SPACING} font-lato font-semibold text-2xl uppercase tracking-wider`, className);
  return <h1 className={style}>{children}</h1>
}

export const H2 = ({ children, className }: React.HTMLProps<HTMLHeadingElement>) => {
  const style = cn(`first:mt-0 mt-${SPACING} -mb-${SPACING} font-lato font-semibold text-lg uppercase tracking-wider`, className);
  return <h1 className={style}>{children}</h1>
}

export const A = ({ children, className, ...props }: React.HTMLProps<HTMLAnchorElement>) => {
  const style = cn(`text-primary hover:text-primaryHover`, className);
  return <a className={style} {...props} target="_blank" rel="noopener noreferrer"> {children}</a>
}

export const P = ({ children, className, ...props }: React.HTMLProps<HTMLParagraphElement>) => {
  const style = cn(`first:mt-0 mt-${SPACING}`, className);
  return <p className={style} {...props}>{children}</p>
}

export const UL = ({ children, className, ...props }: React.HTMLProps<HTMLUListElement>) => {
  const style = cn(`first:mt-0 mt-${SPACING} list-disc ml-${SPACING}`, className);
  return <ul className={style} {...props}>{children}</ul>
}