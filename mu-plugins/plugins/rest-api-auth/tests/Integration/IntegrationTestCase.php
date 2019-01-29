<?php


namespace calderawp\RestApiAuth\Tests\Integration;

use calderawp\caldera\Core\CalderaCore;
use calderawp\RestApiAuth\CalderaRestApiAuth;
use calderawp\RestApiAuth\Tests\TestCase;

abstract class IntegrationTestCase extends TestCase
{

	/**
	 * Get the module
	 *
	 * @return CalderaRestApiAuth
	 */
	protected function getModule() : CalderaRestApiAuth
	{
		return new CalderaRestApiAuth($this->getCore(), $this->getServiceContainer());
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
