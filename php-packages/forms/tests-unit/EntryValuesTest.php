<?php

namespace calderawp\caldera\Forms\Tests;

use calderawp\caldera\Forms\Entry\EntryValue;
use calderawp\caldera\Forms\Entry\EntryValues;

class EntryValuesTest extends TestCase
{


	/**
	 * @covers \calderawp\caldera\Forms\Entry\EntryValues::addValue()
	 * @covers \calderawp\caldera\Forms\Entry\EntryValues::removeValue()
	 */
	public function testAddAndRemoveValue()
	{
		$form = $this->form();
		$fieldId1 = 'f1';
		$fieldId2 = 'f12';
		$entryId1 = 11 + rand(2, 8);
		$entryId2 = 22 + rand(10, 20);
		$field = $this->field($fieldId1, [], $form);
		$field2 = $this->field($fieldId2, [], $form);
		$entryValue = (new EntryValue($form, $field))->setId($entryId1);
		$entryValue2 = (new EntryValue($form, $field2))->setId($entryId2);

		$this->assertEquals($entryId1, $entryValue->getId());
		$this->assertEquals($entryId2, $entryValue2->getId());


		$values = new EntryValues();
		$values->addValue($entryValue);
		$values->addValue($entryValue2);
		$values->removeValue($entryId2);
		$this->assertTrue($values->hasValue($entryId1));
		$this->assertFalse($values->hasValue($entryId2));
	}

	/**
	 * @covers \calderawp\caldera\Forms\Entry\EntryValues::addValue()
	 * @covers \calderawp\caldera\Forms\Entry\EntryValues::getValues()
	 */
	public function testGetValues()
	{
		$form = $this->form();
		$fieldId1 = 'f1';
		$fieldId2 = 'f12';
		$entryId1 = 11 + rand(2, 8);
		$entryId2 = 22 + rand(10, 20);
		$field = $this->field($fieldId1, [], $form);
		$field2 = $this->field($fieldId2, [], $form);
		$entryValue = (new EntryValue($form, $field))->setId($entryId1);
		$entryValue2 = (new EntryValue($form, $field2))->setId($entryId2);

		$this->assertEquals($entryId1, $entryValue->getId());
		$this->assertEquals($entryId2, $entryValue2->getId());


		$values = new EntryValues();
		$values->addValue($entryValue);
		$values->addValue($entryValue2);

		$this->assertCount(2, $values->getValues());
	}

	/**
	 * @covers \calderawp\caldera\Forms\Entry\EntryValues::toArray()
	 * @covers \calderawp\caldera\Forms\Entry\EntryValue::toArray()
	 * @covers \calderawp\caldera\Forms\Entry\EntryValue::fromArray()
	 */
	public function testFromArray()
	{
		$formId = 'cf1';
		$form = $this->form($formId);
		$fieldId1 = 'f1';
		$fieldId2 = 'f12';
		$entryId1 = 11 + rand(2, 8);
		$entryId2 = 22 + rand(10, 20);
		$field = $this->field($fieldId1, [], $form);
		$field2 = $this->field($fieldId2, [], $form);
		$entryValue = (new EntryValue($form, $field))->setId($entryId1);
		$entryValue2 = (new EntryValue($form, $field2))->setId($entryId2);

		$this->assertEquals($entryId1, $entryValue->getId());
		$this->assertEquals($entryId2, $entryValue2->getId());


		$values = EntryValues::fromArray([
			$entryValue,
			$entryValue2
		]);
		$this->assertTrue($values->hasValue($entryId1));
		$this->assertTrue($values->hasValue($entryId2));
		$this->assertEquals($entryValue, $values->getValue($entryId1));
		$this->assertEquals($entryValue2, $values->getValue($entryId2));

		$this->assertCount(2, $values->getValues());


		$values = EntryValues::fromArray([
			$entryValue->toArray(),
			$entryValue2->toArray()
		]);
		$this->assertTrue($values->hasValue($entryId1));
		$this->assertTrue($values->hasValue($entryId2));
		$this->assertEquals($entryValue->getId(), $values->getValue($entryId1)->getId());
		$this->assertEquals($entryValue2->getId(), $values->getValue($entryId2)->getId());

		$this->assertCount(2, $values->getValues());
	}


	/**
	 * @covers \calderawp\caldera\Forms\Entry\EntryValues::getIterator();
	 */
	public function testItteration()
	{
		$formId = 'cf1';
		$form = $this->form($formId);
		$fieldId1 = 'f1';
		$fieldId2 = 'f12';
		$entryId1 = 11 + rand(2, 8);
		$entryId2 = 22 + rand(10, 20);
		$field = $this->field($fieldId1, [], $form);
		$field2 = $this->field($fieldId2, [], $form);
		$entryValue = (new EntryValue($form, $field))->setId($entryId1);
		$entryValue2 = (new EntryValue($form, $field2))->setId($entryId2);

		$this->assertEquals($entryId1, $entryValue->getId());
		$this->assertEquals($entryId2, $entryValue2->getId());


		$values = EntryValues::fromArray([
			$entryValue,
			$entryValue2
		]);

		$calls = 0;
		foreach ($values as $value) {
			$this->assertTrue(in_array($value->getId(), [
				$entryId1,
				$entryId2
			]));
			$calls++;
		}
		$this->assertSame(2, $calls);
	}
}
