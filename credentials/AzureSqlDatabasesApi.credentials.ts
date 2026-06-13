import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlDatabasesApi implements ICredentialType {
        name = 'N8nDevAzureSqlDatabasesApi';

        displayName = 'Azure SQL Databases API';

        icon: Icon = { light: 'file:../nodes/AzureSqlDatabases/azure-sql-databases.png', dark: 'file:../nodes/AzureSqlDatabases/azure-sql-databases.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Databases API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
