import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';
const proxy = require('http-proxy-middleware')
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
import Document from  './Document';

const appPage = async (req, res) => {
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

server.use('/users', proxy({
	target: 'http://jsonplaceholder.typicode.com',
	changeOrigin: true
}));

server.use('/wp-json', proxy({
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
