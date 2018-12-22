<?php

namespace calderawp\caldera\Tests\Integration;

use calderawp\caldera\Cli\Something;

class SomethingTest extends TestCase
{

	/**
	 * @covers \calderawp\caldera\PackageName\Something::hiRoy()
	 */
	public function testHiRoy()
	{
		$this->assertEquals('Hi Roy', (new Something())->hiRoy() );

	}
}
