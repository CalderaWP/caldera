<?php


namespace calderawp\caldera\WordPressPlugin;

use calderawp\interop\Contracts\CalderaModule;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Module;
use calderawp\caldera\WordPressPlugin\Contracts\CalderaWordPressPluginContract;
use calderawp\caldera\restApi\Contracts\CalderaRestApiContract;

class CalderaWordPressPlugin extends Module implements CalderaWordPressPluginContract
{
	/**
	 * @var string
	 */
	const IDENTIFIER  = 'calderaWordPressPlugin';
	/** @inheritdoc */
	public function getIdentifier(): string
	{
		return self::IDENTIFIER;
	}
	/** @inheritdoc */
	public function registerServices(ServiceContainer $container): CalderaModule
	{
		return $this;
	}

	/**
	 * @return  CalderaRestApiContract
	 */
	public function getRestApiModule(): CalderaRestApiContract
	{
		return $this
			->getCore()
			->getRestApi();
	}
}
