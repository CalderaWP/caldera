<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Messaging\Entities\EntryData;
use calderawp\caldera\Messaging\Entities\MessageEntryFields;

class EntryDataTest extends UnitTestCase
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

	public function testToFromArray()
	{
		$mockData = $this->entryData();
		$entryData = EntryData::fromArray($mockData);
		$expectedData = $mockData;
		$expectedData['fields'] = array_values( $expectedData['fields']);
		foreach ($expectedData['fields'] as $i => $field ){
			$expectedData['fields'][$i]['entryId'] = $expectedData['fields'][$i]['entry_id'];
			unset($expectedData['fields'][$i]['entry_id']);
			$expectedData['fields'][$i]['fieldId'] = $expectedData['fields'][$i]['field_id'];
			unset($expectedData['fields'][$i]['field_id']);
		}
		$this->assertEquals($expectedData, $entryData->toArray());
	}
}
