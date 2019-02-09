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

	public static function fromArray( array $items ) : Entity
	{
		$obj = new static();
		foreach ( $items as $property => $value ){
			$obj = $obj->__set($property,$value);
		}
		return $obj;
	}

	public function jsonSerialize()
	{
		return $this->toArray();
	}

	public function __get($name)
	{
		$getter = 'get'. ucfirst($name);
		if( method_exists($this, $getter)){
			return call_user_func([$this,$getter]);
		}
		if( property_exists($this,$name)){
			return $this->$name;
		}
	}

	public function __set($name, $value)
	{
		$setter = 'set' . ucfirst($name);
		if( method_exists($this,$setter)){
			return call_user_func([$this, $setter]);
		}
		if( property_exists($this,$name)){
			$this->$name = $value;
			return $this;
		}
	}
}
