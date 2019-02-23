<?php

namespace calderawp\caldera\Messaging\Tests\Unit\Message;

use calderawp\caldera\Messaging\Message\Attributes;
use calderawp\caldera\Messaging\Tests\TestCase;


class AttributesTest extends TestCase
{

	public function testToWpArgs()
	{
		$attributes = new \calderawp\caldera\Messaging\Message\Attributes();
		$args = $attributes->toRestApiArgs();
		$this->assertCount( count((new Attributes())->toArray()), $args );
		foreach ( $args as $argName =>  $arg ){
			foreach ( [
					  'description',
						'type',

					  ] as $key ){
				$this->assertArrayHasKey( $key, $arg, sprintf( 'No %s key',$key ) );
			}
		}
	}

}
