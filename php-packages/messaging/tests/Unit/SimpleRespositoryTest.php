<?php

namespace calderawp\caldera\Messaging\Tests\Unit;

use calderawp\caldera\Messaging\Entities\EmailStats\Metric;
use calderawp\caldera\Messaging\Tests\MockRepo;

class SimpleRespositoryTest extends UnitTestCase
{

	public function test__get()
	{
		$repo = new MockRepo();
		$repo->a1 = '111';
		$this->assertSame('111', $repo->a1 );
		$this->assertSame(null, $repo->a2 );
	}

	public function testHas()
	{
		$repo = new MockRepo();
		$repo->a1 = '111';
		$this->assertTrue($repo->has('a1'));
		$this->assertFalse($repo->has('b2'));//valid key no value
		$this->assertFalse($repo->has('a2'));//invalid key
	}

	public function testGet()
	{
		$repo = new MockRepo();
		$repo->a1 = '111';
		$this->assertSame('111', $repo->get('a1'));
		$this->assertSame('111', $repo->get('a1', 'default'));
		$this->assertSame('default', $repo->get( 'b2', 'default'));
		$this->assertSame('default', $repo->get( 'random', 'default'));
		$this->assertSame(null, $repo->get( 'random'));
	}

	public function test__set()
	{
		$repo = new MockRepo();
		$repo->a1 = '111';
		$this->assertAttributeEquals(['a1' => '111'], 'attributes', $repo );
	}

	public function testGetAllowedProperties()
	{
		$repo = new MockRepo();
		$this->assertSame(['a1', 'b2'],$repo->getAllowedProperties());
	}

	public function testAllowed()
	{
		$repo = new MockRepo();
		$this->assertTrue($repo->allowed('a1'));
		$this->assertTrue($repo->allowed('b2'));
		$this->assertFalse($repo->allowed('a2'));
	}
}
