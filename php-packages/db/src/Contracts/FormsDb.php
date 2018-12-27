<?php


namespace calderawp\caldera\Db\Contracts;
use calderawp\caldera\Db\Contracts\Crud;
use calderawp\caldera\Db\Contracts\Query;


interface FormsDb
{


	public function getCrud(): Crud;
	public function getQuery(): Query;
}
