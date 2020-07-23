import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import {MxBottomNavigation} from '../atom/bottomNavigationAction'
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function LabelBottomNavigation() {
    return (
        <BottomNavigation>
            <MxBottomNavigation label={'Source Code'}
                                value={'git'} href={'https://github.com/JayCork/mixtape-spotify'}
                                icon={<GitHubIcon/>}
            />
            <MxBottomNavigation label={'Sonar cloud'}
                                value={'sonarcloud'} href={'https://sonarcloud.io/dashboard?id=JayCork_mixtape-spotify'}
                                icon={<VisibilityIcon/>}
            />
        </BottomNavigation>
    );
}