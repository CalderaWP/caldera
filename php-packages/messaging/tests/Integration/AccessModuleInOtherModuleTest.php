<?php

namespace calderawp\caldera\Messaging\Tests\Integration;

use calderawp\caldera\Core\Tests\Traits\SharedFactories;
use calderawp\caldera\Messaging\CalderaCalderaMessaging;
use calderawp\caldera\Messaging\Tests\Unit\UnitTestCase;
use calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin;
use calderawp\CalderaContainers\Service\Container;

class AccessModuleInOtherModuleTest extends UnitTestCase
{

	use SharedFactories;
	/**
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessagingModule()
	 */
	public function testGetMessageModuleInAnotherModule()
	{

		$core = $this->core();
		$wordpress = new CalderaWordPressPlugin($core, new Container());
		$module = $wordpress->getMessagingModule();
		$this->assertInstanceOf( \calderawp\caldera\Messaging\Contracts\CalderaMessagingContract::class, $module );
	}

	/**
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessagingModule()
	 */
	public function testGetMessageRouteFromModuleInAnotherModule()
	{

		$core = $this->core();
		$wordpress = new CalderaWordPressPlugin($core, new Container());
		$module = $wordpress->getMessagingModule();
		$this->assertInstanceOf( \calderawp\caldera\Messaging\Models\Rest\MessageRoute::class, $module->getMessageRoute() );
	}

	/**
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessagingModule()
	 */
	public function testRouteHasEndpoints()
	{

		$core = $this->core();
		$wordpress = new CalderaWordPressPlugin($core, new Container());
		$module = $wordpress->getMessagingModule();
		$route = $module->getMessageRoute();
		$this->assertCount(8, $route->getEndpoints());
	}
}
