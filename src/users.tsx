import { List, Datagrid, TextField, BooleanField, EditButton, DeleteButton, Create, SimpleForm, TextInput, BooleanInput, SelectInput, Edit, Show, SimpleShowLayout } from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="username" />
            <TextField source="phoneNumber" />
            <TextField source="email" />
            <BooleanField source="isActive" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="phoneNumber" />
            <TextInput source="email" />
            <BooleanInput source="isActive" />
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'Admin' },
                { id: 'user', name: 'User' }
            ]} />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="phoneNumber" />
            <TextInput source="email" />
            <BooleanInput source="isActive" defaultValue={true} />
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'Admin' },
                { id: 'user', name: 'User' }
            ]} />
        </SimpleForm>
    </Create>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="username" />
            <TextField source="phoneNumber" />
            <TextField source="email" />
            <BooleanField source="isActive" />
            <TextField source="role" />
        </SimpleShowLayout>
    </Show>
);
