<?php

namespace calderawp\caldera\Messaging\Tests;

use calderawp\caldera\Messaging\Something;
use PHPUnit\Framework\TestCase;

class SomethingTest extends TestCase
{

	/**
	 * @covers \calderawp\caldera\Messaging\Something::hiRoy()
	 */
	public function testHiRoy()
	{
		//Did it return a string?
		$this->assertIsString((new Something())->hiRoy() );

		//Did it return the right string?
		$this->assertEquals('Hi Roy', (new Something())->hiRoy() );

	}
}
