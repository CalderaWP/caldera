<?php

namespace calderawp\caldera\PackageName\Tests;

use calderawp\caldera\PackageName\Something;
use PHPUnit\Framework\TestCase;

class SomethingTest extends TestCase
{

	/**
	 * @covers \calderawp\caldera\PackageName\Something::hiRoy()
	 */
	public function testHiRoy()
	{
		//Did it return a string?
		$this->assertIsString((new Something())->hiRoy() );

		//Did it return the right string?
		$this->assertEquals('Hi Roy', (new Something())->hiRoy() );

	}
}
