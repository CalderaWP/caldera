<?php

namespace calderawp\caldera\WordPressPlugin\Contracts;

use calderawp\caldera\DataSource\WordPressData\Contracts\PostTypeFactoryContract;
use calderawp\caldera\DataSource\WordPressData\PostTypeWithCustomMetaTable;
use calderawp\caldera\Messaging\Contracts\CalderaMessagingContract;
use calderawp\caldera\restApi\Contracts\CalderaRestApiContract;
use calderawp\CalderaContainers\Service\Container as ServiceContainer;
use calderawp\interop\Contracts\CalderaModule;
use WpDbTools\Type\TableSchema;

interface CalderaWordPressPluginContract
{
	/** @inheritdoc */
	public function getIdentifier(): string;

	/** @inheritdoc */
	public function registerServices(ServiceContainer $container): CalderaModule;

	/**
	 * @return \wpdb
	 */
	public function getWpdb(): \wpdb;

	/**
	 * @param \wpdb $wpdb
	 *
	 * @return CalderaWordPressPluginContract
	 */
	public function setWpdb(\wpdb $wpdb): CalderaWordPressPluginContract;

	/**
	 * @return  CalderaRestApiContract
	 */
	public function getRestApiModule(): CalderaRestApiContract;

	public function getMessagingModule(): CalderaMessagingContract;

	/**
	 * Get data source -- a MySQL table - for messages
	 *
	 * @return PostTypeWithCustomMetaTable
	 * @throws \calderawp\caldera\DataSource\Exception
	 */
	public function getMessageDataSource(): PostTypeWithCustomMetaTable;

	/**
	 * Get the post type factory
	 *
	 * @return PostTypeFactoryContract
	 */
	public function getPostTypeFactory(): PostTypeFactoryContract;

	public function getMessageTableSchema(): TableSchema;
}
