<?php


namespace calderawp\caldera\WordPressPlugin\Tests;
use calderawp\caldera\Core\Tests\Traits\SharedFactories;
use PHPUnit\Framework\TestCase as _TestCase;

abstract class TestCase extends \Mockery\Adapter\Phpunit\MockeryTestCase
{

	use SharedFactories;
}
