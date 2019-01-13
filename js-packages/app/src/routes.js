import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
	{
		path: '/',
		exact: true,
		component: asyncComponent({
			loader: () => import('./Home'), // required
			Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
		}),
	},
	{
		path: '/about',
		exact: true,
		component: asyncComponent({
			loader: () => import('./About'), // required
			Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
		}),
	},
	{
		path: '/login',
		exact: true,
		component: asyncComponent({
			loader: () => import('./Login'), // required
			Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
		}),
	},
	{
		path: '/admin',
		exact: true,
		component: asyncComponent({
			loader: () => import('./Admin'), // required
			Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
		}),
	},
	{
		path: '/:pageSlug',
		exact: true,
		component: asyncComponent({
			loader: () => import('./Page'), // required
			Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
		}),
	},
];

const wpPages = [

]
