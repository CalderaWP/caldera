import React, {Fragment} from 'react';
import {postPropTypes} from "./propTypes";
import EmbedContainer from 'react-oembed-container';
import PropTypes from 'prop-types'

/**
 * The main container component for the RemotePost
 *
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const RemotePost = ({
							   post,
							   showFullContent,
							   className
						   }) => {
	return (
		<EmbedContainer
			markup={post.content.rendered}
			className={className}
		>
			<article
				id={`post-${post.id}`}
			>
				<h2>
					{post.title.rendered}
				</h2>
				<Fragment>
					{showFullContent ? (
						<div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
					) : (
						<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
					)}
				</Fragment>
			</article>

		</EmbedContainer>
	);
};

/**
 *
 * @type {{form: shim, formId: (boolean|*), onFormUpdate: (boolean|*), className: shim, showFullContent: shim}}
 */
RemotePost.propTypes = {
	...postPropTypes,
	className: PropTypes.string,
	showFullContent: PropTypes.bool

};

RemotePost.defaultPosts = {
	showFullContent: false
}
