import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



export function MxBottomNavigation(props: { label: string; value: string; icon: any; href: string; }) {
    const {label, value, icon, href} = props;

    return (
            <BottomNavigationAction
                label={label}
                value={value}
                icon={icon}
             href={href}/>
    );
}