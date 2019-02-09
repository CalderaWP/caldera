<?php


namespace calderawp\caldera\Messaging\Models;

use calderawp\caldera\Messaging\Traits\SimpleRepository;
use calderawp\DB\Time;

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
				$obj->set($property, $items[$property]);
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

	public function set(string $name, $value)
	{
		if( $this->allowed($name)){
			if( in_array($name, ['createdAt', 'updatedAt']) && is_string($value)){
				$value = Time::dateTimeFromMysql($value);
			}
			$this->$name = $value;
		}
		return $this;
	}


}
