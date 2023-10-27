'use client'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  textContent: string;
  color?: 'primary' | 'secondary' | 'alert';
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  action: (e?: any) => void | any;
  disable?: boolean;
}

const COMMON_CLASSES =
  'text-white font-bold focus:outline-none rounded-lg px-4 py-2 text-center mr-3 md:mr-0'

const HOVER_CLASSES = {
  brighten: 'hover:brightness-125',
  darken: 'hover:brightness-75',
}

const BUTTON_COLORS = {
  primary: `bg-primary ${HOVER_CLASSES.darken} dark:bg-primary dark:${HOVER_CLASSES.brighten} disabled:bg-secondary}`,
  secondary: `bg-secondary ${HOVER_CLASSES.darken} dark:bg-secondary dark:hover:${HOVER_CLASSES.brighten}`,
  alert: `bg-alert ${HOVER_CLASSES.darken} dark:bg-alert dark:${HOVER_CLASSES.darken}`,
}

const Button = ({
  textContent,
  type = 'button',
  color = 'primary',
  className = '',
  action,
  disable = false
}: ButtonProps) => {
  return (
    <button
      onClick={action}
      disabled={disable}
      type={type}
      className={twMerge(COMMON_CLASSES, BUTTON_COLORS[color], className)}
    >
      {textContent}
    </button>
  )
}

export default Button
