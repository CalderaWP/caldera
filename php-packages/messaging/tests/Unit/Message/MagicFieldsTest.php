<?php

namespace calderawp\caldera\Messaging\Tests\Unit\Message;

use calderawp\caldera\Messaging\Message\MagicFields;
use calderawp\caldera\Messaging\Models\Message;
use calderawp\caldera\Messaging\Tests\Unit\UnitTestCase;

class MagicFieldsTest extends UnitTestCase
{

	public function testExplodeFieldMagic()
	{
		$content = 'Hi %name% %space%!';
		$message = \Mockery::mock(Message::class);
		$magic = new MagicFields($message);
		$expected = [
			['%name%','%space%'],
			['name', 'space']
		];
		$this->assertEquals($expected, $magic->explodeFieldMagic($content));
		$this->assertEquals([[],[]], $magic->explodeFieldMagic('s skl;jsd s'));
	}



	public function test__construct()
	{

		$message = \Mockery::mock(Message::class);
		$magic = new MagicFields($message);
		$this->assertAttributeEquals($message,'message', $magic);
	}
}
