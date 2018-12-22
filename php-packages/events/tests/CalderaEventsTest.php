<?php

namespace calderawp\caldera\Events\Tests;

use calderawp\caldera\Events\CalderaEvents;
use calderawp\caldera\Events\Filters;
use calderawp\CalderaContainers\Service\Container;
use PHPUnit\Framework\TestCase;

class CalderaEventsTest extends TestCase
{

	/**
	 * @covers \calderawp\caldera\Events\CalderaEvents::getHooks()
	 * @covers \calderawp\caldera\Events\CalderaEvents::registerServices()
	 */
	public function testGetHooks()
	{
		$serviceContainer = new Container();
		$module = new CalderaEvents($serviceContainer);
		$this->assertEquals(Filters::class, get_class($module->getHooks()));
	}

	/**
	 * @covers \calderawp\caldera\Events\CalderaEvents::getIdentifier()
	 */
	public function testGetIdentifier()
	{
		$serviceContainer = new Container();
		$module = new CalderaEvents($serviceContainer);
		$this->assertEquals('events', $module->getIdentifier());
	}
}
