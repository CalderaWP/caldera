<?php


namespace calderawp\caldera\Messaging\Models\Transformers;


use calderawp\caldera\Messaging\Contracts\ModelContract;
use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;
use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Message as MessageModel;

class Message extends Transformer
{
	protected function getUri(): string
	{
		return '/messages';
	}

	public function getController(): Controller
	{
		// TODO: Implement getController() method.
	}

	protected function factory(array $items = []): ModelContract
	{
		return MessageModel::fromArray($items);
	}

	protected function getHttpType(): string
	{
		return 'rest';
	}
}
