<?php


namespace calderawp\caldera\WordPressPlugin;


use calderawp\caldera\Forms\DataSources\FormsDataSources;
use calderawp\caldera\Forms\ResultHandlers;
use calderawp\DB\CalderaForms\Loader;
use calderawp\DB\Table;
use calderawp\DB\Tables;
use calderawp\interop\Contracts\WordPress\Wpdb;

class Database
{

	/**
	 * @var Tables
	 */
	protected $tables;

	/** @var FormsDataSources */
	protected $dataSources;

	/**
	 * Database constructor.
	 *
	 * @param Tables $tables
	 * @param Wpdb $wpdb
	 */
	public function __construct(Tables $tables)
	{
		$this->tables = $tables;

	}

	public function getDataSources()
	{
		if( ! $this->dataSources ){
			$this->dataSources = new FormsDataSources(
				(new Table( $this->tables->getDatabaseAdapter(),$this->formSchema() )),
				(new Table( $this->tables->getDatabaseAdapter(),$this->entrySchema() )),
				(new Table( $this->tables->getDatabaseAdapter(),$this->entryValuesSchema() )),
				new ResultHandlers()
			);
		}
		return $this->dataSources;
	}

	/**
	 * Create tables for forms and form entries
	 */
	public function formsDatabase(){
		$this->tables->addTableSchema('forms', Loader::formsSchemaYamlString());
		$this->tables->addTableSchema('entry', Loader::formEntrySchemaYamlString());
		$this->tables->addTableSchema('entryValues', Loader::formEntryValuesSchemaYamlString());
		$this->tables->createTable(
			$this->formSchema()
		);
		$this->tables->createTable(
			$this->entrySchema()
		);
		$this->tables->createTable(
			$this->entryValuesSchema()
		);
	}

	/**
	 * @return null|\WpDbTools\Type\TableSchema
	 */
	protected function formSchema()
	{
		return $this->tables->getTableSchema('forms');
	}

	/**
	 * @return null|\WpDbTools\Type\TableSchema
	 */
	protected function entrySchema()
	{
		return $this->tables->getTableSchema('entry');
	}

	/**
	 * @return null|\WpDbTools\Type\TableSchema
	 */
	protected function entryValuesSchema()
	{
		return $this->tables->getTableSchema('entryValues');
	}

}
