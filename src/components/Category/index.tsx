import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react'
import Image from 'next/image'

import pastelImg from '../../../public/pastel-banner.jpg'
import carneImg from '../../../public/carne.jpg'
import CategoryItem, { CategoryItemProps } from './CategoryItem'

export default function Category() {
  const categoryItemList: CategoryItemProps[] = [
    {
      title: 'Mini coxinha de frango',
      desccription: '8 unidades',
      amount: 'R$ 2,00',
      imageURI: carneImg.src,
    },
    {
      title: 'Bolinho de misto',
      desccription: '8 unidades',
      amount: 'R$ 2,00',
      imageURI: carneImg.src,
    },
    {
      title: 'Bolinho de queijo',
      desccription: '8 unidades',
      amount: 'R$ 2,00',
      imageURI: carneImg.src,
    },
    {
      title: 'Mega coxinha de frango',
      desccription: '1 unidade | ~230 gramas',
      amount: 'R$ 5,00',
      imageURI: carneImg.src,
    },
    {
      title: 'Mega coxinha de frango c/ cheddar',
      desccription: '1 unidade | ~230 gramas',
      amount: 'R$ 5,00',
      imageURI: carneImg.src,
    },
    {
      title: 'Mega coxinha de frango c/ catupiry',
      desccription: '1 unidade | ~230 gramas',
      amount: 'R$ 8,00',
      imageURI: carneImg.src,
    },
    {
      title: 'Mega coxinha de frango c/ req',
      desccription: '1 unidade | ~230 gramas',
      amount: 'R$ 5,00',
      imageURI: carneImg.src,
    },
  ]

  return (
    <Card className="w-full bg-slate-400">
      <CardHeader className="flex items-center justify-center">
        <Image
          src={pastelImg.src}
          alt="Mountains"
          quality={100}
          width={700}
          height={150}
          style={{
            objectFit: 'cover',
          }}
        />
      </CardHeader>

      <Divider />

      <CardBody>
        {categoryItemList.map((item) => {
          return (
            <CategoryItem
              title={item.title}
              desccription={item.desccription}
              amount={item.amount}
              imageURI={item.imageURI}
              key={item.title}
            />
          )
        })}
      </CardBody>
    </Card>
  )
}
