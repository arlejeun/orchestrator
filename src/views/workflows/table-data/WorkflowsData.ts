export default [
  {
    id: "Notify-Slack-News-Channel",
    name: "Notify Slack News channel",
    ownerName: "alejeune",
    inactive: false,
    latestDeployment: {
      id: "d_v7skbK6J",
      updatedAt: "2023-03-13T17:16:39Z",
      cells: [
        {
          id: "c_elf38DVj",
          type: "CodeCell",
          lang: "nodejs14.x",
          action: null,
          component: true,
          namespace: "send_message_public_channel",
          savedComponent: {
            id: "sc_ZrixpqD",
            apps: [
              {
                appId: "app_OkrhR1",
                __typename: "AppSavedComponent",
              },
            ],
            __typename: "SavedComponent",
          },
          source: null,
          sourceParams: "{}",
          __typename: "Cell",
        },
      ],
      __typename: "Deployment",
    },
    steps:[
      {app: 'webhook', imageUrl:'/assets/images/apps/aws_lambda_logo.png', name: 'Test Request'},
      {app: 'slack', imageUrl:'/assets/images/apps/adobe.jpg', name: 'Test Request'},
      {app: 'slack', imageUrl:'/assets/images/apps/genesys.png', name: 'Test Request'},
    ]
  },
  {
    id: "inside-sales-manager-gm-financials",
    name: "Inside Sales Manager GM Financials",
    ownerName: "alejeune",
    inactive: false,
    latestDeployment: {
      id: "d_v7skbK6J",
      updatedAt: "2023-03-13T17:16:39Z",
      cells: [
        {
          id: "c_elf38DVj",
          type: "CodeCell",
          lang: "nodejs14.x",
          action: null,
          component: true,
          namespace: "send_message_public_channel",
          savedComponent: {
            id: "sc_ZrixpqD",
            apps: [
              {
                appId: "app_OkrhR1",
                __typename: "AppSavedComponent",
              },
            ],
            __typename: "SavedComponent",
          },
          source: null,
          sourceParams: "{}",
          __typename: "Cell",
        },
      ],
      __typename: "Deployment",
    },
    steps:[
      {app: 'webhook', imageUrl:'/assets/images/apps/genesys.png', name: 'Test Request'},
      {app: 'slack', imageUrl:'/assets/images/apps/sfdc_logo.png', name: 'Test Request'},
    ]
  },
  
];
