<?php

namespace calderawp\caldera\Db\Tests;

use calderawp\caldera\Db\Something;

class SomethingTest extends TestCase
{

	/**
	 * @covers \calderawp\caldera\Db\Something::hiRoy()
	 */
	public function testHiRoy()
	{
		$this->assertEquals('Hi Roy', (new Something())->hiRoy() );

	}
}
