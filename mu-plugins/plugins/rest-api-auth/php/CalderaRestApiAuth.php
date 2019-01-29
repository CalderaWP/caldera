<?php


namespace calderawp\RestApiAuth;

use calderawp\interop\Contracts\CalderaModule;
use calderawp\RestApiAuth\Contracts\CalderaRestApiAuthContract;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Module;

/**
 * Class RestApiAuth
 *
 *  The RestApiAuth module for use with the Caldera Framework
 */
final class CalderaRestApiAuth extends Module implements CalderaRestApiAuthContract
{
	/**
	 * The string identifier for this module
	 *
	 * @var string
	 */
	const IDENTIFIER  = 'RestApiAuth';
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
