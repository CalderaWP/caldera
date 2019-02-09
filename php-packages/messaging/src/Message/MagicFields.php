<?php


namespace calderawp\caldera\Messaging\Message;


use calderawp\caldera\Messaging\Entities\MessageEntryField;
use calderawp\caldera\Messaging\Models\Message;

class MagicFields
{
	use  Magic;

	/** @var Message  */
	protected $message;

	/** @var  array */
	protected $fields;

	/**
	 * slug => value
	 *
	 * @var array
	 */
	protected $slugMap;


	/**
	 * MagicFields constructor.
	 *
	 * @param Message $message
	 */
	public function __construct( Message $message )
	{

		$this->message = $message;

	}

	/**
	 *  Parse content using this message's fields
	 *
	 * @param string $content
	 *
	 * @return mixed|string
	 */
	public function parse( string $content )
	{
		$this->findFields();
		$matches = $this->explodeFieldMagic( $content );
		if( ! empty( $matches[1] ) ){
			foreach ( $matches[ 1 ] as $key => $slug ) {

				$value = $this->findFieldValueBySlug( $slug );
				if( is_array( $value ) ){
					$value = implode( ', ', $value );
				}

				$content = str_replace( $matches[ 0 ][ $key ], $value, $content );
			}

		}

		return $content;

	}

	/**
	 * Configure fields for easy access by parser
	 */
	protected function findFields()
	{

		$this->fields = $this->message->getEntryData()->getFields();
		if (  ! empty( $this->fields ) ) {
			/**
			 * @var  $id
			 * @var MessageEntryField $field
			 */
			foreach ( $this->fields as $id => $field ) {
				$this->slugMap[ $field->slug ] = $field->value;
			}
		}

	}

	/**
	 * Find field value by slug
	 *
	 * @param string $slug
	 *
	 * @return mixed
	 */
	protected function findFieldValueBySlug( string $slug )
	{
		if( isset( $this->slugMap[ $slug ] ) ){
			return $this->slugMap[ $slug ];
		}

	}
}
