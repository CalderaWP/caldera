import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import Document from  './Document';

const proxy = require('http-proxy-middleware')
let assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

const appPage = async (req, res) => {

	//@TODO - the WordPress plugin has code to add a custom field with the handles to append, use that if set
	//else, admin page, use this?
	let wpCss = 'http://localhost:3000/wp-admin/load-styles.php?c=1&dir=ltr&load%5B%5D=dashicons,admin-bar,buttons,media-views,editor-buttons,wp-components,wp-nux,wp-editor,wp-block-library,wp-block-library-theme,wp&load%5B%5D=-edit-blocks,wp-edit-post,wp-format-library,common,forms,admin-menu,dashboard,list-tables,edit,revisions,media,themes,about,nav-&load%5B%5D=menus,wp-pointer,widgets,site-icon,l10n,wp-auth-check&ver=5.0.3';
	assets.wp = assets.wp || {};
	assets.wp.css = wpCss;
	try {
		const html = await render({
			document: Document,
			req,
			res,
			routes,
			assets,
			forms: {

			},
			customThing: 'thing',
		});
		res.send(html);
	} catch (error) {
		res.json(error);
	}
};

Object.values(routes).forEach(route =>{
	const {
		path
	} = route;
	server
		.disable('x-powered-by')
		.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
		.get(path, appPage);
});


server.use('/wp-json', proxy({
	target: 'https://caldera.lndo.site',
	changeOrigin: true,
	secure: false
}));

server.use('/wp-admin/load-styles.php', proxy({
	target: 'https://caldera.lndo.site',
	changeOrigin: true,
	secure: false
}));

server.use('/caldera-api/v2', proxy({
	target: 'http://localhost:5000',
	changeOrigin: true,
	secure: false
}));

export default server;
