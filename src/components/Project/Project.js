import React from 'react'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

export default function Project() {
  const projects = [
    {
      imgUrl:
        'https://i.pinimg.com/originals/bc/13/ae/bc13aeda287f8b812ee4b48c64209ae4.png',
      title: 'Project 1',
      description: 'lorem ipsum lorem ipsum',
    },
    {
      imgUrl: 'imgURL',
      title: 'Project 2',
      description: 'lorem ipsum lorem ipsum',
    },
    {
      imgUrl: 'imgURL',
      title: 'Project 3',
      description: 'lorem ipsum lorem ipsum',
    },
    {
      imgUrl: 'imgURL',
      title: 'Project 4',
      description: 'lorem ipsum lorem ipsum',
    },
  ]
  return (
    <div className='project' id='project'>
      <Flex
        bg='#262626'
        w='full'
        h='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <SimpleGrid minChildHeight='120px' spacing={10} columns={2}>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project}></ProjectCard>
          })}
        </SimpleGrid>
      </Flex>
    </div>
  )
}
