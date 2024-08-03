// import React, { useState } from 'react'
// import { Container } from 'react-bootstrap'
// import { ImageComp } from '../../Components/ImageCompo/ImageComp'
// import HeaderCompo from '../../Components/HeaderComp/HeaderCompo'
// import RegistrationFirst from './RegistrationFirst'
// import RegistrationSecond from './RegistrationSecond'
// import RegistrationThird from './RegistrationThird'

// const RegistrationMainPage = () => {

//     const [selectedButton, setSelectedButton] = useState({ 'Registration Details': true })

//     const ButtonName = [
//         'Registration Details',
//         'Discover registration details',
//         'Engage Details'
//     ]

//     const ButtonNameUpdate = (name) => {
//         if (selectedButton?.[name]) {
//             setSelectedButton({ [name]: false })
//         } else {
//             setSelectedButton({ [name]: true })
//         }
//     }
//     return (
//         <>
//             <Container className='py-[20px]'>
//                 <div className='flex flex-col gap-[30px]'>
//                     <div>
//                         <ImageComp Data={{ source: '/Images/logo.png', className: 'max-h-[100%] h-[50px]' }} />
//                     </div>
//                     <div>
//                         <HeaderCompo tagType='h3' className='text-2xl text-black font-semibold tracking-wider' text='New NPO Registration' />
//                     </div>
//                     <div className='flex gap-[10px]'>
//                         {ButtonName.map((btn, index) =>
//                             <button onClick={() => { ButtonNameUpdate(btn) }} className={`${selectedButton?.[btn] ? "bg-[#004878] text-white " : "border-2 border-[#004878] text-[#004878] "} py-[10px] px-[20px] rounded-full flex gap-[10px] items-center`}>
//                                 <div className={`${selectedButton?.[btn] ? 'bg-white text-black' : 'bg-[#004878] text-white '} h-[25px] w-[25px] rounded-full  flex items-center justify-center  text-[20px]`}>
//                                     {index + 1}
//                                 </div>
//                                 {btn}
//                             </button>
//                         )}
//                     </div>
//                     {
//                         selectedButton?.['Registration Details'] ?
//                             <RegistrationFirst />
//                             :
//                             selectedButton?.['Discover registration details']
//                                 ?
//                                 <RegistrationSecond />
//                                 :
//                                 <RegistrationThird />

//                     }

//                 </div>

//             </Container>

//         </>
//     )
// }

// export default RegistrationMainPage


import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ImageComp } from '../../Components/ImageCompo/ImageComp';
import CircleIcon from '@mui/icons-material/Circle';
import HeaderCompo from '../../Components/HeaderComp/HeaderCompo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RegistrationFirst from './RegistrationFirst';
const drawerWidth = 340;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const registrationTabs = [
    {
        tab: 'Initial Registration',
        subTabs: ['label1']
    },
    {
        tab: 'Discover Registration Details',
        subTabs: ['label2', 'label3', 'label4']
    },
    {
        tab: 'Engage Details',
        subTabs: ['label5', 'label6']
    },
]

const RegistrationMainPage = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [subTabs, setSubTabs] = React.useState({
        'label1': true
    }
    );
    const [tabs, setTabs] = React.useState({
        'Initial Registration': true
    });


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const selectSubTab = (name) => {
        if (subTabs[name]) {
            setSubTabs({ [name]: false })
        } else {
            setSubTabs({ [name]: true })
        }
    }
    const selectTab = (name) => {
        if (tabs?.[name]) {
            setTabs({ [name]: false })
        } else {
            setTabs({ [name]: true })
        }
    }
    console.log("tabs>>>", tabs, subTabs)
    return (

        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Drawer variant="permanent" open={open}>

                    <DrawerHeader className='flex flex-col  gap-2 justify-start items-start'>
                        {open &&
                            <>
                                <div className='w-[100%] pl-[10px] flex justify-start'>
                                    <ImageComp Data={{ source: '/Images/logo.png', className: 'h-[37px] mt-[10px]' }} />
                                </div>
                                <div className='flex pl-[10px] w-[100%] items-center justify-between'>
                                    <HeaderCompo className='text-[15px] mt-0 mb-0' tagType='h3' text={'New NPO Registration'} />
                                    <div className=' h-fit rounded-full bg-[#004878]'>
                                        < IconButton onClick={handleDrawerClose}>
                                            {theme.direction === 'rtl' ? <ChevronRightIcon className='text-white text-3xl' /> : <ChevronLeftIcon className='text-white text-3xl' />}
                                        </IconButton>
                                    </div>
                                </div>
                            </>
                        }
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 0,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {registrationTabs?.map((text, index) => (
                            <>
                                <div className='w-[100%] flex justify-between items-center'>
                                    <ListItem onClick={() => selectTab(text?.tab)} key={text} disablePadding sx={{
                                        display: 'block',
                                        // backgroundColor: tabs?.[text?.tab] && open && '#004878'
                                    }}>
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                        >

                                            <ListItemText primary={text.tab} sx={{
                                                opacity: open ? 1 : 0,
                                                fontSize: '30px',
                                                // color: tabs?.[text?.tab] && open && 'white'
                                            }} />
                                        </ListItemButton>
                                    </ListItem >
                                    <ArrowDropDownIcon />
                                </div>

                                {
                                    text?.subTabs.map(ele =>
                                        <div className='p-[10px] w-[100%] '>
                                            <ListItem onClick={() => selectSubTab(ele)} key={text} disablePadding sx={{
                                                display:
                                                    'block',
                                                backgroundColor: subTabs?.[ele] && open && '#004878', borderRadius: '40px'
                                            }}>
                                                <ListItemButton
                                                    sx={{
                                                        minHeight: 48,
                                                        justifyContent: open ? 'initial' : 'center',
                                                        px: 2.5,
                                                    }}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            marginLeft: '0',
                                                            minWidth: '30px',
                                                            opacity: open ? 1 : 0

                                                        }}
                                                    >
                                                        <CircleIcon sx={{
                                                            color: 'black',
                                                            fontSize: '15px',
                                                            color: subTabs?.[ele] && open && 'white'
                                                        }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={ele} sx={{
                                                        opacity: open ? 1 : 0,
                                                        color: subTabs?.[ele] && open && 'white'
                                                    }} />
                                                </ListItemButton>
                                            </ListItem >
                                        </div>

                                    )
                                }
                                <div className='border-b-2' />
                            </>

                        ))}
                    </List>

                    <Divider />

                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {
                        tabs?.["Initial Registration"] && subTabs?.["label1"] &&

                        < RegistrationFirst />
                    }
                </Box>
            </Box >
        </>

    )
}

export default RegistrationMainPage