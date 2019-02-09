<?php


namespace calderawp\caldera\Messaging\Entities;
use calderawp\caldera\Messaging\Entities\Contracts\RecipientContract;

class Recipient extends Entity implements RecipientContract
{
	/** @var string  */
	protected $email;

	/** @var string  */
	protected $name;


	/**
	 * Recipient constructor.
	 *
	 * @param string $email
	 * @param string $name
	 */
	public function __construct( string $email, string $name = '' )
	{
		$this->email = $email;
		$this->name = $name;
	}

	/**
	 * Factory from array with email index required and name key recommended.
	 *
	 * @param $array
	 *
	 * @return RecipientContract
	 */
	public static function fromArray( array  $array )
	{
		$obj = new static( $array[ 'email' ] );
		if( isset( $array[ 'name' ] ) ){
			return $obj->setName( $array[ 'name' ] );
		}
		return $obj;

	}

	/** @inheritdoc */
	public function toArray() : array
	{

		return[
			'email' => $this->getEmail(),
			'name' => $this->getName()
		];

	}

	/**
	 * Determine if recipient is empty IE not usable
	 *
	 * @return bool
	 */
	public function empty() : bool
	{
		if( ! is_string( $this->email ) || empty( $this->email ) ){
			return true;
		}

		return false;
	}

	/**
	 * Set email address prop from string
	 *
	 * @param string $email
	 *
	 * @return RecipientContract
	 */
	public function setEmail( string $email ) : RecipientContract
	{
		$this->email = $email;
		return $this;
	}

	/**
	 * Get email address
	 *
	 * @return string
	 */
	public function getEmail() : string
	{
		return trim( $this->email );
	}

	/**
	 * Set name prop from string
	 *
	 * @param string $name
	 *
	 * @return RecipientContract
	 */
	public function setName( string  $name ) : RecipientContract
	{
		$this->name = $name;
		return $this;
	}

	/**
	 * Get name property
	 *
	 * @return string
	 */
	public function getName() : string
	{
		if( empty( $this->name ) ){
			return '';
		}

		return $this->name;
	}


	/** @inheritdoc */
	public function jsonSerialize()
	{
		return array_filter(
			[
				'name'  => $this->getName(),
				'email' => $this->getEmail()
			],
			function ($value) {
				return $value !== null;
			}
		) ?: null;
	}
}
