<?php


namespace calderawp\caldera\Events\Contracts;

use calderawp\caldera\Events\Filters;

interface CalderaEventsContract
{
	/** @inheritdoc */
	public function getHooks(): Filters;
}
