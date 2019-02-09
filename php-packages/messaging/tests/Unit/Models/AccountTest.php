<?php


use calderawp\caldera\Messaging\Models\Account;
use PHPUnit\Framework\TestCase;

class AccountTest extends TestCase
{

	public function testGetPrivateKey()
	{
		$account = new Account();
		$this->assertEquals(null, $account->getPrivateKey() );
		$account->setPrivateKey('a-p-k' );
		$this->assertEquals('a-p-k', $account->getPrivateKey() );
	}


	public function testGetPublicKey()
	{
		$account = new Account();
		$this->assertEquals(null, $account->getPublicKey() );
		$account->setPublicKey('a-p1-k' );
		$account->setPrivateKey('private' );
		$this->assertEquals('a-p1-k', $account->getPublicKey() );
	}

	public function testGetToken()
	{
		$account = new Account();
		$this->assertNull($account->getToken());
		$account->setPublicKey('pk')->setPrivateKey('sk' );
		$this->assertIsString($account->getToken());
	}


	public function testGetUses()
	{
		$account = new Account();
		$this->assertEquals(0, $account->getUses());
		$account->setUses(5);
		$this->assertEquals(5, $account->getUses());

	}

	public function testGetMaxUses()
	{
		$account = new Account();
		$this->assertEquals(500, $account->getMaxUses());
		$account->setMaxUses(5);
		$this->assertEquals(5, $account->getMaxUses());
	}

	public function testIsActive()
	{
		$account = new Account();
		$this->assertTrue($account->isActive());
		$account->setActive(false);
		$this->assertFalse($account->isActive());
	}
}
