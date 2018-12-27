<?php


namespace calderawp\caldera\Tests\Unit;



use calderawp\CalderaContainers\Service\Container;

abstract class TestCase extends \Mockery\Adapter\Phpunit\MockeryTestCase
{
	protected function serviceContainer(): Container
	{
		return new Container();
	}
}
