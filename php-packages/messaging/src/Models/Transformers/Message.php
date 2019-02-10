<?php


namespace calderawp\caldera\Messaging\Models\Transformers;


use calderawp\caldera\Messaging\Contracts\ControllerContract as Controller;
use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Message as MessageModel;

class Message extends Transformer
{
	protected function getUri(): string
	{
		return '/messages';
	}

	protected function getController(): Controller
	{
		// TODO: Implement getController() method.
	}

	protected function factory(array $items = []): Model
	{
		return MessageModel::fromArray($items);
	}

	protected function getHttpType(): string
	{
		return 'rest';
	}
}
