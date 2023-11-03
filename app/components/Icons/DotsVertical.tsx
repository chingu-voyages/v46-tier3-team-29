import { twMerge } from 'tailwind-merge'
import { Size } from './types'
import sizeMapping from './mapping'

const BASE_CLASSES = 'text-gray-800 dark:text-white'

const DotsVertical = ({ size = 'md' }: { size?: Size }) => {
  const classes = twMerge(
    BASE_CLASSES,
    `w-${sizeMapping[size]} h-${sizeMapping[size]}`
  )

  return (
    <svg
      className={classes}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 4 15"
    >
      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  )
}

export default DotsVertical
