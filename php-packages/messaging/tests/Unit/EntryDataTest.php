<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Messaging\Entities\EntryData;
use calderawp\caldera\Messaging\Entities\MessageEntryFields;
use PHPUnit\Framework\TestCase;

class EntryDataTest extends TestCase
{

	public function testGetFields()
	{
		$fields= \Mockery::mock(MessageEntryFields::class );
		$entryData = new EntryData();
		$entryData->setFields($fields);
		$this->assertEquals($fields, $entryData->getFields() );

	}

	public function testSetFields()
	{
		$fields= \Mockery::mock(MessageEntryFields::class );
		$entryData = new EntryData();
		$entryData->setFields($fields);
		$this->assertAttributeEquals($fields, 'fields', $entryData );
	}
}
