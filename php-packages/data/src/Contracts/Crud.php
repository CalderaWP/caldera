<?php


namespace calderawp\caldera\Db\Contracts;


interface Crud
{


	public function create(array $data):array;
	public function read(int $id): array;
	public function update(int $id, array $data):array;
	public function delete($id):bool;
}
