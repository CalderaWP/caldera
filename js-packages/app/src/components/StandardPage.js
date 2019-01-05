import React  from 'react';
import {TopBar} from './TopBar';
import {PageBody} from './PageBody';

export const StandardPage = ({
						  className,
						  children,
								 pageTitle
					  }) => (
	<div className={className} >
		<TopBar/>
		<div>
			<h1>{pageTitle}</h1>
		</div>
		<PageBody pageKey={'home'}>
			{children}
		</PageBody>
	</div>
)
