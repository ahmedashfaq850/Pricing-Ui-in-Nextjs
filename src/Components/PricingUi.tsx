import React from 'react'
import { Box, Flex, VStack, Heading, Stack, Text, Button, HStack } from '@chakra-ui/react';
import { CheckCircleIcon, PhoneIcon } from '@chakra-ui/icons'
import Image from 'next/image';


const PricingUi = () => {
    return (
        <>
            <Box position='relative' height='100vh'>
                <Box width='100%' bg='#6B46C1' height={['330px', '360px']} px='25px' textAlign={['left', 'center']}>
                    <Box pt={['40px', '60px']}>
                        <Heading color='white'>Simple pricing for your business</Heading>
                        <Text mt="20px" color='#F7FAFC'>Plans that are carefully crafted to suit your business.</Text>
                    </Box>
                </Box>

                <Box width='100%' position='absolute' top={['220px', '220px']}>
                    <Stack justifyContent='center' alignItems='center' direction={['column', 'row']} spacing={0}>
                        <Stack boxShadow='xl' justifyContent='center' alignItems='center' width={['350px', '330px']} height={['283px', '336px0']} bg='#F0EAFB' borderRadius={['12px 12px 0px 0px', '12px 0px 0px 12px']}>
                            <Heading>Premium PRO</Heading>
                            <Heading>$329</Heading>
                            <Text>billed just once</Text>
                            <Button variant='solid' mt='20px' bg='#805AD5' color='white' width='250px'>Get Started</Button>
                        </Stack>
                        <Stack p={['10px', "50px"]} boxShadow='xl' width={['350px', '650px']} height={['283px', '336px0']} bg='white'>
                            <Text mb="5px">Access these features when you get this pricing package for <br /> your business.</Text>
                            <HStack pb="3px" alignItems='center'> <CheckCircleIcon color='#652CD3' /> <Text>International calling and messaging API</Text></HStack>
                            <HStack pb="3px" alignItems='center'> <CheckCircleIcon color='#652CD3' /> <Text>Additional phone numbers</Text></HStack>
                            <HStack pb="3px" alignItems='center'> <CheckCircleIcon color='#652CD3' /> <Text>Automated messages via Zapier</Text></HStack>
                            <HStack pb="3px" alignItems='center'> <CheckCircleIcon color='#652CD3' /> <Text>24/7 support and consulting</Text></HStack>

                        </Stack>
                    </Stack>
                     <Box mt={['35px', '50px']} px={['25px', '0px']} width='100%'>
                    <Stack justifyContent={['left', 'center']} alignItems={['left', 'center']} direction={['column', 'row']} spacing={[2, 40]}>
                        <HStack spacing='20px' alignItems='center'> <Image src='images/Group.svg' width={30} height={30} alt='icon'/> <Text fontWeight='xl'>30 days money back <br /> Guarantee</Text></HStack>
                        <HStack spacing='20px' alignItems='center'> <Image src='images/second.svg' width={30} height={30} alt='icon'/> <Text fontWeight='xl'>No setup fees <br /> 100% hassle-free</Text></HStack>
                        <HStack spacing='20px' alignItems='center'> <Image src='images/arrow.svg' width={30} height={30} alt='icon'/> <Text fontWeight='xl'>No monthly subscription <br /> Pay once and for all</Text></HStack>
                    </Stack>
                </Box>
                </Box>

                
            </Box>
        </>
    )
}

export default PricingUi
