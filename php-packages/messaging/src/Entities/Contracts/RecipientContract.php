<?php

namespace calderawp\caldera\Messaging\Entities\Contracts;

interface RecipientContract
{
	/**
	 * Determine if recipient is empty IE not usable
	 *
	 * @return bool
	 */
	public function empty(): bool;

	/**
	 * Set email address prop from string
	 *
	 * @param string $email
	 *
	 * @return RecipientContract
	 */
	public function setEmail(string $email): RecipientContract;

	/**
	 * Get email address
	 *
	 * @return string
	 */
	public function getEmail(): string;

	/**
	 * Set name prop from string
	 *
	 * @param string $name
	 *
	 * @return RecipientContract
	 */
	public function setName(string $name): RecipientContract;

	/**
	 * Get name property
	 *
	 * @return string
	 */
	public function getName(): string;
}
