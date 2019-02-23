<?php

namespace calderawp\caldera\WordPressPlugin\Tests\Unit;

use calderawp\caldera\DataSource\WordPressData\PostTypeFactory;
use calderawp\caldera\Messaging\CalderaCalderaMessaging;
use calderawp\caldera\restApi\CalderaRestApi;
use calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin;
use calderawp\CalderaContainers\Service\Container;
use calderawp\caldera\DataSource\WordPressData\Contracts\PostTypeFactoryContract;
use calderawp\caldera\DataSource\Contracts\SourceContract as Source;

use calderawp\DB\Factory;
use calderawp\DB\Contracts\FactoryContract;
class CalderaWordPressPluginTest extends UnitTestCase
{

	public function testGetIdentifier()
	{
		$module = new CalderaWordPressPlugin($this->core(), new Container());
		$this->assertSame(CalderaWordPressPlugin::IDENTIFIER, $module->getIdentifier());
	}

	/**
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::setWpdb()
	 * @covers \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin::getWpdb()
	 */
	public function testGetSetWpdb()
	{
		$module = new CalderaWordPressPlugin($this->core(), new Container());
		$wpdb = \Mockery::mock('\wpdb');
		$module->setWpdb($wpdb);
		$this->assertSame($wpdb,$module->getWpdb());
	}

	public function testRegisterServices()
	{

		$container = new Container();
		$wpdb = \Mockery::mock('\wpdb');
		$container->bind('\wpdb',$wpdb );
		$module = new CalderaWordPressPlugin($this->core(),$container );
		$this->assertSame($wpdb, $container->make('\wpdb'));
		$module->registerServices($module->getServiceContainer());
		$this->assertInstanceOf(Factory::class,$module->getServiceContainer()->make(Factory::class));
	}

	public function testGetMessageDataSource()
	{
		$container = new Container();
		$wpdb = \Mockery::mock('\wpdb');
		$container->bind('\wpdb',$wpdb );
		$container->bind('\wpdb',$wpdb );
		$module = new CalderaWordPressPlugin($this->core(),$container );
		$this->assertInstanceOf(Source::class,$module->getMessageDataSource());
	}

	public function testGetPostTypeFactory()
	{
		$container = new Container();
		$wpdb = \Mockery::mock('\wpdb');
		$container->bind('\wpdb',$wpdb );
		$module = new CalderaWordPressPlugin($this->core(),$container );
		$this->assertInstanceOf(PostTypeFactoryContract::class,$module->getPostTypeFactory());
	}

	public function testGetMessagingModule()
	{
		$module = new CalderaWordPressPlugin($this->core(), new Container());
		$this->assertInstanceOf(CalderaCalderaMessaging::class, $module->getMessagingModule());
	}

	public function testGetRestApiModule()
	{
		$module = new CalderaWordPressPlugin($this->core(), new Container());
		$this->assertInstanceOf(CalderaRestApi::class, $module->getRestApiModule());
	}
}
