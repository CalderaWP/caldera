<?php


use calderawp\caldera\Messaging\Tests\MockModel;
use PHPUnit\Framework\TestCase;

class MockModelTest extends TestCase
{


	public function testSet()
	{
		$model = new MockModel();
		$this->assertFalse($model->has('foo'));
		$model->foo = 1;
		$this->assertTrue($model->has('foo'));
		$this->assertAttributeEquals(1, 'foo', $model );

	}
	public function testToArray()
	{
		$model = new MockModel();
		$model->foo = 1;
		$model->bar = 'hat';
		$array = $model->toArray();
		$this->assertSame(['foo' => 1, 'bar' => 'hat'], $array );
	}

	public function testFromArray(){
		$array = ['foo' => 1, 'bar' => 'hat'];
		$model = MockModel::fromArray(['foo' => 1, 'bar' => 'hat']);
		$this->assertSame($array, $model->toArray());
	}

	public function testGetAllowedProperties()
	{
		$model = new MockModel();
		$this->assertCount(2, $model->getAllowedProperties() );
	}
}
