<?php


namespace calderawp\caldera\Messaging\Entities;


class MessageEntryFields extends IteratableCollection
{

	protected $entryFields;

	public static function fromArray( array  $items ): MessageEntryFields
	{
		$collection = new static();
		foreach ( $items as $item ){
			if( is_a( $item, MessageEntryField::class)){
				$collection->addMessageEntryField($item);
			}
			if( is_array($item)){
				$collection->addMessageEntryField(MessageEntryField::fromArray($item));
			}
		}
		return $collection;
	}
	/**
	 * @inheritDoc
	 */
	protected function storeKey(): string
	{
		return 'entryFields';
	}


	protected function getItems(): array
	{
		return is_array($this->entryFields) ? $this->entryFields : [];
	}


	public function addMessageEntryField( MessageEntryField $messageEntryField ): MessageEntryFields
	{
		$this->entryFields[] = $messageEntryField;
		return $this;
	}
}
