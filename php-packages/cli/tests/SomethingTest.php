<?php

namespace calderawp\caldera\Cli\Tests;

use calderawp\caldera\Cli\Something;

class SomethingTest extends TestCase
{

	/**
	 * @covers \calderawp\caldera\Cli\Something::hiRoy()
	 */
	public function testHiRoy()
	{
		$this->assertEquals('Hi Roy', (new Something())->hiRoy());
	}
}
