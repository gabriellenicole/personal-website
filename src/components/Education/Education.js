import React from 'react'
import {
  Flex,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
} from '@chakra-ui/react'
import './Education.scss'

export default function Education() {
  return (
    <div className='education' id='education'>
      <Flex
        bg='#262626'
        w='full'
        h='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <Flex width='70vw' direction='column' rowGap='3vh'>
          <Heading
            fontSize='3em'
            color='white'
            textAlign='center'
            letterSpacing='1px'
            paddingBottom='20px'
          >
            Education
          </Heading>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            size='lg'
            className='education-card hoverPink'
          >
            <Stack width='70vw'>
              <CardBody>
                <Heading size='md' color='#ff44cc' py='5px'>
                  Nanyang Technological University
                </Heading>
                <Flex justifyContent='space-between' className='mobile'>
                  <Text py='1' color='white'>
                    Information Engineering and Media
                  </Text>
                  <Text py='1' color='white'>
                    Aug 2021 - Present
                  </Text>
                </Flex>
              </CardBody>

              <CardFooter>
                <Text py='1' color='white'>
                  Relevant Courses: Object Oriented Programming, Data Structure
                  and Algorithm, Introduction to Design and Project, Software
                  Engineering
                </Text>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            variant='outline'
            overflow='hidden'
            size='lg'
            className='education-card hoverBlue'
          >
            <Stack width='70vw'>
              <CardBody>
                <Heading size='md' color='#15f4ee' py='5px'>
                  Virtual Learning Development
                </Heading>
                <Flex direction='column' mt='15px'>
                  <Text py='1' color='white'>
                    LinkedIn Learning: JavaScript Essential Training
                  </Text>
                  <Text py='1' color='white'>
                    freeCodeCamp: Legacy Responsive Web Design, JavaScript
                    Algorithm and Data Structures
                  </Text>
                  <Text py='1' color='white'>
                    Udemy : Build Web Apps with React & Firebase
                  </Text>
                </Flex>
              </CardBody>
            </Stack>
          </Card>
        </Flex>
      </Flex>
    </div>
  )
}
