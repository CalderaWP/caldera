<?php


namespace calderawp\caldera\Messaging\Models\Rest;


use calderawp\caldera\restApi\Route;

class MessageRoute extends Route
{
	protected $endpoints;

	public function addEndpoint(
		\calderawp\interop\Contracts\Rest\Endpoint $endpoint): \calderawp\interop\Contracts\Rest\Route
	{
		$this->endpoints[] = $endpoint;
		return $this;
	}

	/**
	 * @inheritDoc
	 */
	public function getEndpoints(): array
	{
		return !empty($this->endpoints) ? $this->endpoints : [];
	}
}
