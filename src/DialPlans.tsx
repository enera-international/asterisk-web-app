import { List, Datagrid, TextField, EditButton, DeleteButton, Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, Edit, Show, SimpleShowLayout } from 'react-admin';

export const DialPlanList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const DialPlanEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ArrayInput source="contexts">
                <SimpleFormIterator>
                    <TextInput source="name" label="Context Name" />
                    <TextInput source="description" label="Description" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const DialPlanCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ArrayInput source="contexts">
                <SimpleFormIterator>
                    <TextInput source="name" label="Context Name" />
                    <TextInput source="description" label="Description" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export const DialPlanShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="description" />
            <ArrayInput source="contexts">
                <SimpleFormIterator>
                    <TextField source="name" label="Context Name" />
                    <TextField source="description" label="Description" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleShowLayout>
    </Show>
);
