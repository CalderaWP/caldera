<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Core\Tests\Traits\SharedFactories;
use calderawp\caldera\Messaging\CalderaCalderaMessaging;
use calderawp\caldera\core\CalderaCore;
use calderawp\caldera\Messaging\Models\Rest\MessageRoute;
use calderawp\CalderaContainers\Container;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Contracts\CalderaModule;
use calderawp\caldera\Core\CalderaCoreContract;
class CalderaCalderaMessagingTest extends UnitTestCase
{

	use SharedFactories;
	public function testGetIdentifier()
	{
		$container = \Mockery::mock(ServiceContainer::class );
		$core = $this->core();
		$module = new CalderaCalderaMessaging($core,$container  );
		$this->assertEquals(CalderaCalderaMessaging::IDENTIFIER, $module->getIdentifier() );

	}

	public function testRegisterServices()
	{
		$container = \Mockery::mock(ServiceContainer::class );
		$core = $this->core();
		$module = new CalderaCalderaMessaging($core,$container );
		$this->assertIsObject($core->getRestApi()->getRoute(MessageRoute::class));
		$this->assertEquals($module,$core->getModule(CalderaCalderaMessaging::IDENTIFIER));
	}

	public function testGetRouter(){
		$container = \Mockery::mock(ServiceContainer::class );
		$core = $this->core();
		$module = new CalderaCalderaMessaging($core,$container );
		$this->assertIsObject($module->getMessageRoute());
	}
}
