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

	/**
	 * @covers \calderawp\caldera\RegisterBlock\RegisterBlocks::blockFullName()
	 * @covers \calderawp\caldera\RegisterBlock\RegisterBlocks::registerBlock()
	 */
	public function testRegisterBlock()
	{

		$registerBlocks = new RegisterBlocks('namespace' );
		$this->assertTrue( $registerBlocks->registerBlock('slug', ['editor' => 'handle']) );
		$this->assertAttributeEquals([
			'namespace/slug'
		],'blocks', '');
	}
}
