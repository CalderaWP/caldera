<?php


namespace calderawp\RestApiAuth\Tests\Unit;
use Brain\Monkey;

use calderawp\RestApiAuth\Tests\TestCase;

abstract class UnitTestCase extends TestCase
{
	protected function tearDown()
	{
		Monkey\tearDown();
		parent::tearDown();
	}
}
