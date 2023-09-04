import React from 'react'
import { SimpleGrid, Flex, Heading } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import PINTUApp from '../../assets/PINTUApp.png'
import SpotifyHitlist from '../../assets/SpotifyHitlist.png'
import SudoGO from '../../assets/SudoGO.png'
import SmackEcommerce from '../../assets/SmackEcommerce.png'
import Tweedle from '../../assets/Tweedle.png'
import './ProjectCard.scss'

export default function Project() {
  const projects = [
    {
      imgUrl: SmackEcommerce,
      link: 'https://github.com/gabriellenicole/smack-ecommerce',
      title: 'Smack: Ecommerce Website',
      description: 'Full Stack Development',
    },
    {
      imgUrl: Tweedle,
      link: 'https://github.com/matthewdinata/tweedle-app',
      title: 'Tweedle: Social Media Platform',
      description: 'Full Stack Development',
    },
    {
      imgUrl: PINTUApp,
      link: 'http://app.pintusingapura.org',
      title: 'PINTU App',
      description: 'UI/UX Design',
    },
    {
      imgUrl: SpotifyHitlist,
      link: 'https://github.com/gabriellenicole/spotify-hitlist',
      title: 'Spotify Hitlist Predictor',
      description: 'Machine Learning',
    },
    {
      imgUrl: SudoGO,
      link: 'https://github.com/gabriellenicole/sudoku-game',
      title: 'SudoGO: Sudoku Game',
      description: 'Java OOP Project',
    },
  ]
  return (
    <div className='project' id='project'>
      <Flex
        bg='#262626'
        w='full'
        justifyContent='center'
        alignItems='center'
        paddingBottom={'15vh'}
      >
        <Flex
          width='70vw'
          direction='column'
          rowGap='3vw'
          justifyContent='center'
          className='project-card-flex'
        >
          <Heading
            fontSize='3em'
            color='white'
            textAlign='center'
            letterSpacing='1px'
            paddingBottom='20px'
          >
            Projects
          </Heading>

          <SimpleGrid
            spacing={6}
            templateColumns='repeat(auto-fill, minmax(350px, 1fr))'
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
