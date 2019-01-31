<?php


namespace calderawp\caldera\WordPressPlugin\Contracts;

use calderawp\interop\Contracts\CalderaModule;
use calderawp\caldera\restApi\Contracts\CalderaRestApiContract;

interface CalderaWordPressPluginContract extends CalderaModule
{
	/**
	 * @return  CalderaRestApiContract
	 */
	public function getRestApiModule(): CalderaRestApiContract;
}
