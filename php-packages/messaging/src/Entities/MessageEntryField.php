<?php


namespace calderawp\caldera\Messaging\Entities;


class MessageEntryField extends Entity
{

	/** @var string */
	protected $value;
	/** @var string */
	protected $slug;

	protected $id;
	protected $entryId;
	protected $fieldId;


	public static function fromArray(array $items): Entity
	{
		if( isset( $items['entry_id'])){
			$items[ 'entryId' ] = $items[ 'entry_id' ];
		}
		if( isset( $items['field_id'])){
			$items[ 'fieldId' ] = $items[ 'field_id' ];
		}

		return parent::fromArray($items);
	}

}
