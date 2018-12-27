<?php


namespace calderawp\caldera\Events;

use calderawp\interop\Contracts\CalderaModule;
use calderawp\interop\Contracts\WordPress\ApplysFilters;
use calderawp\interop\Module;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;

class CalderaEvents extends Module
{

	/** @inheritdoc */
	public function getIdentifier(): string
	{
		return 'events';
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
