<?php


use calderawp\caldera\Messaging\Message\MagicFields;

class MagicFieldsTest extends \calderawp\caldera\Messaging\Tests\Unit\UnitTestCase
{

	public function testParse()
	{
		$mockData = $this->entryData();
		$entryData = \calderawp\caldera\Messaging\Entities\EntryData::fromArray($mockData);
		$message = Mockery::mock(\calderawp\caldera\Messaging\Models\Message::class);
		$message->shouldReceive( 'getEntryData')->andReturn($entryData);
		$content = 'Hello %first_name%';
		$magic = new MagicFields($message);
		$this->assertEquals( 'Hello Josh', $magic->parse($content));
		$content = 'Hello %first_name% %last_name%';
		$this->assertEquals( 'Hello Josh Pollock', $magic->parse($content));
		$content = 'Hello %first_name% %first_name%';
		$this->assertEquals( 'Hello Josh Josh', $magic->parse($content));

	}


}
