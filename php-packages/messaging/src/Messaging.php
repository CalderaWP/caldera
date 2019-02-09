<?php


namespace calderawp\caldera\Messaging;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\interop\Module;
use calderawp\caldera\Messaging\Contracts\MessagingContract;
class Messaging extends Module implements MessagingContract
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
