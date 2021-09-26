export const Constants = {
    "epic": [
        'Admin',
        'Footer',
        'Header',
        'Feature',
        'User Profile',
        'Login'
    ],
    type: ['Task', 'Bug', 'Story']
}

export const States = {
    0: 'Todo',
    1: 'InProgress',
    2: 'DevComplete',
    3: 'In QA',
    4: 'Done'
}

export const Data = {
    0: [
        {
            id: Math.ceil(Math.random() * 100000),
            title: 'Build header',
            user: 'Luffy',
            epic: 'Header',
            type: 'task'

        },{
            id: Math.ceil(Math.random() * 100000),
            title: 'Build header',
            user: 'Luffy',
            epic: 'Header',
            type: 'task'

        },
        {
            id: Math.ceil(Math.random() * 100000),
            title: 'Build Search component',
            user: 'Zoro',
            epic: 'Header',
            type: 'bug'
        },
        {
            id: Math.ceil(Math.random() * 100000),
            title: 'Build footer',
            user: 'Sanji',
            epic: 'Footer',
            type: 'story'
        }],
    1: [],
    2: [
        {
            id: Math.ceil(Math.random() * 100000),
            title: 'Build Search component',
            user: 'Nami',
            epic: 'Header',
            type: 'bug'
        },
        {
            id: Math.ceil(Math.random() * 100000),
            title: 'Build footer',
            user: 'Robin',
            epic: 'Footer',
            type: 'story'
        }
    ],
    3: [],
    4: [],
}