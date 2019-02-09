<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Messaging\Entities\Recipient;
use PHPUnit\Framework\TestCase;

class RecipientTest extends UnitTestCase
{

	public function test__construct()
	{

		$email = 'email@name.com';
		$name = 'name';
		$recipient = new Recipient($email,$name);
		$this->assertAttributeEquals($email,'email', $recipient);
		$this->assertAttributeEquals($name,'name', $recipient);

	}

	public function testToArray()
	{
		$email = 'email@name.com';
		$name = 'name';
		$recipient = new Recipient($email,$name);
		$this->assertArrayHasKey('email', $recipient->toArray() );
		$this->assertArrayHasKey('name', $recipient->toArray() );

		$recipient = new Recipient($email);
		$this->assertArrayHasKey('name', $recipient->toArray() );
		$this->assertSame('', $recipient->toArray()['name'] );

	}

	public function testEmpty()
	{
		$recipient = new Recipient('');
		$this->assertTrue($recipient->empty());
		$recipient = new Recipient('name@name.com');
		$this->assertFalse($recipient->empty() );

	}

	public function testGetName()
	{
		$email = 'email@name.com';
		$name = 'name';
		$recipient = new Recipient($email,$name);
		$this->assertSame($name,$recipient->getName());
	}

	public function testFromArray()
	{
		$email = 'email@name.com';
		$name = 'name';
		$recipient = Recipient::fromArray([
			'email' => $email,
			'name' => $name
		]);
		$this->assertAttributeEquals($email,'email', $recipient);
		$this->assertAttributeEquals($name,'name', $recipient);

	}

	public function testGetEmail()
	{
		$email = 'email@name.com';
		$name = 'name';
		$recipient = new Recipient($email,$name);
		$this->assertSame($email,$recipient->getEmail());
	}

	public function testSetEmail()
	{
		$email = 'email@name.com';
		$name = 'name';
		$recipient = new Recipient($email,$name);
		$email2 = 'e2@e.com';
		$recipient->setEmail($email2);
		$this->assertSame($email2,$recipient->getEmail());
	}

	public function testSetName()
	{
		$email = 'email@name.com';
		$name = 'name';
		$recipient = new Recipient($email,$name);
		$name2 = 'name2';
		$recipient->setName($name2);
		$this->assertSame($name2,$recipient->getName());
	}
}
