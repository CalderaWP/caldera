<?php


namespace calderawp\CalderaPluginBoilerPlate\Tests\Integration;

use calderawp\caldera\Core\CalderaCore;
use calderawp\CalderaPluginBoilerPlate\ModuleName;
use calderawp\CalderaPluginBoilerPlate\Tests\TestCase;

abstract class IntegrationTestCase extends TestCase
{

	/**
	 * Get the module
	 *
	 * @return ModuleName
	 */
	protected function getModule() : ModuleName
	{
		return new ModuleName($this->getCore(), $this->getServiceContainer());
	}

	/**
	 * Get an instance of core
	 *
	 * @return CalderaCore
	 */
	protected function getCore() : CalderaCore
	{
		return new CalderaCore($this->getServiceContainer());
	}
}
