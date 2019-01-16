<?php

namespace calderawp\caldera\RegisterBlock\Tests;

use calderawp\caldera\RegisterBlock\RegisterBlocks;


class RegisterBlocksTest extends TestCase
{



	public function testPrintStyles()
	{
		$registerBlocks = new RegisterBlocks('17seconds' );

		$blockContent = 'block content';
		ob_start();
		$registerBlocks->whenPrintBlocks($blockContent, ['style' => 'handle'] );
		$output = ob_get_clean();
		$this->assertNotEmpty($output);
		$this->assertNotEquals($output,$blockContent );

	}

	public function test__construct()
	{
		$registerBlocks = new RegisterBlocks('17seconds' );
		$this->assertAttributeEquals('17seconds', 'namespace', $registerBlocks );
	}

	public function testRegisterBlock()
	{

		$registerBlocks = new RegisterBlocks('17seconds' );
		$this->assertTrue( $registerBlocks->registerBlock('a-block', ['editor' => 'handle']) );

	}
}
