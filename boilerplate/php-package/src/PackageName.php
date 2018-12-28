<?php


namespace calderawp\caldera\PackageName;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\interop\Module;
use calderawp\caldera\PackageName\Contracts\PackageNameContract;
class PackageName extends Module implements PackageNameContract
{
	const IDENTIFIER  = 'packageName';
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
