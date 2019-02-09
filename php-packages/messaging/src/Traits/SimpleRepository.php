<?php


namespace calderawp\caldera\Messaging\Traits;


trait SimpleRepository
{

	/**
	 * Allowed properties
	 *
	 * override this in class using trait
	 *
	 * @var array
	 */
	//protected $properties;

	/**
	 * Stores values of allowed properties
	 *
	 * @var
	 */
	protected $attributes;

	/** @inheritdoc */
	public function __get($name)
	{
		if ($this->has($name)) {
			return $this->attributes[ $name ];
		}

		return null;
	}

	/** @inheritdoc */

	public function __set($name, $value)
	{
		if ($this->allowed($name)) {
			$this->attributes[ $name ] = $value;
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
		return in_array($name, $this->properties);
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

	/**
	 * Get the allowed properites
	 *
	 * @return array
	 */
	public function getAllowedProperties()
	{
		return $this->properties;
	}

	/**
	 * Convert to array
	 *
	 * @return array
	 */
	public function toArray(): array
	{
		$array = [];
		foreach ($this->properties as $property) {
			$array[ $property ] = $this->get($property);
		}

		return $array;
	}

	public function jsonSerialize()
	{
		return $this->toArray();
	}

}
