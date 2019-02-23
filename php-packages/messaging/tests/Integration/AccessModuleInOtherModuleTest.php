<?php

namespace calderawp\caldera\Messaging\Tests\Integration;

use calderawp\caldera\Core\Tests\Traits\SharedFactories;
use calderawp\caldera\Messaging\CalderaCalderaMessaging;
use calderawp\caldera\Messaging\Models\Rest\MessageController;
use calderawp\caldera\Messaging\Models\Rest\MessageRoute;
use calderawp\caldera\Messaging\Tests\Unit\UnitTestCase;
use calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin;
use calderawp\CalderaContainers\Service\Container;
use calderawp\caldera\DataSource\Contracts\SourceContract;

class AccessModuleInOtherModuleTest extends UnitTestCase
{

	use SharedFactories;
	/**
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessagingModule()
	 */
	public function testGetMessageModuleInAnotherModule()
	{
		$core = $this->core();
		$wordpress = new CalderaWordPressPlugin($core, $this->createContainer());
		$module = $wordpress->getMessagingModule();
		$this->assertInstanceOf( \calderawp\caldera\Messaging\Contracts\CalderaMessagingContract::class, $module );
	}

	/**
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessagingModule()
	 */
	public function testGetMessageRouteFromModuleInAnotherModule()
	{

		$core = $this->core();
		$wordpress = new CalderaWordPressPlugin($core, $this->createContainer());
		$module = $wordpress->getMessagingModule();
		$module->getCore()->getRestApi()->addRoute( new MessageRoute($module->getCore()->getRestApi()));
		$this->assertInstanceOf( \calderawp\caldera\Messaging\Models\Rest\MessageRoute::class, $module->getMessageRoute() );
	}

	/**
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getMessagingModule()
	 */
	public function testRouteHasEndpoints()
	{

		$core = $this->core();
		$wordpress = new CalderaWordPressPlugin($core, $this->createContainer());
		$module = $wordpress->getMessagingModule();
		$module->getCore()->getRestApi()->addRoute( new MessageRoute($module->getCore()->getRestApi()));
		$route = $module->getMessageRoute();
		$this->assertIsArray($route->getEndpoints());
	}

	/**
	 * @return Container
	 */
	private function createContainer(): Container
	{
		$container = new \calderawp\CalderaContainers\Service\Container();
		$container->bind(CalderaCalderaMessaging::MESSAGE_DATA_SOURCE_IDENTIFIER, function () {
			return \Mockery::mock('Source', SourceContract::class);
		});
		return $container;
	}
}
