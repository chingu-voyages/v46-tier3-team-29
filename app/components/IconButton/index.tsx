const BASE_CLASSES =
  'text-gray-800 dark:text-white hover:bg-white/10 rounded-full p-2'

const IconButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <button type="button" className={BASE_CLASSES} onClick={onClick}>
      {children}
    </button>
  )
}
export default IconButton
