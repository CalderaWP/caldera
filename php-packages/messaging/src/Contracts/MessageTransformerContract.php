<?php


namespace calderawp\caldera\Messaging\Contracts;
use calderawp\caldera\Messaging\Contracts\RestControllerContract as Controller;


interface MessageTransformerContract
{


	/**
	 * @param Controller $controller
	 *
	 * @return MessageTransformerContract
	 */
	 public function setController(Controller$controller): MessageTransformerContract;

	public function getHttpType(): string;
}
