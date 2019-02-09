<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Messaging\Entities\Recipient;
use calderawp\caldera\Messaging\Entities\Recipients;

class RecipientsTest extends UnitTestCase
{

	public function testAddEmpty()
	{
		$recipients = new Recipients();
		$this->assertTrue($recipients->empty());
		$recipients->addEmpty();
		$this->assertFalse($recipients->empty());

	}

	public function testEmpty()
	{
		$recipient = \Mockery::mock(Recipient::class );
		$recipient2 = \Mockery::mock(Recipient::class);
		$recipients = new Recipients();
		$this->assertTrue($recipients->empty());

		$recipients->addRecipient($recipient);
		$this->assertFalse($recipients->empty());

		$recipients->addRecipient($recipient2);
		$this->assertFalse($recipients->empty());

	}

	public function testToArray()
	{
		$recipient = \Mockery::mock(Recipient::class );
		$a1 = [];
		$recipient->shouldReceive('toArray')->andReturn($a1);
		$recipient2 = \Mockery::mock(Recipient::class);
		$recipient2->shouldReceive('toArray')->andReturn([]);
		$recipients = new Recipients();
		$recipients->addRecipient($recipient);
		$recipients->addRecipient($recipient2);
		$this->assertFalse($recipients->empty());
		$array = $recipients->toArray();
		$this->assertCount(2, $array );

	}

	public function testAddRecipient()
	{
		$recipient = \Mockery::mock(Recipient::class );
		$recipients = new Recipients();
		$recipients->addRecipient($recipient);
		$this->assertSame(1, $recipients->count() );
		$this->assertAttributeCount(1, 'recipients', $recipients );
	}


}
