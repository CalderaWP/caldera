<?php

namespace calderawp\caldera\Tests\Integration;

use calderawp\caldera\Forms\FieldModel;
use calderawp\caldera\Forms\FieldsCollection;
use calderawp\caldera\Forms\FormModel;
use calderawp\interop\Tests\Mocks\MockRequest;
use PHPUnit\Framework\TestCase;

class FormModelTest extends TestCase
{

	/**
	 * @covers \calderawp\interop\Model::toArray();
	 */
	public function testToArray()
	{

		$fields = new FieldsCollection();
		$fieldId = 'fl1';
		$fieldSlug = 'sluggo';
		$field = FieldModel::fromArray([
			'id' => $fieldId,
			'slug' => $fieldSlug,
		]);
		$fields->addField($field);
		$id = 'cf1';
		$name = 'Contact Forms';
		$model = FormModel::fromArray([
			'id' => $id,
			'name' => $name,
			'fields' => $fields,
		]);
		$array = $model->toArray();
		$this->assertEquals($id, $array[ 'id' ]);
		$this->assertEquals($name, $array[ 'name' ]);
		$this->assertEquals($fields->toArray(), $array[ 'fields' ]);
	}

	public function testToArrayWithArrayOfField()
	{
		$fieldId = 'fl1';
		$fieldSlug = 'sluggo';
		$field = FieldModel::fromArray([
			'id' => $fieldId,
			'slug' => $fieldSlug,
		]);
		$id = 'cf1';
		$model = FormModel::fromArray([
			'fields' => [$field->toArray()],
		]);

		$this->assertEquals(FieldsCollection::class, get_class($model->getFields()));
		$fields = $model->getFields()->toArray();
		$this->assertCount(1, $fields);
	}

	public function testFromRequest()
	{
		$request = new MockRequest();
		$formId = 'x1';
		$formName = 'Contact Form';
		$request->setParam('id', $formId);
		$request->setParam('name', $formName);
		$form = FormModel::fromRequest($request);
		$this->assertEquals($formId, $form->getId());
		$this->assertEquals($formName, $form->getName());


	}

	public function testFromRequestWithFields()
	{
		$request = new MockRequest();
		$formId = 'x1';
		$formName = 'Contact Form';
		$fieldId = 'fld1';
		$fieldValue = 'fs';
		$field = [
			'id' => $fieldId,
			'value' => $fieldValue,
		];
		$fields = [$field];

		$request->setParam('id', $formId);
		$request->setParam('name', $formName);
		$request->setParam('fields', $fields);
		$form = FormModel::fromRequest($request);

		$this->assertEquals($formId, $form->getId());
		$this->assertEquals($formName, $form->getName());
		$this->assertCount(1,$form->getFields()->toArray() );


	}

	public function testToResponse()
	{

		$formId = 'x1';
		$formName = 'Contact Form';
		$fieldId = 'fld1';
		$fieldValue = 'fs';
		$field = [
			'id' => $fieldId,
			'value' => $fieldValue,
		];

		$fields = [$field];

		$form = FormModel::fromArray([
			'id' => $formId,
			'name' => $formName,
			'fields' => $fields
		]);
		$response = $form->toResponse();
		$this->assertEquals($formId, $response->getData()['id']);
		$this->assertEquals($formName, $response->getData()['name']);

		$this->assertArrayHasKey($fieldId, $response->getData()['fields']);
		$this->assertEquals($fieldValue, $response->getData()['fields'][$fieldId]['value']);
	}
}
