import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



export function BotNavAction(props: { label: string; value: string; icon: any; href: string; }) {
    const {label, value, icon, href} = props;

    return (
            <BottomNavigationAction
                label={label}
                value={value}
                icon={icon}
             href={href}/>
    );
}