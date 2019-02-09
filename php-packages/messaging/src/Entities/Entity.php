<?php


namespace calderawp\caldera\Messaging\Entities;

use calderawp\interop\Contracts\Arrayable;

abstract class Entity implements Arrayable
{
	/** @inheritdoc */
	public function toArray() :array
	{
		$vars = get_object_vars(  $this );
		$array = [];
		foreach( $vars as $property => $value ){
			$array[ $property ] = $value;
		}

		return $array;

	}
}
