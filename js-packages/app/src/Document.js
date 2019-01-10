import React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';

class Document extends React.Component {
	static async getInitialProps({ assets, data, renderPage }) {
		const page = await renderPage();
		return { assets, data, ...page };
	}

	componentDidMount(){

	}

	render() {
		const { helmet, assets, data } = this.props;
		// get attributes from React Helmet
		const htmlAttrs = helmet.htmlAttributes.toComponent();
		const bodyAttrs = helmet.bodyAttributes.toComponent();

		return (
			<html {...htmlAttrs}>
			<head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta charSet="utf-8" />
				<title>Caldera</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="http://localhost:3000/wp-admin/load-styles.php?c=1&dir=ltr&load%5B%5D=dashicons,admin-bar,buttons,media-views,editor-buttons,wp-components,wp-nux,wp-editor,wp-block-library,wp-block-library-theme,wp&load%5B%5D=-edit-blocks,wp-edit-post,wp-format-library,common,forms,admin-menu,dashboard,list-tables,edit,revisions,media,themes,about,nav-&load%5B%5D=menus,wp-pointer,widgets,site-icon,l10n,wp-auth-check&ver=5.0.3"></link>
				{helmet.title.toComponent()}
				{helmet.meta.toComponent()}
				{helmet.link.toComponent()}

				{assets.client.css && (
					<link rel="stylesheet" href={assets.client.css} />
				)}
			</head>
			<body {...bodyAttrs}>
			<AfterRoot />
			<AfterData data={data} />
			<script
				type="text/javascript"
				src={assets.client.js}
				defer
				crossOrigin="anonymous"
			/>
			</body>
			</html>
		);
	}
}

export default Document;
