import { AppBar } from 'react-admin';
import Box from '@mui/material/Box';

import { Logo } from './Logo';

export const MyAppBar = () => (
    <AppBar color="secondary">
        <Box flex="1"/>
            <Logo />
        <Box flex="1" />
    </AppBar>
);