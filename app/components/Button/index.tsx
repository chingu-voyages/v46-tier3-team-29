import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  textContent: string;
  type?: 'button' | 'reset' | 'submit';
  kind?: 'primary' | 'secondary' | 'alert';
  className?: string;
};

const COMMON_CLASSES =
  'text-white font-bold focus:outline-none rounded-lg px-4 py-2 text-center mr-3 md:mr-0';

const BUTTON_COLORS = {
  primary:
    'bg-primary hover:bg-primaryHover dark:bg-primary dark:hover:hover:bg-primaryHover',
  secondary:
    'bg-secondary hover:bg-secondaryHover dark:bg-secondary dark:hover:hover:bg-secondaryHover',
  alert:
    'bg-alert hover:bg-alertHover dark:bg-alert dark:hover:hover:bg-alertHover',
};

const Button = ({
  textContent,
  type = 'button',
  kind = 'primary',
  className = '',
}: ButtonProps) => {
  const classes = BUTTON_COLORS[kind];

  return (
    <button type={type} className={twMerge(COMMON_CLASSES, classes)}>
      {textContent}
    </button>
  );
};

export default Button;
