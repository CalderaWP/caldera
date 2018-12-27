<?php


namespace calderawp\interop\Contracts\Rest;

interface RestRequestContract
{

	/**
	 * Get parameter from request
	 *
	 * @param string $paramName
	 *
	 * @return mixed
	 */
	public function getParam(string $paramName);

	/**
	 * Get all params of request
	 *
	 * @return array
	 */
	public function getParams(): array;

	/**
	 * Set parameter in request
	 *
	 * @param string $paramName
	 * @param mixed $paramValue
	 *
	 * @return $this
	 */
	public function setParam(string $paramName, $paramValue): RestRequestContract;

	/**
	 * Set parameters of request
	 *
	 * @param array $params
	 *
	 * @return RestRequestContract
	 */
	public function setParams(array $params): RestRequestContract;

	/**
	 * Does request have param?
	 *
	 * @param string $paramName
	 *
	 * @return bool
	 */
	public function hasParam(string $paramName): bool;


	/**
	 * Get header from request
	 *
	 * @param string $headerName
	 *
	 * @return mixed
	 */
	public function getHeader(string $headerName);

	/**
	 * Set header in request
	 *
	 * @param string $headerName
	 * @param mixed $headerValue
	 *
	 * @return mixed
	 */
	public function setHeader(string $headerName, $headerValue): RestRequestContract;

	/**
	 * Does request have header?
	 *
	 * @param string $headerName
	 *
	 * @return bool
	 */
	public function hasHeader(string $headerName): bool;
}