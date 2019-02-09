<?php


use calderawp\caldera\Messaging\Models\Layout;
use PHPUnit\Framework\TestCase;

class LayoutTest extends TestCase
{

	public function testSetAccount()
	{
		$layout = new Layout();
		$layout->setAccount(7);
		$this->assertAttributeEquals(7, 'account', $layout );
	}

	public function testSetConfig()
	{
		$layout = new Layout();
		$config = [];
		$layout->setConfig($config);
		$this->assertAttributeEquals($config, 'config', $layout );

	}

	public function testGetId()
	{
		$layout = new Layout();
		$layout->setId(7);
		$this->assertAttributeEquals(7, 'id', $layout );
	}

	public function testGetAccount()
	{
		$layout = new Layout();
		$layout->setAccount(7);
		$this->assertEquals(7, $layout->getAccount());
	}

	public function testGetConfig()
	{
		$layout = new Layout();
		$config = [];

		$layout->setConfig($config);
		$this->assertEquals($config, $layout->getConfig());
	}

	public function testSetId()
	{
		$layout = new Layout();
		$layout->setId(7);
		$this->assertEquals(7, $layout->getId());
	}
}
