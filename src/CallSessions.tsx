import { List, Datagrid, TextField, DateField, ShowButton, Create, SimpleForm, TextInput, Edit, Show, SimpleShowLayout } from 'react-admin';

export const CallList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="callerId" />
            <TextField source="calleeId" />
            <DateField source="startTime" />
            <DateField source="endTime" />
            <TextField source="status" />
            <ShowButton />
        </Datagrid>
    </List>
);

export const CallEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="callerId" />
            <TextInput source="calleeId" />
            <TextInput source="status" />
            <TextInput source="trunkId" />
        </SimpleForm>
    </Edit>
);

export const CallCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="callerId" />
            <TextInput source="calleeId" />
            <TextInput source="status" />
            <TextInput source="trunkId" />
        </SimpleForm>
    </Create>
);

export const CallShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="callerId" />
            <TextField source="calleeId" />
            <DateField source="startTime" />
            <DateField source="endTime" />
            <TextField source="status" />
            <TextField source="trunkId" />
        </SimpleShowLayout>
    </Show>
);
