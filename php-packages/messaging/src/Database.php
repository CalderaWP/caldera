<?php


namespace calderawp\caldera\Messaging;


use calderawp\DB\Tables;
use WpDbTools\Type\TableSchema;
use calderawp\caldera\Messaging\Contracts\CalderaMessagingDatabaseContract;
use \calderawp\DB\Contracts\CreatesTablesContract;
class Database implements CalderaMessagingDatabaseContract
{
	/**
	 * @var Tables
	 */
	protected $tables;
	public function __construct(Tables $tables)
	{
		$this->tables = $tables;
	}

	/**
	 * @param TableSchema $tableSchema
	 *
	 * @return bool
	 */
	public function createTable(TableSchema $tableSchema)
	{
		return $this->tables->createTable($tableSchema);
	}
}
