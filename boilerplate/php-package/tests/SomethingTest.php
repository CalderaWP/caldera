<?php

namespace calderawp\caldera\PackageName\Tests;

use calderawp\caldera\PackageName\Something;

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
