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

		$account = 7;
		$layout->setAccount($account);
		$this->assertEquals($account, $layout->getAccount());
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
		$id = 7;

		$layout->setId($id);
		$this->assertEquals($id, $layout->getId());
	}

	public function testToArray()
	{
		$layout = new Layout();
		$id = 7;
		$config = [];
		$account = 1;
		$layout->setId($id)->setConfig($config)->setAccount($account);

		$this->assertEquals($id, $layout->getId());
		$this->assertEquals($config, $layout->getConfig());
		$this->assertEquals($account, $layout->getAccount());


	}

	public function testFromArray()
	{

		$id = 7;
		$config = [];
		$account = 1;
		$layout = Layout::fromArray([
			'id' => $id,
			'config' => $config,
			'account' => $account
		]);

		$this->assertEquals($id, $layout->getId());
		$this->assertEquals($config, $layout->getConfig());
		$this->assertEquals($account, $layout->getAccount());
	}
}
