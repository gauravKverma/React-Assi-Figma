import React, { useContext } from 'react'
import {Box,Switch,Container,Avatar,Slider,SliderFilledTrack,SliderTrack,SliderThumb} from "@chakra-ui/react"
import styles from "./style.module.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {ThemeContext} from "../contexts/ThemeContext"

const Dashboard = () => {
    const {isDarkMode,themeToggle} = useContext(ThemeContext)
  return (
    <div style={{marginLeft:"35px"}}>
        <div style={{display: "flex", alignItems:"center", gap:"80px"}}>
            <h1 className={styles.size}>My Dashboard</h1>
            <p style={{fontSize:"12px", fontWeight:"500", marginTop:"10px"}}>Dark Mode
            </p><span style={{marginLeft:"-70px"}}><Switch size='lg' onChange={themeToggle}/></span>
        </div>
        <div className={styles.container}>
        <Container className={isDarkMode===true ? styles.containerDark : styles.containerLight}>
            <Box padding='3' maxW='md' className={styles.box}>
                <div>Active Users</div>
                <div style={{fontSize:"13px"}}>for August 2020</div>
            </Box>
            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <Box padding='3' maxW='md' className={styles.box}>
                    <div style={{display:"flex"}}>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <div className={styles.infobox}>
                            <div style={{fontSize:"14px"}}>
                                Nrupul Dev <br />Bangalore,India
                            </div>
                            <div>
                                <MoreHorizIcon/>
                            </div>
                        </div>
                    </div>
                </Box>
                <Slider aria-label='slider-ex-1' defaultValue={70} colorScheme='green' isDisabled>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                </Slider>
                <Box padding='3' maxW='md' className={styles.box}>
                    <div style={{fontSize:"13px",}}>Professional Level 15</div>
                    <div style={{fontSize:"13px", fontWeight:"800"}}>4723</div>
                </Box>
                <hr className={isDarkMode===true? styles.hrDark : styles.hrLight}/>
                <Box padding='3' maxW='md' className={styles.box}>
                    <div style={{display:"flex"}}>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/ryan-florence' />
                        <div className={styles.infobox}>
                            <div style={{fontSize:"14px"}}>
                                Yogesh Bhat <br />Bangalore,India
                            </div>
                            <div>
                                <MoreHorizIcon/>
                            </div>
                        </div>
                    </div>
                </Box>
                <Slider aria-label='slider-ex-1' defaultValue={50} colorScheme='blue' isDisabled>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                </Slider>
                <Box padding='3' maxW='md' className={styles.box}>
                    <div style={{fontSize:"13px",}}>Professional Level 11</div>
                    <div style={{fontSize:"13px", fontWeight:"800"}}>2339</div>
                </Box>
                <hr className={isDarkMode===true? styles.hrDark : styles.hrLight}/>
                <Box padding='3' maxW='md' className={styles.box}>
                    <div style={{display:"flex"}}>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/kent-c-dodds' />
                        <div className={styles.infobox}>
                            <div style={{fontSize:"14px"}}>
                                Elon Tusk <br />California,USA
                            </div>
                            <div>
                                <MoreHorizIcon/>
                            </div>
                        </div>
                    </div>
                </Box>
                <Slider aria-label='slider-ex-1' defaultValue={30} colorScheme='purple' isDisabled>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                </Slider>
                <Box padding='3' maxW='md' className={styles.box}>
                    <div style={{fontSize:"13px",}}>Professional Level 6</div>
                    <div style={{fontSize:"13px", fontWeight:"800"}}>1884</div>
                </Box>
            </div>
        </Container>
        </div>
        
    </div>
  )
}

export default Dashboard