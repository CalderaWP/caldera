<?php


namespace calderawp\caldera\Messaging\Models;


class Account extends Model
{

	/** @var int */
	protected $wpId;
	/** @var string */
	protected $publicKey;
	/** @var string */
	protected $privateKey;
	/** @var Layout */
	protected $defaultLayout;
	/** @var int */
	protected $plan;
	/** @var bool */
	protected $active;
	/** @var int */
	protected $uses;
	/** @var int */
	protected $maxUses;
	/** @var int */
	protected $totalUses;
	/** @var \DateTime */
	protected $lastReset;

	/**
	 * @return int
	 */
	public function getWpId(): int
	{
		return $this->wpId;
	}

	/**
	 * @param int $wpId
	 *
	 * @return Account
	 */
	public function setWpId(int $wpId): Account
	{
		$this->wpId = $wpId;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getPublicKey(): string
	{
		return $this->publicKey;
	}

	/**
	 * @param string $publicKey
	 *
	 * @return Account
	 */
	public function setPublicKey(string $publicKey): Account
	{
		$this->publicKey = $publicKey;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getPrivateKey(): string
	{
		return $this->privateKey;
	}

	/**
	 * @param string $privateKey
	 *
	 * @return Account
	 */
	public function setPrivateKey(string $privateKey): Account
	{
		$this->privateKey = $privateKey;
		return $this;
	}

	/**
	 * @return Layout
	 */
	public function getDefaultLayout(): Layout
	{
		return $this->defaultLayout;
	}

	/**
	 * @param Layout $defaultLayout
	 *
	 * @return Account
	 */
	public function setDefaultLayout(Layout $defaultLayout): Account
	{
		$this->defaultLayout = $defaultLayout;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getPlan(): int
	{
		return $this->plan;
	}

	/**
	 * @param int $plan
	 *
	 * @return Account
	 */
	public function setPlan(int $plan): Account
	{
		$this->plan = $plan;
		return $this;
	}

	/**
	 * @return bool
	 */
	public function isActive(): bool
	{
		return $this->active;
	}

	/**
	 * @param bool $active
	 *
	 * @return Account
	 */
	public function setActive(bool $active): Account
	{
		$this->active = $active;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getUses(): int
	{
		return $this->uses;
	}

	/**
	 * @param int $uses
	 *
	 * @return Account
	 */
	public function setUses(int $uses): Account
	{
		$this->uses = $uses;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getMaxUses(): int
	{
		return $this->maxUses;
	}

	/**
	 * @param int $maxUses
	 *
	 * @return Account
	 */
	public function setMaxUses(int $maxUses): Account
	{
		$this->maxUses = $maxUses;
		return $this;
	}

	/**
	 * @return int
	 */
	public function getTotalUses(): int
	{
		return $this->totalUses;
	}

	/**
	 * @param int $totalUses
	 *
	 * @return Account
	 */
	public function setTotalUses(int $totalUses): Account
	{
		$this->totalUses = $totalUses;
		return $this;
	}

	/**
	 * @return \DateTime
	 */
	public function getLastReset(): \DateTime
	{
		return $this->lastReset;
	}

	/**
	 * @param \DateTime $lastReset
	 *
	 * @return Account
	 */
	public function setLastReset(\DateTime $lastReset): Account
	{
		$this->lastReset = $lastReset;
		return $this;
	}

}
