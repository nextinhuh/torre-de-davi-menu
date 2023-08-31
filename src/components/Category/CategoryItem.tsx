import { Avatar, Button } from '@nextui-org/react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

export type CategoryItemProps = {
  title: string
  desccription: string
  amount: string
  imageURI: string
}

export default function CategoryItem({
  amount,
  desccription,
  imageURI,
  title,
}: CategoryItemProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row  items-center justify-around p-4 ">
        <div className="flex flex-col sm:flex-row items-center justify-start min-w-[460px]">
          <Avatar src={imageURI} className="w-24 h-24 text-large" />

          <div className="mt-4 sm:ml-8 sm:mt-0">
            <p className="text-center max-w-[260px] text-2xl uppercase">
              {title}
            </p>

            <p className="text-lg text-center">({desccription})</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <strong className="text-center text-green-300 text-2xl mb-4 sm:mb-0 sm:mr-8">
            {amount}
          </strong>

          <div className="grid gap-4 grid-cols-2">
            <Button
              isIconOnly
              color="warning"
              aria-label="Adiciona item"
              size="lg"
            >
              <AiOutlineMinusCircle className="text-3xl" />
            </Button>

            <Button
              isIconOnly
              color="warning"
              aria-label="Remove Item"
              size="lg"
            >
              <AiOutlinePlusCircle className="text-3xl" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
