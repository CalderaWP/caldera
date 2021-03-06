<?php


namespace calderawp\caldera\Messaging\Entities;
use calderawp\caldera\Messaging\Entities\Contracts\RecipientContract;
use calderawp\caldera\Messaging\Entities\Contracts\RecipientsContracts;

class Recipients extends IteratableCollection implements RecipientsContracts
{

	/**
	 * @var array
	 */
	protected $recipients;

	/** @inheritdoc */
	protected function storeKey() : string
	{
		return 'recipients';
	}

	/** @inheritdoc */
	public function addRecipient( RecipientContract $recipient ) : Recipients
	{
		$this->recipients[] = $recipient;
		return $this;
	}

	/** @inheritdoc */
	public function addEmpty(){
		$this->addRecipient( new Recipient( ' ', ' ') );
	}

	/** @inheritdoc */
	public function toArray() : array
	{
		$array = [];
		if (  ! $this->empty() ) {
			foreach ( $this->recipients as $recipient ) {
				$array[] = $recipient->toArray();
			}
		}

		return $array;
	}

	/** @inheritdoc */
	public function empty() : bool
	{
		return empty( $this->recipients );
	}

	/**
	 * @inheritdoc
	 * @return RecipientContract
	 */
	public function current()
	{
		return parent::current();
	}

	protected function getItems(): array
	{
		return $this->recipients ? $this->recipients : [];
	}


}
