//https://github.com/storybooks/storybook/issues/489#issuecomment-297426989
import 'babel-polyfill';
import { addDecorator, configure } from '@storybook/react';
import addons, { mockChannel } from '@storybook/addons';

addons.setChannel(mockChannel());
//https://storybook.js.org/configurations/theming/
import { withOptions } from '@storybook/addon-options';

function loadStories() {
    require('glob-loader!./stories.pattern')
}

addDecorator(
	withOptions({
		name: 'Forms',
	})
);

configure(loadStories, module);
