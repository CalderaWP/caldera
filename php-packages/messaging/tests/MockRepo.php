<?php


namespace calderawp\caldera\Messaging\Tests;


use calderawp\caldera\Messaging\Traits\SimpleRepository;

class MockRepo
{
	use SimpleRepository;

	protected $properties = [
		'a1',
		'b2'
	];
}
