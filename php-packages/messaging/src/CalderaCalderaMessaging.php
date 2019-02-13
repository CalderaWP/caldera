<?php


namespace calderawp\caldera\Messaging;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\interop\Module;
use calderawp\caldera\Messaging\Contracts\CalderaMessagingContract;
use calderawp\caldera\Messaging\Contracts\ModelTransformerContract;
class CalderaCalderaMessaging extends Module implements CalderaMessagingContract
{
	const IDENTIFIER  = 'Messaging';
	/**
	 * @inheritDoc
	 */
	public function getIdentifier(): string
	{
		return self::IDENTIFIER;
	}

	public function registerServices(ServiceContainer $container): CalderaModule
	{
		return $this;
	}

}
