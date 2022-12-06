import React from 'react'
import { SimpleGrid, Flex, Heading } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import PINTUApp from '../../assets/PINTUApp.png'
import SpotifyHitlist from '../../assets/SpotifyHitlist.png'

export default function Project() {
  const projects = [
    {
      imgUrl: PINTUApp,
      title: 'PINTU App',
      description: 'UI/UX Design',
    },
    {
      imgUrl: SpotifyHitlist,
      title: 'Spotify Hitlist Predictor',
      description: 'Machine Learning',
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
        justifyContent='center'
        alignItems='center'
        paddingBottom={'10vh'}
      >
        <Flex
          width='70vw'
          direction='column'
          rowGap='3vw'
          justifyContent='center'
        >
          <Heading
            fontSize='3em'
            color='white'
            textAlign='center'
            letterSpacing='1px'
            paddingTop='10vh'
            paddingBottom='20px'
          >
            Projects
          </Heading>
          <SimpleGrid
            spacing={6}
            templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
          >
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project}></ProjectCard>
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </div>
  )
}
