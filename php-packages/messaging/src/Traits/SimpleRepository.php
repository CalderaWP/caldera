<?php


namespace calderawp\caldera\Messaging\Traits;


use calderawp\DB\Time;

trait SimpleRepository
{

	/**
	 * Stores values of allowed properties
	 *
	 * @var
	 */
	protected $attributes;

	/** @inheritdoc */
	public function __get($name)
	{
		return $this->get($name,null);
	}

	/** @inheritdoc */

	public function __set($name, $value)
	{
		return $this->set($name,$value);
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
		return isset($this->attributes[ $name ]);
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
			return $this->attributes[ $name ];
		}

		return $default;
	}

	public function set(string $name, $value )
	{
		if ($this->allowed($name)) {
			$this->attributes[ $name ] = $value;
		}
		return$this;

	}

	/**
	 * Get the allowed properites
	 *
	 * @return array
	 */
	abstract public function getAllowedProperties() : array;

	/**
	 * Convert to array
	 *
	 * @return array
	 */
	public function toArray(): array
	{
		$array = [];
		foreach ($this->getAllowedProperties() as $property) {
			$value = $this->get($property);
			if( is_object( $value ) && method_exists( $value, 'toArray')){
				$value = $value->toArray();
			}
			if( in_array($property, ['createdAt', 'updatedAt']) && is_object($value) ){
				$value = $value->format( Time::FORMAT );
			}
			$array[ $property ] = $value;
		}

		return $array;
	}

	public function jsonSerialize()
	{
		return $this->toArray();
	}

}
