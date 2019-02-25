<?php

namespace calderawp\caldera\WordPressPlugin\Contracts;

use calderawp\DB\Tables;

interface DatabaseContract
{
	/**
	 * @return Tables
	 */
	public function getTables(): Tables;

	public function getDataSources();

	/**
	 * Create tables for forms and form entries
	 */
	public function formsDatabase();
}
