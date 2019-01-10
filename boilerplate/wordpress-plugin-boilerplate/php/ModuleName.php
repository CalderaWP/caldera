<?php


namespace calderawp\CalderaPluginBoilerPlate;

use calderawp\interop\Contracts\CalderaModule;
use calderawp\CalderaPluginBoilerPlate\Contracts\ModuleNameContract;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Module;

/**
 * Class CalderaPluginBoilerPlate
 *
 *  The CalderaPluginBoilerPlate module for use with the Caldera Framework
 */
final class ModuleName extends Module implements ModuleNameContract
{
	/**
	 * The string identifier for this module
	 *
	 * @var string
	 */
	const IDENTIFIER  = 'CalderaPluginBoilerPlate';
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
}
