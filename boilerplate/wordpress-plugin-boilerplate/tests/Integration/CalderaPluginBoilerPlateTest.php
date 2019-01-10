<?php

namespace calderawp\CalderaPluginBoilerPlate\Tests\Integration;

class CalderaPluginBoilerPlateTest extends IntegrationTestCase
{

	/**
	 * @covers \calderawp\CalderaPluginBoilerPlate\ModuleName::getIdentifier()
	 */
	public function testGetIdentifier()
	{
		$this->assertIsString($this->getModule()->getIdentifier());
	}

	/**
	 * @covers \calderawp\CalderaPluginBoilerPlate\ModuleName::registerServices()
	 */
	public function testRegisterServices()
	{
		$this->assertIsString($this->getModule()->getIdentifier());
	}
}
