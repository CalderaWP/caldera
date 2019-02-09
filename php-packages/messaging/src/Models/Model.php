<?php


namespace calderawp\caldera\Messaging\Models;

use calderawp\caldera\Messaging\Traits\SimpleRepository;

/**
 * Class Model
 *
 * Should be using calderaw/interop Model. This is a temporary bridge while migrating in Laravel models
 */
abstract class Model
{

	use SimpleRepository;


	public static function fromArray(array $items ): Model
	{
		$obj = new static();
		foreach ( $obj->getAllowedProperties() as $property ){
			if( isset($items[$property])){
				$obj->$property = $items[$property];
			}
		}
		return $obj;
	}

	/** @inheritdoc */
	public function getAllowedProperties(): array
	{
		$vars = get_object_vars($this);
		unset( $vars['attributes']);
		return array_keys($vars);
	}

	/** @inheritdoc */
	public function __get($name)
	{
		if ($this->has($name)) {
			return $this->$name;
		}

		return null;
	}

	/** @inheritdoc */

	public function __set($name, $value)
	{
		if ($this->allowed($name)) {
			$this->$name = $value;
		}

		return $this;
	}

	/**
	 * Check if has a stored value
	 *
	 * @param string|int $name
	 *
	 * @return bool
	 */
	public function has($name)
	{
		return isset($this->$name);
	}

	/**
	 * Check if is an allowed type of value to store
	 *
	 * @param string|int $name
	 *
	 * @return bool
	 */
	public function allowed($name)
	{
		return in_array($name, $this->getAllowedProperties());
	}

	/**
	 * Get value is possible/allowed
	 *
	 * @param string $name
	 * @param mixed|null $default
	 *
	 * @return mixed
	 */
	public function get($name, $default = null)
	{
		if ($this->has($name)) {
			return $this->$name;
		}

		return $default;
	}

}
