<?php

namespace calderawp\caldera\Messaging\Contracts;


/**
 * Class Model
 *
 * Should be using calderaw/interop Model. This is a temporary bridge while migrating in Laravel models
 */
interface ModelContract
{
	/** @inheritdoc */
	public function getAllowedProperties(): array;

	/** @inheritdoc */
	public function getSchema(): array;

	/**
	 * @param array $schema
	 *
	 * @return ModelContract
	 */
	public function setSchema(array $schema): ModelContract;

	public function getId(): int;
}
