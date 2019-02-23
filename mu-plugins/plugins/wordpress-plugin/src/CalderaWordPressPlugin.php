<?php


namespace calderawp\caldera\WordPressPlugin;

use calderawp\caldera\Messaging\CalderaCalderaMessaging;
use calderawp\CalderaContainers\Service\Container;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Module;
use calderawp\caldera\WordPressPlugin\Contracts\CalderaWordPressPluginContract;
use calderawp\caldera\restApi\Contracts\CalderaRestApiContract;
use calderawp\caldera\Messaging\Contracts\CalderaMessagingContract;

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

	public function getMessagingModule() : CalderaMessagingContract
	{
		try{
			$this->getCore()->getModule( CalderaCalderaMessaging::IDENTIFIER );
		}catch (\Exception $e ){
			$this->core->addModule(new CalderaCalderaMessaging($this->getCore(),new Container() ));

		}
		$module = $this->getCore()->getModule( CalderaCalderaMessaging::IDENTIFIER );

		return $module;
	}
}
