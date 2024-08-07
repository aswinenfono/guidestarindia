
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
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
import Initial from './InitialRegistration/Initial';
import Pan from './Discover/Pan';
import LegalRegistration from './Discover/LegalRegistration';
import HeadOfOrganization from './Discover/HeadOfOrganization';
import ContactPersonOfOrganization from './Discover/ContactPersonOfOrganization';
import BriefDescriptionAboutNPO from './Discover/BriefDescriptionAboutNPO';
import SeeWhatWeDo from './Discover/SeeWhatWeDo';
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



const RegistrationMainPage = () => {
    const registrationTabs = [
        {
            tab: 'Initial Registration',
            subTabs: ['Page 1']
        },
        {
            tab: 'Discover Registration Details',
            subTabs: ['PAN', 'Legal Registrations', 'Head of Organisation', 'Contact Person of Organization', 'Brief description about NPO', 'See What we do']
        },
        {
            tab: 'Engage Details',
            subTabs: ['Page 8', 'Page 9']
        },
    ]

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [mainForm, setMainForm] = React.useState()
    const [subTabs, setSubTabs] = React.useState({
        'PAN': true
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
        setSubTabs({ [name]: true })
    }
    const selectTab = (name) => {
        if (tabs?.[name]) {
            setTabs({ [name]: false })
        } else {
            setTabs({ [name]: true })
        }
    }

    console.log("mainForm>>>>", mainForm)
    return (

        <>
            <Box sx={{ display: 'flex', }}>
                <CssBaseline />

                <Drawer className='z-[12] ' variant="permanent" open={open}>
                    <DrawerHeader className='flex flex-col   gap-2 justify-start items-start'>
                        {open &&
                            <>
                                <div className='w-[100%] pl-[10px] flex justify-start'>
                                    <ImageComp source='/Images/logo.png' className='h-[37px] mt-[10px]' />
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

                    <List sx={{
                        overflowY: 'scroll',
                        scrollbarWidth: 'none', /* Firefox */
                        '&::-webkit-scrollbar': {
                            display: 'none' /* Safari and Chrome */
                        }
                    }}>

                        <Divider />
                        {open && registrationTabs?.map((text, index) => (
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
                                    open && text?.subTabs.map(ele =>
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
                                {
                                    open &&
                                    <div className='border-b-2' />

                                }
                            </>

                        ))}
                    </List>

                    <Divider />

                </Drawer>
                <Box component="main" sx={{ p: '40px', width: '100%' }}>
                    {
                        subTabs?.["Page 1"] ?
                            <Initial setMainForm={setMainForm} />
                            :
                            subTabs?.['PAN'] ?
                                <Pan />
                                :
                                subTabs?.['Legal Registrations'] ?
                                    <LegalRegistration />
                                    :
                                    subTabs?.['Head of Organisation'] ?
                                        <HeadOfOrganization />
                                        :
                                        subTabs?.['Contact Person of Organization'] ?
                                            <ContactPersonOfOrganization />
                                            :
                                            subTabs?.['Brief description about NPO'] ?
                                                <BriefDescriptionAboutNPO />
                                                :
                                                subTabs?.['See What we do'] ?
                                                    <SeeWhatWeDo />
                                                    : ''

                    }
                </Box>
            </Box >
        </>

    )
}

export default RegistrationMainPage