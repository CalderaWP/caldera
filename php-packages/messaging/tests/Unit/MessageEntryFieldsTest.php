<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Messaging\Entities\MessageEntryField;
use calderawp\caldera\Messaging\Entities\MessageEntryFields;

class MessageEntryFieldsTest extends UnitTestCase
{

	public function testAddMessageEntryField()
	{
		$collection = new MessageEntryFields();
		$item = \Mockery::mock(MessageEntryField::class);
		$this->assertEquals(0, $collection->count() );
		$collection->addMessageEntryField($item);
		$this->assertEquals(1, $collection->count() );
	}

	public function testToArray()
	{
		$collection = new MessageEntryFields();
		$item = \Mockery::mock(MessageEntryField::class);
		$itemArrayed = [ 'id' => 1 ];
		$item->shouldReceive( 'toArray' )->andReturn($itemArrayed);
		$collection->addMessageEntryField($item);
		$array = $collection->toArray();
		$this->assertEquals($itemArrayed, $array[0]);
	}

	public function testFromArray(){
		$item = \Mockery::mock(MessageEntryField::class);
		$item2 = [ 'value' => '2', 'slug' => 's2' ];
		$items = [
			$item,
			$item2
		];
		$collection = MessageEntryFields::fromArray($items);
		$this->assertEquals(2, $collection->count());
	}
}
