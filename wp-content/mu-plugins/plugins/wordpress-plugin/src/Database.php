<?php


namespace calderawp\caldera\WordPressPlugin;


use calderawp\DB\CalderaForms\Loader;
use calderawp\DB\Table;
use calderawp\DB\Tables;

class Database
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
	 * Create tables for forms and form entries
	 */
	public function formsDatabase(){
		$this->tables->addTableSchema('forms', Loader::formsSchemaYamlString());
		$this->tables->addTableSchema('entry', Loader::formEntrySchemaYamlString());
		$this->tables->addTableSchema('entryValues', Loader::formEntryValuesSchemaYamlString());
		$this->tables->createTable(
			$this->tables->getTableSchema('forms' )
		);
		$this->tables->createTable(
			$this->tables->getTableSchema('entry' )
		);
		$this->tables->createTable(
			$this->tables->getTableSchema('entryValues' )
		);
	}

}
