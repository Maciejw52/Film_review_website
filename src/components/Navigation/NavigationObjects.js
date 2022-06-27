import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import Menu from "@mui/icons-material/Menu"
import AddCommentIcon from '@mui/icons-material/AddComment';


export const NavigationObjects = [
    {
        title: "Menu",
        icon: <Menu />,
    },
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/"
    },
    {
        title: "Film Reviews",
        icon: <ReviewsIcon/>,
        link: "/reviews"
    },
    {
        title: "Add a Review",
        icon: <AddCommentIcon/>,
        link: "/reviews/new"
    },
    {
        title: "Genres",
        icon: <CategoryIcon/>,
        link: "/genres"
    },
    {
        title: "Add a Genre",
        icon: <CategoryIcon />,
        link: "/genres/new"
    },
    {
        title: "Actors",
        icon: <GroupIcon />,
        link: "/actors"
    },
    {
        title: "Account",
        icon: <AccountCircleIcon/>,
        link: "/account"
    }
];