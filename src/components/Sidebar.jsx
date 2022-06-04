import React,{useContext} from 'react'
import styles from "./style.module.css"
import { Box,WrapItem,Avatar } from '@chakra-ui/react'
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import Crop169OutlinedIcon from '@mui/icons-material/Crop169Outlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import Dashboard from './Dashboard';
import {ThemeContext} from "../contexts/ThemeContext"

const Sidebar = () => {
    const {isDarkMode} = useContext(ThemeContext)
  return (
    <div style={{display: "flex", position: "relative"}}>
        <Box className={isDarkMode===true ? styles.darkSidebar : styles.lightSidebar}>
        <div style={{display: "flex", flexDirection: "column", gap: "180px", }}>
            <div>
                <WrapItem style={{marginLeft:"10px"}}>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap:"0px"
                        ,alignItems: "center"}}>
                <div className={styles.color}><DashboardIcon/></div>
                <div className={styles.color}><Crop169OutlinedIcon/></div>
                <div className={styles.color}><CasesOutlinedIcon/></div>
                <div className={styles.color}><MarkAsUnreadOutlinedIcon/></div>
                <div className={styles.color}><ChatOutlinedIcon/></div>
                <div className={styles.color}><SettingsOutlinedIcon/></div>   
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
                <AddCircleOutlineIcon sx={{ color: "#5ccc97" }}/>
            </div>
        </div>
        </Box>
        <Box className={isDarkMode===true ? styles.dashboardBoxDark : styles.dashboardBoxLight}>
            <Dashboard/>
        </Box>
    </div>
  )
}

export default Sidebar