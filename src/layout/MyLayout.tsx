import { MyAppBar } from './MyAppBar';
import { AppLocationContext } from '@react-admin/ra-navigation';
import { CheckForApplicationUpdate } from 'react-admin';
import { ReactNode } from 'react';
import { Layout } from '@react-admin/ra-enterprise';

export const MyLayout = ({ children }: { children: ReactNode }) => {
    return  <AppLocationContext hasDashboard>
        <Layout appBar={MyAppBar} appBarAlwaysOn >
            {children}
            <CheckForApplicationUpdate />
        </Layout>
    </AppLocationContext>
};