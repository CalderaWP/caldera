<?php

namespace calderawp\RestApiAuth\Tests\Unit;

use calderawp\RestApiAuth;
use Brain\Monkey\Functions;
class ExampleTest extends UnitTestCase
{


	public function testTesting()
	{
		//https://brain-wp.github.io/BrainMonkey/docs/functions-when.html
		Functions\when('a_undefined_function')->justReturn('Cool!');

		$this->assertIsString(a_undefined_function());

		Functions\when('give_me_the_first')->returnArg();
		$this->assertEquals('A', give_me_the_first('A', 'B', 'C') );
	}


}
