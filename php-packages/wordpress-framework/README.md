# Caldera WordPress Framework

This is a meta package that is designed to be the sole [Caldera Framework](https://github.com/CalderaWP/caldera) dependency of a WordPress plugin or site that use the Caldera framework.

This gives us a single place to version all of the required dependencies, and single place to update them. It is my intention to use this package to automate npm/yarn installing the JS packages.
Later, we will make a Slim and/or Laravel package like this that doesn't include the WordPress layers.

When you create a React app with create-react-app, you can update the app config beacuse the generated app has [react-scripts](https://www.npmjs.com/package/react-scripts) as a dependency. This is our react-scripts. Add this as a composer dependency to your plugin, and use the version constraint in your composer.json to update the framework or to prevent the framework from updating. 

## Overview 
This is a composer meta package.

## 👀🌋 This Is A Module Of The [Caldera Framework](https://github.com/CalderaWP/caldera)
* 🌋 Find Caldera Forms Here:
    - [Caldera Forms on Github](http://github.com/calderawp/caldera-forms/)
    - [CalderaForms.com](http://calderaforms.com)
    
* 🌋 [Issues](https://github.com/CalderaWP/caldera/issues) and [pull requests](https://github.com/CalderaWP/caldera/pulls), should be submitted to the [main Caldera repo](https://github.com/CalderaWP/caldera/pulls).


## License, Copyright, etc.
Copyright 2018+ CalderaWP LLC and licensed under the terms of the GNU GPL license. Please share with your neighbor.
