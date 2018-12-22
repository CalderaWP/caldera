<?php


namespace calderawp\caldera\Events;

use calderawp\interop\Contracts\CalderaModule;
use calderawp\interop\Contracts\WordPress\ApplysFilters;
use calderawp\interop\Module;

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
	public function registerServices(): CalderaModule
	{
		$this->getServiceContainer()
			->singleton(ApplysFilters::class, function () {
				return new Filters();
			});

		return $this;
	}
}
