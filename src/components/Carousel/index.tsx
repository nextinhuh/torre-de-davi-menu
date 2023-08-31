import React, { PropsWithChildren, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Dot from './Dot'

type CarouselProps = PropsWithChildren & EmblaOptionsType

export default function Carousel({ children, ...rest }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const length = React.Children.count(children)

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap()
      setSelectedIndex(index || 0)
    }

    emblaApi?.on('select', selectHandler)
    // cleanup
    return () => {
      emblaApi?.off('select', selectHandler)
    }
  }, [emblaApi])

  return (
    <div className="bg-slate-400">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      <Dot itemsLength={length} selectedIndex={selectedIndex} />
    </div>
  )
}
