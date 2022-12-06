import React from 'react'
import {
  Image,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Divider,
  Button,
} from '@chakra-ui/react'
import './ProjectCard.scss'

export default function ProjectCard({ imgUrl, title, description }) {
  return (
    <Card
      maxW='sm'
      variant='filled'
      color='blackAlpha.900'
      className='project-card'
    >
      <CardBody>
        <Image src={imgUrl} alt='ProjectPhoto' borderRadius='lg' />
      </CardBody>
      <CardFooter>
        <Stack mt='6' spacing='3'>
          <Heading size='md' color={'white'}>
            {title}
          </Heading>
          <Text>{description}</Text>
        </Stack>
      </CardFooter>
    </Card>
  )
}
