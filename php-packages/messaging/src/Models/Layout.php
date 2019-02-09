<?php


namespace calderawp\caldera\Messaging\Models;


class Layout extends Model
{

	/** @var int */
	protected $account;
	/** @var int */
	protected $id;
	/** @var array */
	protected $config;

	/**
	 * @return int
	 */
	public function getAccount(): int
	{
		return $this->account;
	}

	/**
	 * @param int $account
	 *
	 * @return Layout
	 */
	public function setAccount(int $account): Layout
	{
		$this->account = $account;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getId(): int
	{
		return $this->id;
	}

	/**
	 * @param int $id
	 *
	 * @return Layout
	 */
	public function setId(int $id): Layout
	{
		$this->id = $id;
		return $this;
	}

	/**
	 * @return array
	 */
	public function getConfig(): array
	{
		return $this->config;
	}

	/**
	 * @param array $config
	 *
	 * @return Layout
	 */
	public function setConfig(array $config): Layout
	{
		$this->config = $config;
		return $this;
	}



}
