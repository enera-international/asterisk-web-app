import React from 'react';
import { List, Datagrid, TextField, EmailField, Create, required, SimpleForm, TextInput, Show, SimpleShowLayout, Edit } from 'react-admin';

export const UserList: React.FC = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);


export const UserCreate: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="username" validate={required()} />
            <TextInput source="email" validate={required()} />
        </SimpleForm>
    </Create>
);

export const UserShow: React.FC = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </SimpleShowLayout>
    </Show>
);

export const UserEdit: React.FC = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="username" validate={required()} />
            <TextInput source="email" validate={required()} />
        </SimpleForm>
    </Edit>
);
