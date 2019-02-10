<?php


namespace calderawp\caldera\Messaging\Entities;


class EmailFromCalderaMail extends Recipient {


	public function getName() : string
	{
		return 'Caldera Mail';
	}

	public function getEmail() : string
	{
		return 'no-reply@calderaformspro.net';
	}

}
