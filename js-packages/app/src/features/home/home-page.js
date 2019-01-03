import React from 'react';
import classNames from 'classnames';
export function HomePage(props) {
	const { children } = props;
	return <div className={classNames('caldera-homepage')}>{children}</div>;
}
