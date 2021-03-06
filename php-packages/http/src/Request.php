<?php


namespace calderawp\caldera\Http;

use calderawp\interop\Contracts\Rest\RestRequestContract;
use calderawp\interop\Traits\Rest\ProvidesHttpHeaders;
use calderawp\interop\Traits\Rest\ProvidesRestParams;

class Request implements RestRequestContract
{

	use
		//get and set headers
		ProvidesHttpHeaders,
		//Get and set params (query vars or body arguments)
		ProvidesRestParams;

	/**
	 * @param array $items
	 *
	 * @return Request
	 */
	public static function fromArray(array $items = ['headers' => [], 'params' => [] ])
	{
		$obj = new static();
		if (! empty($items['headers'])) {
			foreach ($items['headers'] as $header => $value) {
				$obj->setHeader($header, $value);
			}
		}

		if (! empty($items['params'])) {
			$obj->setParams($items['params']);
		}
		return $obj;
	}
}
