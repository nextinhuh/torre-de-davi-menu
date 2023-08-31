import classNames from 'classnames'

type DotProps = {
  itemsLength: number
  selectedIndex: number
}

export default function Dot({ itemsLength, selectedIndex }: DotProps) {
  const arr = new Array(itemsLength).fill(0)

  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5 mt-8">
      {arr.map((_, index) => {
        const selected = index === selectedIndex
        return (
          <div
            className={classNames({
              'h-3 w-3 rounded-full transition-all duration-300 bg-yellow-400':
                true,
              // tune down the opacity if slide is not selected
              'opacity-50': !selected,
            })}
            key={index}
          ></div>
        )
      })}
    </div>
  )
}
