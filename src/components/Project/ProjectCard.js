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

export default function ProjectCard({ imgUrl, link, title, description }) {
  return (
    <Card variant='filled' className='project-card'>
      <CardBody px={0} py={0} overflow='hidden'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <Image
            src={imgUrl}
            alt='ProjectPhoto'
            borderTopRadius='lg'
            className='project-card-image'
          />
        </a>
      </CardBody>
      <CardFooter>
        <Stack spacing='3'>
          <Heading size='md' color={'white'}>
            {title}
          </Heading>
          <Text color={'whiteAlpha.700'}>{description}</Text>
        </Stack>
      </CardFooter>
    </Card>
  )
}
