<?php


namespace calderawp\caldera\Messaging\Models\Transformers;


use calderawp\caldera\Messaging\Contracts\ModelContract;
use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;
use calderawp\caldera\Messaging\Models\Model;
use calderawp\caldera\Messaging\Models\Message as MessageModel;
use calderawp\caldera\Messaging\Contracts\MessageTransformerContract;

class Message extends Transformer implements MessageTransformerContract
{
	protected $controller;
	protected function getUri(): string
	{
		return '/messages';
	}

	public function setController(Controller $controller): MessageTransformerContract
	{
		$this->controller = $controller;
		return $this;
	}

	public function getController(): Controller
	{
		return $this->controller;
	}

	protected function factory(array $items = []): ModelContract
	{
		return MessageModel::fromArray($items);
	}

	public function getHttpType(): string
	{
		return 'rest';
	}
}
