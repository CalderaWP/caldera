<?php


namespace calderawp\caldera\Messaging\Entities;


class EntryData extends Entity
{

	/**
	 * @var MessageEntryFields
	 */
	protected $fields;

	/**
	 * @return MessageEntryFields
	 */
	public function getFields(): MessageEntryFields
	{
		if( empty( $this->fields ) ){
			$this->setFields(new MessageEntryFields());
		}
		return $this->fields;
	}

	/**
	 * @param MessageEntryFields $fields
	 *
	 * @return EntryData
	 */
	public function setFields(MessageEntryFields $fields): EntryData
	{
		$this->fields = $fields;
		return $this;
	}



}
