import * as React from 'react';
import { Edit, TabbedForm, FormTab, TextInput, required, useNotify, useRedirect, useRefresh } from 'react-admin';

export const PreferencesEdit = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();

    const handleSuccess = () => {
        notify('Preferences saved successfully');
        redirect('/preferences');  // Redirect after success
        refresh();  // Optionally refresh the page
    };

    return (
        <Edit title="Preferences" resource="preferences" id="email-settings" mutationMode="pessimistic" onSuccess={handleSuccess}>
            <TabbedForm>
                <FormTab label="Email Settings">
                    <TextInput source="imap_server" label="IMAP Server" validate={required()} fullWidth />
                    <TextInput source="smtp_server" label="SMTP Server" validate={required()} fullWidth />
                    <TextInput source="smtp_port" label="SMTP Port" validate={required()} fullWidth />
                </FormTab>

                <FormTab label="OAuth2 Settings">
                    <TextInput source="client_id" label="OAuth2 Client ID" validate={required()} fullWidth />
                    <TextInput source="client_secret" label="OAuth2 Client Secret" validate={required()} fullWidth />
                    <TextInput source="redirect_uri" label="OAuth2 Redirect URI" validate={required()} fullWidth />
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};
