import React  from 'react';
import {TopBar} from './TopBar';
import {PageBody} from './PageBody';

export const StandardPage = ({
						  className,
						  children,
						 pageTitle,
							pageKey,
							 onChangeActive
					  }) => (
	<div className={className} >
		<TopBar
			onChangeActive={onChangeActive}
		/>
		<div>
			<h1>{pageTitle}</h1>
		</div>
		<PageBody pageKey={pageKey}>
			{children}
		</PageBody>
	</div>
);


const noop = () => {};
StandardPage.defualtProps = {
	onChangeActive: noop
};
