import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import {BotNavAction} from '../atom/BotNavAction'
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function BotNav() {
    return (
        <BottomNavigation component={'div'}>
            <BotNavAction label={'Source Code'}
                          value={'gitHubSrc'} href={'https://github.com/JayCork/mixtape-spotify'}
                          icon={<svg><GitHubIcon component={'span'}/></svg>}
            />
            <BotNavAction label={'SonarCloud'}
                          value={'sonarCloud'} href={'https://sonarcloud.io/dashboard?id=JayCork_mixtape-spotify'}
                          icon={<svg><VisibilityIcon component={'span'}/></svg>}
            />
        </BottomNavigation>
    );
}