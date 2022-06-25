import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import ReviewsIcon from "@material-ui/icons/RateReview"
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceSharp from '@material-ui/icons/FaceSharp';
import Menu from "@material-ui/icons/Menu";

export const NavigationObjects = [
    {
        title: "Menu",
        icon: <Menu/>,
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
        icon: <CategoryIcon/>,
        link: "/reviews/new"
    },
    {
        title: "Genre",
        icon: <CategoryIcon/>,
        link: "/genres"
    },
    {
        title: "Add a Genre",
        icon: <CategoryIcon />,
        link: "/genres"
    },
    {
        title: "Actors",
        icon: <FaceSharp />,
        link: "/categories"
    },
    {
        title: "Account",
        icon: <AccountCircleIcon/>,
        link: "/account"
    }
];