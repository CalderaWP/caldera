<?php


namespace calderawp\caldera\Events;

use calderawp\interop\Contracts\CalderaModule;
use calderawp\caldera\Events\Contracts\CalderaEventsContract;
use calderawp\interop\Contracts\WordPress\ApplysFilters;
use calderawp\interop\Module;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;

class CalderaEvents extends Module implements CalderaEventsContract
{

	const IDENTIFIER = 'events';
	/** @inheritdoc */
	public function getIdentifier(): string
	{
		return self::IDENTIFIER;
	}

	/** @inheritdoc */
	public function getHooks() : Filters
	{
		return $this->getServiceContainer()
			->make(ApplysFilters::class);
	}

	/** @inheritdoc */
	public function registerServices(ServiceContainer$container): CalderaModule
	{
		$container
			->singleton(ApplysFilters::class, function () {
				return new Filters();
			});

		return $this;
	}
}
