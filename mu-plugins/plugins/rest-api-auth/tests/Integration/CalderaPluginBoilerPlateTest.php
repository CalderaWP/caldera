<?php

namespace calderawp\RestApiAuth\Tests\Integration;

class RestApiAuthTest extends IntegrationTestCase
{

	/**
	 * @covers \calderawp\RestApiAuth\CalderaRestApiAuth::getIdentifier()
	 */
	public function testGetIdentifier()
	{
		$this->assertIsString($this->getModule()->getIdentifier());
	}

	/**
	 * @covers \calderawp\RestApiAuth\CalderaRestApiAuth::registerServices()
	 */
	public function testRegisterServices()
	{
		$this->assertIsString($this->getModule()->getIdentifier());
	}
}
