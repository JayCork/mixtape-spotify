import React from 'react';
import BotNav from '@material-ui/core/BottomNavigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import {BotNavAction} from '../atom/BotNavAction'
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function LabelBottomNavigation() {
    return (
        <BotNav>
            <BotNavAction label={'Source Code'}
                          value={'git'} href={'https://github.com/JayCork/mixtape-spotify'}
                          icon={<GitHubIcon/>}
            />
            <BotNavAction label={'Sonar cloud'}
                          value={'sonarcloud'} href={'https://sonarcloud.io/dashboard?id=JayCork_mixtape-spotify'}
                          icon={<VisibilityIcon/>}
            />
        </BotNav>
    );
}