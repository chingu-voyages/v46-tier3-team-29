'use client'

import IconButton from '../IconButton'
import DotsVertical from '../Icons/DotsVertical'

const Card = ({
  header,
  description = '',
  Content,
  Icon,
  Actions,
}: {
  header: string
  description?: string
  Content?: React.ReactNode
  Icon?: React.ReactNode
  Actions?: React.ReactNode
}) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {header}
        </h5>
        {Actions && (
          <IconButton onClick={() => alert('show actions')}>
            <DotsVertical />
          </IconButton>
        )}
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div>{Content}</div>
    </div>
  )
}
export default Card
